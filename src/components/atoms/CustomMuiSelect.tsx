import { Box, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface CustomInputTextProps {
    onChange: (val: any) => void;
    value: string;
}

export type TCountries = "spain" | "usa" | "uk";

export const CustomMuiSelect: FC<CustomInputTextProps> = ({ onChange, value }) => {
    return (
        <Box>
            <InputLabel>Nationality</InputLabel>
            <Select value={value} defaultValue="spain" onChange={onChange} sx={{ minWidth: "250px" }}>
                <MenuItem value={"spain"}>Spain</MenuItem>
                <MenuItem value={"usa"}>USA</MenuItem>
                <MenuItem value={"uk"}>UK</MenuItem>
            </Select>
        </Box>
    );
};
