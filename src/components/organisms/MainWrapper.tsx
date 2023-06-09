import { FC } from "react";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { VanillaForm } from "./VanillaForm";
import { VanillaFormCustomRhf } from "./VanillaFormCustomRhf";
import { VanillaFormRhf } from "./VanillaFormRhf";
import { MuiForm } from "./MuiForm";
import { ShowcaseForm } from "./ShowcaseForm";

const MainContainer = styled.div`
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MainComponent: FC = () => {
    return (
        <MainContainer>
            {/* <VanillaForm />
            <VanillaFormRhf />
            <VanillaFormCustomRhf />
            <MuiForm /> */}
            <ShowcaseForm />
        </MainContainer>
    );
};
