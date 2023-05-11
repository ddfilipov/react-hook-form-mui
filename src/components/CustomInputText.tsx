import styled from "@emotion/styled";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

interface CustomInputTextProps {
    label: string;
}

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
`;
export const CustomInputText: FC<CustomInputTextProps> = ({ label }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleChangeValue = (val: string) => {
        setInputValue(val);
    };
    console.log(inputValue);
    return (
        <StyledInput>
            <label>{label}</label>
            <input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeValue(e.target.value)}
                value={inputValue}
            />
        </StyledInput>
    );
};
