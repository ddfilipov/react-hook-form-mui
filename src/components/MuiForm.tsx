import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import { CustomVanillaInput } from "./atoms/CustomVanillaInput";
import styled from "@emotion/styled";
import "../app/page.module.css";
import { Grid, TextField } from "@mui/material";
import { CustomMuiSelect } from "./atoms/CustomMuiSelect";
import { CustomVanillaCheckbox } from "./atoms/CustomVanillaCheckbox";

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

export const MuiForm: FC = () => {
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
                    <h1>React Hook Form + MUI</h1>
                    <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"} gap={"10px"}>
                        <Grid item xs={2}>
                            <CustomMuiSelect />
                        </Grid>

                        <Grid item xs={2}>
                            <Controller
                                name={"name"}
                                render={({ field: { onChange, value } }) => (
                                    <TextField value={value} onChange={onChange} label="Name" />
                                )}
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
            </FormProvider>
        </MainContainer>
    );
};
