import { FC } from "react";

interface IButtonProps {
    styleBtn?: string;
    position?: PositionLabel;
    label?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

export enum PositionLabel {
    Left = "flex",
    Right = "flex-row-reverse",
    Top = "flex-col",
    Bottom = "flex-col-reverse",
}

const Button: FC<IButtonProps> = ({
    styleBtn,
    label,
    onClick,
    icon,
    disabled,
    position = PositionLabel.Left,
}) => {
    return (
        <div>
            <button className={`btn ${styleBtn}`} onClick={onClick} disabled={disabled}>
                <div className={label ? `flex items-center gap-2 ${position}` : ""}>
                    <span>{label && label}</span>
                    <span>{icon && icon}</span>
                </div>
            </button>
        </div>
    );
};
export default Button;
