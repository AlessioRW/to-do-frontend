import styled from "styled-components"

async function sendReq(event){
    event.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");

    await fetch("http://localhost:5001/reminders/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            token: localStorage.getItem("token"),
            title,
            description
        }),
    });
}

export function AddItem() {
    return (
        <StyledForm id="form" onSubmit={async (event) => await sendReq(event)}>
            <StyledInput name="title" placeholder="Title"></StyledInput>
            <StyledTextarea name="description" placeholder="Description"></StyledTextarea>
            <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
`

const StyledInput = styled.input`
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 10px;

`
const StyledTextarea = styled.textarea`
    height: 50vh;
    margin-bottom: 10px;
`
const StyledButton = styled.button`
    margin-left: 40%;
    margin-right: 40%;
`