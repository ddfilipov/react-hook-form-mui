import { FC } from "react";
import { Controller, DefaultValues, FormProvider, useForm } from "react-hook-form";
import { CustomInputText } from "./CustomInputText";
import styled from "@emotion/styled";
import "../app/page.module.css";

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
                    <label>Name</label>
                    <input type="text" {...methods.register("name", { required: true, maxLength: 15 })} />

                    <label>Age</label>
                    <input type="number" {...methods.register("age")} />

                    <label>Are you alive?</label>
                    <input type="checkbox" {...methods.register("isAlive")} />

                    {/* <CustomInputText label="Custom input" /> */}

                    <button type="button" onClick={handleResetForm}>
                        Reset form values
                    </button>

                    <Controller
                        name="name"
                        render={({ field: { onChange, onBlur, value, name, ref } }) => (
                            <CustomInputText
                                onChange={onChange} // send value to hook form
                                label="Name"
                            />
                        )}
                    />

                    <input type="submit" />
                </form>
            </FormProvider>
        </MainContainer>
    );
};
