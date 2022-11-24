import styled from "styled-components";

export function Reminder({ title }) {
  return (
    <Section>
      <h2>{title}</h2><DeleteButton>X</DeleteButton>
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