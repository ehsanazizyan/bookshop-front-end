import EndPoints from "@/types/endPoints";
import axios, { AxiosError } from "axios";

// Register
interface RegisterResponse {
    status: number;
    message: string;
}

export async function registerUser(username: string, password: string): Promise<RegisterResponse> {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}${EndPoints.REGISTER}`,
            {
                username,
                password,
            }
        );

        return {
            status: response?.status || 201,
            message:
                `${response?.data?.message} Go to home page` ||
                "User registered successfully go to home page",
        };
    } catch (error: any) {
        console.log(error);
        return {
            status: error?.status || 400,
            message: error?.response.data?.message || "Network error",
        };
    }
}

//Login
interface LoginResponse {
    status: number;
    token?: string;
    message?: string;
}

interface LoginErrorResponse {
    message: string;
}

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${EndPoints.LOGIN}`, {
            username,
            password,
        });

        return {
            status: response.status,
            token: response.data?.token,
        };
    } catch (error: any) {
        const axiosError = error as AxiosError<LoginErrorResponse>;

        return {
            status: axiosError.response?.status || 400,
            message: axiosError.response?.data?.message || "Invalid username or password",
        };
    }
};
