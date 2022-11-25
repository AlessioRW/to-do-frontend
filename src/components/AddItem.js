import {Button, Form, FormContainer, InputContainer, Label, TextInput} from "../style";

async function sendReq(event){
    event.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");

    const response = await fetch("http://localhost:5001/reminders/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            token: localStorage.getItem("token"),
            title,
            description
        }),
    });
    if (response.status === 201) {
        form.reset();
    }
}

export function AddItem() {
    return (
        <FormContainer>
            <Form id="form" onSubmit={async (event) => await sendReq(event)}>
                <InputContainer>
                    <Label htmlFor="title">Title</Label>
                    <TextInput name="title"></TextInput>
                    <Label htmlFor="description">Description</Label>
                    <TextInput name="description"></TextInput>
                    <Button type="submit">Submit</Button>
                </InputContainer>
            </Form>
        </FormContainer>
    )
}
