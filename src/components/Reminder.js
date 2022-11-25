import styled from "styled-components";
import {useTodosState} from "../store";

async function deleteTodo(id) {
  const response = await fetch(`http://localhost:5001/reminders/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token")
      })
    });
  return response.status === 200;
}

async function updateImportance(id, newImportance) {
  const response = await fetch(`http://localhost:5001/reminders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: localStorage.getItem("token"),
      important: newImportance,
    }),
  });
  return response.status === 200;
}

export function Reminder({ id, title, description, status, important}) {
  const [todos, setTodos] = useTodosState();

  const content = (
  <Section important={important}>
    <CardHeader>
      <StatusButtons>
        <IncompleteButton></IncompleteButton>
        <WorkingButton></WorkingButton>
        <CompleteButton></CompleteButton>
        
      </StatusButtons>
      <StyledH2>{title}</StyledH2>
      <ButtonsDiv>
        <DeleteButton onClick={async () => {
          const response = await deleteTodo(id);
          if (response) {
            const newTodos = todos.map(item => ({...item})); // Deep clone array into copy
            newTodos.splice(newTodos.indexOf(newTodos.find(todo => todo.id === id)), 1) // Remove reminder from array using its ID
            setTodos(newTodos);
        }
        }}>X</DeleteButton>

        <ImportanceButton onClick={async () => {
          const newImportance = (important === 0) ? 1 : 0;
          const response = await updateImportance(id, newImportance)
          if (response){
            const newTodos = todos.map(item => ({...item})); // Deep clone array into copy
            const findTodo = newTodos.find(todo => todo.id === id);
            if (findTodo != null) {
              findTodo.important = newImportance;
            }
            setTodos(newTodos);
          }
        }}
        >I</ImportanceButton>
      </ButtonsDiv>

      
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
  else if (status === 2){
    return (
      <WorkingSection>
        {content}
      </WorkingSection>
    )
  }
  else{ //status=== 3
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
  width: 30vw;
  margin: 2px;
  outline-color: red;

  outline-style: ${props => 
    (props.important !== 1) ? 'none': 'solid'
  };
`


const DeleteButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 10px;
  height: 60%;
  width: 70%;
  margin: 5px;
  cursor: pointer;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 80% 1fr;
  width: 100%;
`
const StyledH2 = styled.h2`
  text-align: center;
`

const ButtonsDiv = styled.div`
  display: grid; 
  grid-template-rows: 1fr 2fr;
  
`
const ImportanceButton = styled.button`
  background-color: grey;
  border: none;
  border-radius:10px;
  height: 30%;
  width: 70%;
  margin: 5px;
  margin-top: 0px;
  cursor: pointer;
`
const WorkingButton = styled.button`
  background-color: orange;
  border: none;
  border-radius:5px;
  height: 70%;
  width: 70%;
  margin: 5px;
  cursor: pointer;
`

const CompleteButton = styled.button`
  background-color: green;
  border: none;
  border-radius:5px;
  height: 70%;
  width: 70%;
  margin: 5px;
  cursor: pointer;
`
const IncompleteButton = styled.button`
  background-color: red;
  border: none;
  border-radius:5px;
  height: 70%;
  width: 70%;
  margin: 5px;
  cursor: pointer;
`

const StatusButtons = styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr 1fr;
`