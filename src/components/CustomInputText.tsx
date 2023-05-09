import { ChangeEventHandler, FC } from "react";

interface CustomInputTextProps {
    label: string;
}

export const CustomInputText: FC<CustomInputTextProps> = ({ label }) => {
    const handleChangeValue = (e:  ChangeEventHandler<HTMLInputElement>) => {};
    return (
        <>
            <label>{label}</label>
            <input type="text" onChange={(e: ChangeEventHandler<HTMLInputElement>) => handleChangeValue(e)} />
        </>
    );
};
