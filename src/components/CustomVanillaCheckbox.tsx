import styled from "@emotion/styled";
import { ChangeEvent, FC } from "react";
import { useFormContext } from "react-hook-form";

interface CustomVanillaCheckboxProps {
    label: string;
    onChange: (val: boolean) => void;
    value: string;
}

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
`;

export const CustomVanillaCheckbox: FC<CustomVanillaCheckboxProps> = ({ label, value, onChange }) => {
    console.log(value);
    const { register } = useFormContext();

    return (
        <StyledInput>
            <label>{label}</label>
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(e.target.checked);
                }}
                value={value}
                type="checkbox"
            />
        </StyledInput>
    );
};
