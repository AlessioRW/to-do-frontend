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
    <Main id='main'>
      <IncompleteTitle>Incomplete</IncompleteTitle>
      <WorkingTitle>Working-On</WorkingTitle>
      <CompleteTitle>Complete</CompleteTitle>
      {todos.map(({ id, title, description, status, important }) => <Reminder key={id} id={id} title={title} description={description} status={status} important={important}/>)}
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* align-items: center;
  flex-flow: column; */
`

const IncompleteTitle = styled.h2`
  grid-column: 1/2;
  text-align: center;
`

const WorkingTitle = styled.h2`
  grid-column: 2/3;
  text-align: center;
`

const CompleteTitle = styled.h2`
  grid-column: 3/4;
  text-align: center;
`