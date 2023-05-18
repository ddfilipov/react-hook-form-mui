import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";

interface CustomInputTextProps {
    // label: string;
    // onChange: (val: string) => void;
    // value: string;
}

export const CustomMuiSelect: FC<CustomInputTextProps> = ({}) => {
    const [nationality, setNationality] = useState<string>("spain");

    const handleChange = (event: SelectChangeEvent) => {
        setNationality(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <InputLabel>Nationality</InputLabel>
                <Select value={nationality} defaultValue="spain" onChange={handleChange}>
                    <MenuItem value={"spain"}>Spain</MenuItem>
                    <MenuItem value={"usa"}>USA</MenuItem>
                    <MenuItem value={"uk"}>UK</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
