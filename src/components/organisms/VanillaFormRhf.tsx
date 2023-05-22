import { FC } from "react";
import { DefaultValues, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { Grid } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";

interface InputValues {
    name: string;
    age: number | string;
    isHappy: boolean;
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

const defaultFormValues: DefaultValues<InputValues> = {
    name: "",
    age: "",
    isHappy: true,
};

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: repeat(1fr, 3);
    align-self: flex-start;
    align-items: baseline;
    gap: 5px;
`;

export const VanillaFormRhf: FC = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<InputValues>({ defaultValues: defaultFormValues, mode: "onSubmit", reValidateMode: "onSubmit" });
    const onSubmit = (data: InputValues) => {
        window.alert(JSON.stringify(data));
    };

    const handleResetForm = () => {
        reset(defaultFormValues);
    };

    return (
        <MainContainer>
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "10px" }}>
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
                        <StyledInput>
                            <label>Name</label>
                            <input type="text" {...register("name", { required: "Name is required" })} />
                            <ErrorMessage
                                errors={errors}
                                name="name"
                                render={({ message }) => <p style={{ color: "#86082a" }}>{message}</p>}
                            />
                        </StyledInput>
                    </Grid>
                    <Grid item>
                        <StyledInput>
                            <label>Age</label>
                            <input type="number" {...register("age", { required: "Age is required" })} />
                            <ErrorMessage
                                errors={errors}
                                name="age"
                                render={({ message }) => <p style={{ color: "#86082a" }}>{message}</p>}
                            />
                        </StyledInput>
                    </Grid>
                    <Grid item justifySelf={"center"}>
                        <StyledInput
                            style={{
                                justifyContent: "start",
                            }}
                        >
                            <label>Are you happy?</label>
                            <input
                                type="checkbox"
                                {...register("isHappy", { validate: (val) => val === false && "Be happy :)" })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="isHappy"
                                render={({ message }) => <p style={{ color: "#86082a" }}>{message}</p>}
                            />
                        </StyledInput>
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
