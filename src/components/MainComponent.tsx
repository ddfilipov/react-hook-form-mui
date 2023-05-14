import { FC } from "react";
import { DefaultValues, useForm } from "react-hook-form";
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
    const { register, handleSubmit, reset } = useForm<InputValues>({ defaultValues: defaultFormValues });
    const onSubmit = (data: InputValues) => {
        window.alert(JSON.stringify(data));
    };

    const handleResetForm = () => {
        // reset("name");
    };
    return (
        <MainContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>React hook form</h1>
                <label>Name</label>
                <input type="text" {...(register("name"), { required: true, maxLength: 15 })} />

                <label>Age</label>
                <input type="number" {...register("age")} />

                <label>Are you alive?</label>
                <input type="checkbox" {...register("isAlive")} />

                <CustomInputText label="Custom input" />

                <button type="button" onClick={handleResetForm}>
                    Reset
                </button>
                <input type="submit" />
            </form>
        </MainContainer>
    );
};
