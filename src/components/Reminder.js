import styled from "styled-components";
import {useTodosState} from "../store";

export function Reminder({ id, title }) {
  const [todos, setTodos] = useTodosState();
  return (
    <Section>
      <h2>{title}</h2>
      <DeleteButton onClick={() => {
        const newTodos = todos.map(a => ({...a}));
        newTodos.splice(newTodos.indexOf(newTodos.find(todo => todo.id === id)), 1)
        setTodos(newTodos);
      }}>X</DeleteButton>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  align-items: center;
  background-color: #26272a;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`

const DeleteButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 10px;
  height: 50%;
  width: auto;
  margin: 5px;
  cursor: pointer;
`