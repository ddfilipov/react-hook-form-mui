import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";

interface CustomInputTextProps {
    onChange: (val: any) => void;
    value: string;
}

export type TCountries = "spain" | "usa" | "uk";

export const CustomMuiSelect: FC<CustomInputTextProps> = ({ onChange, value }) => {
    return (
        <Box sx={{ minWidth: 1500 }}>
            <InputLabel>Nationality</InputLabel>
            <Select value={value} defaultValue="spain" onChange={onChange}>
                <MenuItem value={"spain"}>Spain</MenuItem>
                <MenuItem value={"usa"}>USA</MenuItem>
                <MenuItem value={"uk"}>UK</MenuItem>
            </Select>
        </Box>
    );
};
