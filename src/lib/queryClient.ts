import { QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

export const queryClient = new QueryClient({
	defaultOptions: {
		mutations: {
			onError(error) {
				if (isAxiosError(error)) {
					if (error.response?.data && "message" in error.response.data) {
            toast.error(error.response?.data.message);
        } else {
            toast.error("Erro ao processar operação!");
        }
				}
			},
		},
	},
});
