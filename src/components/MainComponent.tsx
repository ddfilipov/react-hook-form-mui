import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import { CustomInput } from "./CustomInput";
import styled from "@emotion/styled";
import "../app/page.module.css";
import { FormControl, Grid, InputLabel, NativeSelect, Select } from "@mui/material";
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
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <h1>React hook form</h1>
                    <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"}>
                        {/* <label>Name</label>
                    <input type="text" {...methods.register("name", { required: true, maxLength: 15 })} /> */}
                        <Grid item xs={2}>
                            <Controller
                                name="name"
                                render={({ field: { onChange, value } }) => (
                                    <CustomInput onChange={onChange} label="Name" value={value} type="text" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name="age"
                                render={({ field: { onChange, value } }) => (
                                    <CustomInput onChange={onChange} label="Age" value={value} type="number" />
                                )}
                            />
                            {/* <label>Age</label>
                            <input type="number" {...methods.register("age")} /> */}
                        </Grid>
                        <Grid item xs={2}>
                            <label>Are you alive?</label>
                            <input type="checkbox" {...methods.register("isAlive")} />
                        </Grid>

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
