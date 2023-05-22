import styled from "@emotion/styled";
import { ChangeEvent, FC } from "react";

interface CustomVanillaCheckboxProps {
    label: string;
    onChange: (val: boolean) => void;
    value: boolean;
}

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    justify-content: start;
`;

export const CustomVanillaCheckbox: FC<CustomVanillaCheckboxProps> = ({ label, value, onChange }) => {
    return (
        <StyledInput>
            <label>{label}</label>
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.checked);
                }}
                checked={value}
                type="checkbox"
            />
        </StyledInput>
    );
};
