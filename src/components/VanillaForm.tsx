import { ChangeEvent, FC, useState } from "react";
import { CustomVanillaInput } from "./atoms/CustomVanillaInput";
import styled from "@emotion/styled";
import "../app/page.module.css";
import { Grid } from "@mui/material";

interface InputValues {
    name: string;
    age: number | string;
    isAlive: boolean;
}

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

const defaultFormValues: InputValues = {
    name: "",
    age: "",
    isAlive: true,
};

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
`;

export const VanillaForm: FC = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | null>(null);
    const [isHappy, setIsHappy] = useState<boolean>(true);

    const handleName = (val: string) => {
        setName(val);
    };

    const handleAge = (val: number) => {
        setAge(val);
    };

    const handleIsHappy = (val: boolean) => {
        setIsHappy(val);
    };
    const handleSubmit = (data: InputValues) => {
        window.alert(JSON.stringify(data));
    };

    const handleResetForm = () => {};

    return (
        <MainContainer>
            <form style={{ padding: "10px" }}>
                <h1>Vanilla Form + Vanilla Inputs</h1>
                <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                    <Grid item xs={2}>
                        <StyledInput>
                            <label>Name</label>
                            <input
                                type="text"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleName(e.target.value)}
                                value={name}
                                // {...register("name")}
                            />
                        </StyledInput>
                    </Grid>
                    <Grid item xs={2}>
                        <StyledInput>
                            <label>Age</label>
                            <input
                                type="number"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleAge(Number(e.target.value))}
                                value={age}
                            />
                        </StyledInput>
                    </Grid>
                    <Grid item xs={2}>
                        <label>Are you happy?</label>
                        <input
                            type="checkbox"
                            value={isHappy.toString()}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                handleIsHappy(e.target.checked);
                            }}
                        />
                    </Grid>
                </Grid>
                <ButtonWrapper>
                    <button type="button" onClick={handleResetForm} style={{ padding: "5px" }}>
                        Reset form values
                    </button>
                    <input type="submit" style={{ padding: "5px" }} />
                </ButtonWrapper>
            </form>
        </MainContainer>
    );
};
