import { FC } from "react";
import { DefaultValues, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { Grid } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";

//InputValues

const MainContainer = styled.div`
    border: 1px solid white;
    padding: 10px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    place-items: baseline;
`;

//defaultValues

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: repeat(1fr, 3);
    align-self: flex-start;
    align-items: baseline;
    gap: 5px;
`;

export const ShowcaseForm: FC = () => {
    //useForm

    // onSubmit()

    // reset

    return (
        <MainContainer>
            <form style={{ padding: "10px" }}>
                <h1>React Hook Form + Vanilla Inputs</h1>
                <Grid
                    container
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"baseline"}
                    flexWrap={"wrap"}
                    gap={"10px"}
                    marginBottom={"10px"}
                >
                    <Grid item>
                        <StyledInput>{/* name */}</StyledInput>
                    </Grid>
                    <Grid item>
                        <StyledInput>{/* age */}</StyledInput>
                    </Grid>
                    <Grid item justifySelf={"center"}>
                        <StyledInput
                            style={{
                                justifyContent: "start",
                            }}
                        >
                            {/* isHappy */}
                        </StyledInput>
                    </Grid>
                </Grid>
                <ButtonWrapper>
                    {/* reset */}
                    <button type="button" onClick={() => {}} style={{ padding: "5px" }}>
                        Reset form values
                    </button>
                    {/* submit */}
                    <input type="submit" style={{ padding: "5px" }} />
                </ButtonWrapper>
            </form>
        </MainContainer>
    );
};
