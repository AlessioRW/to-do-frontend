import styled from "styled-components";

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
  }
}

export function LoginForm() {
  return (
    <FormContainer>
      <Form id="form" onSubmit={async (event) => await sendReq(event)}>
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

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  background-color: #26272a;
  border-radius: 15px;
  padding: 20px;
  width: 25%;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Label = styled.label`
  margin: 5px;
`

const TextInput = styled.input`
  color: white;
  background-color: #2e3136;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 5px;
  width: 75%;
`

const Button = styled.button`
  color: white;
  background-color: #2e3136;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-top: 10px;
`;