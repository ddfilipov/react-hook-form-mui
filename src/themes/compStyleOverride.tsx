import { createTheme } from "@mui/material";

export default function componentStyleOverrides(theme: any) {
    return createTheme({
        components: {
            MuiSelect: {
                styleOverrides: {
                    select: {
                        color: "white",
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    listbox: {
                        fontFamily: "Roobert",
                    },
                },
            },
        },
    });
}
