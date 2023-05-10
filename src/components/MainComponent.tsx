import { FC } from "react";
import { useForm } from "react-hook-form";
import { CustomInputText } from "./CustomInputText";

interface InputValues {
    name: string;
    age: number;
    isAlive: boolean;
}

export const MainComponent: FC = () => {
    const { register, handleSubmit } = useForm<InputValues>();
    const onSubmit = (data: InputValues) => {
        window.alert(JSON.stringify(data));
    };

    console.log();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>React hook form</h1>
                <label>Name</label>
                <input type="text" {...(register("name"), { required: true, maxLength: 15 })} />

                <label>Age</label>
                <input type="number" {...register("age")} />

                <label>Are you alive?</label>
                <input type="checkbox" {...register("isAlive")} />

                <CustomInputText label="Custom input" />

                <input type="submit" />
            </form>
        </div>
    );
};
