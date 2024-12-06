import { FC } from "react";

interface LoaderProps {
    message?: string;
}

const Loader: FC<LoaderProps> = ({ message }) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <span className="font-bold text-lg">{message}</span>
            <span className="loading loading-spinner text-secondary"></span>
        </div>
    );
};

export default Loader;
