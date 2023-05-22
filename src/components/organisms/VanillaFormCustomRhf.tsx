import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import { CustomVanillaInput } from "../atoms/CustomVanillaInput";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { Grid } from "@mui/material";
import { CustomVanillaCheckbox } from "../atoms/CustomVanillaCheckbox";

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

export const VanillaFormCustomRhf: FC = () => {
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
                    <h1>React Hook Form + Custom Vanilla Inputs</h1>
                    <Grid
                        container
                        display={"flex"}
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                        gap={"10px"}
                        marginBottom={"10px"}
                    >
                        <Grid item>
                            <Controller
                                name="name"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaInput onChange={onChange} label="Name" value={value} type="text" />
                                )}
                            />
                        </Grid>
                        <Grid item>
                            <Controller
                                name="age"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaInput onChange={onChange} label="Age" value={value} type="number" />
                                )}
                            />
                        </Grid>
                        <Grid item>
                            <Controller
                                name="isHappy"
                                render={({ field: { onChange, value } }) => (
                                    <CustomVanillaCheckbox onChange={onChange} label="Are you happy?" value={value} />
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
