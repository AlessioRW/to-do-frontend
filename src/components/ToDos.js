import styled from "styled-components";
import React, {useEffect} from "react";
import {useTodosState} from "../store";
import {Reminder} from "./Reminder";

export function ToDos() {
  const [todos, setTodos] = useTodosState();
  useEffect(() => {
    fetch(`http://localhost:5001/toDo/`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [setTodos]);
  return (
    <Main>
      {todos.map(({ id, title }) => <Reminder key={id} id={id} title={title} />)}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column;
`
