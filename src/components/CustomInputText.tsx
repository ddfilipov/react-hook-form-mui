import styled from "@emotion/styled";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { useFormContext } from "react-hook-form";

interface CustomInputTextProps {
    label: string;
    onChange: (val: string) => void;
    value: string;
}

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 10px;
    gap: 5px;
`;

export const CustomInputText: FC<CustomInputTextProps> = ({ label, value, onChange }) => {
    const handleChangeValue = (val: string) => {
        onChange(val);
    };

    const { register } = useFormContext();

    return (
        <StyledInput>
            <label>{label}</label>
            <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValue(e.target.value)}
                // onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValue(e.target.value)}
                value={value}
                // {...register("name")}
            />
        </StyledInput>
    );
};
