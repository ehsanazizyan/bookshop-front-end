import { ErrorMessages } from "@/types/authentication-type";

// Two separate validation functions (validateRegistrationFields and validateLoginFields)
// are created to improve code readability and maintainability.
// While both functions share some validation logic (e.g., checking for username and password),
// the requirements for registration (e.g., confirmPassword) differ from login.
// By separating these concerns, we ensure that changes to one form's validation
// do not inadvertently affect the other.
// This approach also makes it easier to adapt to future changes in requirements for
// either registration or login forms.

export const validateRegistrationFields = (
    username: string,
    password: string,
    confirmPassword: string
): true | string => {
    if (!username) return ErrorMessages.username;
    if (!password) return ErrorMessages.password;
    if (password !== confirmPassword) return ErrorMessages.DoNotMatch;

    return true;
};

export const validateLoginFields = (username: string, password: string): true | string => {
    if (!username) return ErrorMessages.username;
    if (!password) return ErrorMessages.password;

    return true;
};
