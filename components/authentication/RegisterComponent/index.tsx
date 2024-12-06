import InputField from "@/components/authentication/InputField";
import { registerUser } from "@/services/authService";
import { ErrorMessages, InputFieldType } from "@/types/authentication-type";
import { validateRegistrationFields } from "@/utils/validateAuthenticationFields";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { toast } from "react-toastify";

const RegisterComponent: FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { replace } = useRouter();

    const registerHandler = async (): Promise<void> => {
        const validationResult = validateRegistrationFields(username, password, confirmPassword);

        if (validationResult !== true) {
            setErrorMessage(validationResult);
            return;
        }
        setErrorMessage(null);

        try {
            const response = await registerUser(username, password);
            console.log(response);

            if (response.status === 201) {
                toast.success(response.message, {
                    autoClose: 2000,
                });
                setTimeout(() => {
                    replace("/");
                }, 2000);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error(ErrorMessages.unexpectedError);
        }
    };

    const InputFields: InputFieldType[] = [
        {
            value: username,
            onchange: (e) => setUsername(e.target.value),
            type: "text",
            name: "username",
            placeholder: "Username",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
            ),
        },
        {
            value: password,
            onchange: (e) => setPassword(e.target.value),
            type: "password",
            name: "password",
            placeholder: "Password",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            value: confirmPassword,
            onchange: (e) => setConfirmPassword(e.target.value),
            type: "password",
            name: "confirmPassword",
            placeholder: "Repeat Password",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className="flex flex-col gap-4 w-4/5 md:w-1/3 mx-auto h-screen justify-center">
            <h1 className="text-center font-semibold">Register form</h1>

            <div className="flex flex-col gap-2">
                {InputFields.map((field, index) => (
                    <InputField {...field} key={index} />
                ))}
            </div>
            {errorMessage && <p className="text-error">{errorMessage}</p>}

            <button onClick={registerHandler} className="btn btn-primary">
                Register
            </button>
            <Link href="/login" className="btn btn-ghost">
                Already have an account? Login
            </Link>
        </div>
    );
};

export default RegisterComponent;
