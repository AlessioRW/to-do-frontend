import styled from "styled-components"

export function Footer() {
  return (
    <PageFooter>
      <p>A VERY basic to-do list app</p>
    </PageFooter>
  );
}

const PageFooter = styled.footer`
  display: flex;
  justify-content: center;
`