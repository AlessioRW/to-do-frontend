import styled from "styled-components";
import {useTodosState} from "../store";

async function deleteTodo(id) {
  const response = await fetch(`http://localhost:5001/toDo/${id}`, { method: "DELETE" });
  return response.status === 200;
}

export function Reminder({ id, title, description, status }) {
  const [todos, setTodos] = useTodosState();

  const content = (
  <Section>
    <CardHeader>
      <h2>{title}</h2>
      <DeleteButton onClick={async () => {
        const response = await deleteTodo(id);
        if (response) {
          const newTodos = todos.map(item => ({...item})); // Deep clone array into copy
          newTodos.splice(newTodos.indexOf(newTodos.find(todo => todo.id === id)), 1) // Remove reminder from array using its ID
          setTodos(newTodos);
        }
      }}>X</DeleteButton>
    </CardHeader>
    <p>{description}</p>
  </Section>)
  if (status === 1){
    return (
      <IncompleteSection>
        {content}
      </IncompleteSection>
    )
  }
  if (status === 2){
    return (
      <WorkingSection>
        {content}
      </WorkingSection>
    )
  }
  if (status === 3){
    return (
      <CompleteSection>
        {content}
      </CompleteSection>
    )
  }
}

const IncompleteSection = styled.section`
  grid-column: 1/2;
`
const WorkingSection = styled.section`
  grid-column: 2/3;
`

const CompleteSection = styled.section`
  grid-column: 3/4;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
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
  height: 25%;
  width: 70%;
  margin: 5px;
  cursor: pointer;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 90% 1fr;
`
