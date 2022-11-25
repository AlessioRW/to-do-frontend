import {Button, Form, FormContainer, InputContainer, Label, TextInput} from "../style";
import {useNavigate} from "react-router-dom";

async function sendReq(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password
    }),
  });
  if (response.status === 200) {
    const data = await response.json();
    localStorage.setItem("token", data.token);
    form.reset();
    return true;
  }
  return false;
}

export function LoginForm() {
  const navigate = useNavigate();
  return (
    <FormContainer>
      <Form id="form" onSubmit={async (event) => {
        const response = await sendReq(event);
        if (response) {
          navigate("/");
        }
      }}>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <TextInput type="text" name="email" />
          <Label htmlFor="password">Password</Label>
          <TextInput type="password" name="password" />
          <Button type="submit">Submit</Button>
        </InputContainer>
      </Form>
    </FormContainer>
  )
}
