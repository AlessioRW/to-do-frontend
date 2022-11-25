import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

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
  const data = await response.json();
  localStorage.setItem("token", data.token);
  form.reset();
}

export function Login() {
  return (
    <>
      <Header />
      <form id="form" onSubmit={(event) => sendReq(event)}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  )
}