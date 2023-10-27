import { ReactNode, createContext, useState } from "react"
import { api } from "../../lib/axios";
import axios from "axios";

interface User {
    username: string,
    password: string
}

interface AutenticacaoContextType {
    user: User | null;
    signin: (username: string, password: string) => Promise<boolean>;
    signout: () => void;
}

interface AutenticacaoProviderProps {
    children: ReactNode;
}

export const AutenticacaoContext = createContext({} as AutenticacaoContextType)

const AutenticacaoProvider = ({ children }: AutenticacaoProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    async function signin(username: string, password: string) {
        const response = await api.post('/auth/login', { username, password });
        const token = response.headers.authorization;
        console.log('O dados do login é: ', response.data)
        if (token) {
            setToken(token)
            setUser(response.data)
            console.log("O token é: ", token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return true
        }
        return false
    }

    async function signout() {
        localStorage.removeItem('authToken')
        delete axios.defaults.headers.common['Authorization'];
        setUser(null)
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AutenticacaoContext.Provider value={{ user, signin, signout }}>
            {children}
        </AutenticacaoContext.Provider>
    );
}

export default AutenticacaoProvider;