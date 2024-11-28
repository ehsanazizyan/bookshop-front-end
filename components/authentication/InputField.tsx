import { InputFieldType } from "@/types/authentication-type";
import { FC } from "react";

const InputField: FC<InputFieldType> = ({ value, onchange, type, placeholder, icon, name }) => {
    return (
        <>
            <label className="input input-bordered flex items-center gap-2">
                {icon}
                <input
                    value={value}
                    onChange={onchange}
                    type={type}
                    name={name}
                    className="grow"
                    placeholder={placeholder}
                />
            </label>
        </>
    );
};

export default InputField;
