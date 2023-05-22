import { ChangeEvent, FC, FormEvent, useState } from "react";
import styled from "@emotion/styled";
import "../../app/page.module.css";
import { Grid } from "@mui/material";

interface InputValues {
    name: string;
    age: number | string;
    isHappy: boolean;
}

const defaultFormValues: InputValues = {
    name: "",
    age: "",
    isHappy: true,
};

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

const StyledInput = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
`;
export const VanillaForm: FC = () => {
    const [formData, setFormData] = useState<InputValues>(defaultFormValues);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = event.target;
        setFormData({ ...formData, [name]: type !== "checkbox" ? value : checked });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.alert(JSON.stringify(formData));
    };

    const handleResetForm = () => {
        setFormData(defaultFormValues);
    };

    return (
        <MainContainer>
            <form style={{ padding: "10px" }} onSubmit={handleSubmit}>
                <h1>Vanilla Form + Vanilla Inputs</h1>
                <Grid
                    container
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    gap={"10px"}
                    marginBottom={"10px"}
                >
                    <Grid item xs={2}>
                        <StyledInput>
                            <label>Name</label>
                            <input type="text" name="name" onChange={handleInputChange} value={formData.name} />
                        </StyledInput>
                    </Grid>
                    <Grid item xs={2}>
                        <StyledInput>
                            <label>Age</label>
                            <input type="number" name="age" onChange={handleInputChange} value={formData.age} />
                        </StyledInput>
                    </Grid>
                    <Grid item xs={2} justifySelf={"center"}>
                        <StyledInput
                            style={{
                                justifyContent: "start",
                            }}
                        >
                            <label>Are you happy?</label>
                            <input
                                type="checkbox"
                                name="isHappy"
                                checked={formData.isHappy}
                                onChange={handleInputChange}
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
