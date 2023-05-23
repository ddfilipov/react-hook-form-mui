import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { FormControlLabel, Grid, Switch, TextField, makeStyles } from "@mui/material";
import { CustomMuiSelect, TCountries } from "../atoms/CustomMuiSelect";

interface InputValues {
    name: string;
    isHappy: boolean;
    nationality: TCountries;
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
    nationality: "spain",
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
                    <Grid
                        container
                        display={"flex"}
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        alignItems={"self-end"}
                        gap={"10px"}
                        marginBottom={"10px"}
                    >
                        <Grid item>
                            <Controller
                                name={"name"}
                                render={({ field: { onChange, value } }) => (
                                    <TextField value={value} onChange={onChange} label="Name" />
                                )}
                            />
                        </Grid>

                        <Grid item>
                            <Controller
                                name={"nationality"}
                                render={({ field: { value, onChange } }) => (
                                    <CustomMuiSelect value={value} onChange={onChange} />
                                )}
                            />
                        </Grid>

                        <FormControlLabel
                            control={
                                <Controller
                                    name={"isHappy"}
                                    render={({ field: { onChange, value } }) => (
                                        <Switch checked={value} onChange={onChange} />
                                    )}
                                />
                            }
                            label="Are you happy?"
                            labelPlacement="top"
                        />
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
