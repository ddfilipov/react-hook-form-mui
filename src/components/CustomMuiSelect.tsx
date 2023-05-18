import { Box, FormControl, InputLabel, Select, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";

interface CustomInputTextProps {
    // label: string;
    // onChange: (val: string) => void;
    // value: string;
}

export const CustomMuiSelect: FC<CustomInputTextProps> = ({}) => {
    const [nationality, setNationality] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setNationality(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <InputLabel>Nationality</InputLabel>
                <Select defaultValue={"spain"} value={nationality} onChange={handleChange}>
                    <option value={"spain"}>Spain</option>
                    <option value={"usa"}>USA</option>
                    <option value={"uk"}>UK</option>
                </Select>
            </FormControl>
        </Box>
    );
};
