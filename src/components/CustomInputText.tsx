import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

interface CustomInputTextProps {
    label: string;
}

export const CustomInputText: FC<CustomInputTextProps> = ({ label }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleChangeValue = (val: string) => {
        setInputValue(val);
    };
    console.log(inputValue)
    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValue(e.target.value)}
                value={inputValue}
            />
        </>
    );
};
