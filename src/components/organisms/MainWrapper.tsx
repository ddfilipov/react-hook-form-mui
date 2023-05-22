import { FC } from "react";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { VanillaForm } from "./VanillaForm";
import { VanillaFormCustomRhf } from "./VanillaFormCustomRhf";

const MainContainer = styled.div`
    border: 1px solid white;
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MainComponent: FC = () => {
    return (
        <MainContainer>
            <VanillaForm />
            <VanillaFormCustomRhf />
            {/* <MuiForm /> */}
        </MainContainer>
    );
};
