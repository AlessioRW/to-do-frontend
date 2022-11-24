import styled from "styled-components";

export function ToDos() {
  return (
    <Main>
      <Reminder>
        <h2>To Do 1</h2><DeleteButton>X</DeleteButton>
      </Reminder>
      <Reminder>
        <h2>To Do 2</h2><DeleteButton>X</DeleteButton>
      </Reminder>
      <Reminder>
        <h2>To Do 3</h2><DeleteButton>X</DeleteButton>
      </Reminder>
      <Reminder>
        <h2>To Do 4</h2><DeleteButton>X</DeleteButton>
      </Reminder>
      <Reminder>
        <h2>To Do 5</h2><DeleteButton>X</DeleteButton>
      </Reminder>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column;
`

const Reminder = styled.section`
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