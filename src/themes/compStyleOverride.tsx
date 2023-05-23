import { createTheme } from "@mui/material";

export default function componentStyleOverrides(theme: any) {
    return createTheme({
        components: {
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        "&.MuiFormLabel-root": {
                            color: "white",
                        },
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        "&.MuiInputBase-root:before": {
                            borderBottom: "none",
                            content: "none",
                        },
                        "&.MuiInputBase-root:after": {
                            borderBottom: "none",
                        },
                        "&.MuiInputBase-root": {
                            border: `1px solid white`,
                            color: "white",
                        },
                        "&.css-1lkr5rz-MuiInputBase-input-MuiOutlinedInput-input": {
                            color: "white",
                        },
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        "&.MuiSvgIcon-root": {
                            color: "white",
                        },
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        color: "white",
                        borderColor: "white",
                    },
                },
            },
        },
    });
}
