import styled from "styled-components";

export function Header({ showButton }) {
  const headers = [<HeaderOne>To-Do List</HeaderOne>];
  if (showButton) {
    headers.push(<a href="/new"><NewReminder>New Reminder</NewReminder></a>);
  }
  return (
    <PageHeader>
      {headers}
    </PageHeader>
  );
}

const PageHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderOne = styled.h1`
  background-color: #26272a;
  border-radius: 10px;
  padding: 10px;
`

const NewReminder = styled.button`
  color: white;
  background-color: #26272a;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`