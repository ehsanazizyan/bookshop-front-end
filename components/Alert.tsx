import { FC, useState } from "react";

interface AlertProps {
    alertClass: string;
    messageAlert: string;
    isVisible: boolean;
}

export enum AlertColor {
    WARNING = "alert-warning",
    INFO = "alert-info",
    SUCCESS = "alert-success",
    ERROR = "alert-error",
}

export const Alert: FC<AlertProps> = ({ alertClass, messageAlert, isVisible }) => {
    if (!isVisible) return null;

    function configD() {
        let D: string = "";
        if (alertClass === "alert-success")
            return (D = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z");
        else if (alertClass === "alert-warning")
            return (D =
                "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z");
        else if (alertClass === "alert-info")
            return (D = "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z");
        else if (alertClass === "alert-error")
            return (D = "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z");

        return D;
    }

    return (
        <div role="alert" className={` alert ${alertClass}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={configD()} />
            </svg>
            <div className="flex items-center gap-2 text-white">
                <span>{messageAlert}</span>
                <span
                    className={`${
                        alertClass !== "alert-success" && "hidden"
                    } loading loading-spinner loading-sm`}></span>
            </div>
        </div>
    );
};

export const useAlert = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [alertConfig, setAlertConfig] = useState<{ alertClass: string; messageAlert: string }>({
        alertClass: "",
        messageAlert: "",
    });

    const showAlert = (alertClass: string, messageAlert: string) => {
        setAlertConfig({ alertClass, messageAlert });
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 4000);
    };

    return { isVisible, alertConfig, showAlert };
};
