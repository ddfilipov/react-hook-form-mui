import { FC } from "react";
import styled from "@emotion/styled";
import "../app/page.module.css";
import { VanillaForm } from "./VanillaForm";
import { MuiForm } from "./MuiForm";

const MainContainer = styled.div`
    border: 1px solid white;
    height: 100vh;
    padding: 10px;
`;

export const MainComponent: FC = () => {
    return (
        <MainContainer>
            <VanillaForm />
            <MuiForm />
        </MainContainer>
    );
};
