import { MainComponent } from "@/components/organisms/MainWrapper";
import "../app/globals.css";
import componentStyleOverrides from "@/themes/compStyleOverride";
import { ThemeProvider } from "@emotion/react";

const theme = componentStyleOverrides({});
export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <MainComponent></MainComponent>
        </ThemeProvider>
    );
}
