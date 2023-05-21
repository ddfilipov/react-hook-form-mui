import styled from "@emotion/styled";
import { ChangeEvent, ChangeEventHandler, FC, HTMLInputTypeAttribute, useState } from "react";
import { useFormContext } from "react-hook-form";

interface CustomInputProps {
    label: string;
    onChange: (val: string) => void;
    value: string;
    type?: HTMLInputTypeAttribute | undefined;
}

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 10px;
    gap: 5px;
`;

export const CustomInput: FC<CustomInputProps> = ({ label, value, onChange, type = "text" }) => {
    const handleChangeValue = (val: string) => {
        onChange(val);
    };

    const { register } = useFormContext();

    return (
        <StyledInput>
            <label>{label}</label>
            <input
                type={type}
                // onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValue(e.target.value)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                value={value}
                // {...register("name")}
            />
        </StyledInput>
    );
};
