import styled from "styled-components";

export function Header() {
  return (
    <PageHeader>
      <HeaderOne>To-Do List</HeaderOne>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  display: flex;
  justify-content: center;
`

const HeaderOne = styled.h1`
  background-color: #26272a;
  border-radius: 10px;
  padding: 10px;
`