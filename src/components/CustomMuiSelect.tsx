import styled from "@emotion/styled";
import { Box, FormControl, InputLabel, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";

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
    const [nationality, setNationality] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setNationality(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <InputLabel>Nationality</InputLabel>
                <Select defaultValue={"spain"} value={value} onChange={handleChange}>
                    <option value={"spain"}>Spain</option>
                    <option value={"usa"}>USA</option>
                    <option value={"uk"}>UK</option>
                </Select>
            </FormControl>
        </Box>
    );
};
