// Registration and Login form types
export type InputFieldType = {
    value: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
    placeholder: string;
    icon: React.ReactNode;
    errorMessage?: string | null;
};

export enum ErrorMessages {
    username = "Username is required",
    password = "Password is required",
    DoNotMatch = "Passwords do not match",
    unexpectedError = "An unexpected error occurred. Please try again.",
}
