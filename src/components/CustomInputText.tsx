import { FC } from "react";

interface CustomInputTextProps {
    label: string;
}

export const CustomInputText: FC<CustomInputTextProps> = ({ label }) => {
    return (
        <>
            <label>{label}</label>
            <input type="text" />
        </>
    );
};
