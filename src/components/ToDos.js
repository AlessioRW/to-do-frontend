import styled from "styled-components";
import {useEffect, useState} from "react";
import {Reminder} from "./Reminder";

export function ToDos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/toDo/`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  console.log(todos);
  return (
    <Main>
      {todos.map(({ id, title }) => <Reminder key={id} title={title} />)}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column;
`
