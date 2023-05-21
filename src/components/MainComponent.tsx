import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import { CustomVanillaInput } from "./CustomVanillaInput";
import styled from "@emotion/styled";
import "../app/page.module.css";
import { Grid } from "@mui/material";
import { CustomMuiSelect } from "./CustomMuiSelect";

interface InputValues {
    name: string;
    age: number | null;
    isAlive: boolean;
}

const MainContainer = styled.div`
    border: 1px solid white;
    height: 100vh;
    padding: 10px;
`;

const defaultFormValues: DefaultValues<InputValues> = {
    name: "",
    age: null,
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
                    <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"}>
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
                                name="checkbox"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaInput
                                        onChange={onChange}
                                        label="Are you alive?"
                                        value={value}
                                    />
                                )}
                            />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <label>Are you alive?</label>
                            <input type="checkbox" {...methods.register("isAlive")} />
                        </Grid> */}

                        <Grid item xs={2}>
                            <button type="button" onClick={handleResetForm}>
                                Reset form values
                            </button>
                        </Grid>

                        <Grid item xs={2}>
                            <CustomMuiSelect />
                        </Grid>
                    </Grid>
                    <input type="submit" />
                </form>
            </FormProvider>
        </MainContainer>
    );
};
