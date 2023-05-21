import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import { CustomVanillaInput } from "./CustomVanillaInput";
import styled from "@emotion/styled";
import "../app/page.module.css";
import { Grid } from "@mui/material";
import { CustomMuiSelect } from "./CustomMuiSelect";
import { CustomVanillaCheckbox } from "./CustomVanillaCheckbox";

interface InputValues {
    name: string;
    age: number | string;
    isAlive: boolean;
}

const MainContainer = styled.div`
    border: 1px solid white;
    height: 100vh;
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
    isAlive: true,
};

export const MainComponent: FC = () => {
    const methods = useForm<InputValues>({ defaultValues: defaultFormValues });
    const onSubmit = (data: InputValues) => {
        window.alert(JSON.stringify(data));
    };

    const handleResetForm = () => {
        methods.reset(defaultFormValues);
    };
    return (
        <MainContainer>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} style={{ padding: "10px" }}>
                    <h1>React hook form</h1>
                    <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                        <Grid item xs={2}>
                            <Controller
                                name="name"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaInput onChange={onChange} label="Name" value={value} type="text" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name="age"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaInput onChange={onChange} label="Age" value={value} type="number" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name="isAlive"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaCheckbox onChange={onChange} label="Are you alive?" value={value} />
                                )}
                            />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <label>Are you alive?</label>
                            <input type="checkbox" {...methods.register("isAlive")} />
                        </Grid> */}

                        <Grid item xs={2}>
                            <CustomMuiSelect />
                        </Grid>
                    </Grid>
                    <ButtonWrapper>
                        <button type="button" onClick={handleResetForm} style={{ padding: "5px" }}>
                            Reset form values
                        </button>
                        <input type="submit" style={{ padding: "5px" }} />
                    </ButtonWrapper>
                </form>
            </FormProvider>
        </MainContainer>
    );
};
