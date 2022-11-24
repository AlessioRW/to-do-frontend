import styled from "styled-components"

function createNew(){
    fetch('http://localhost:5001/toDo/', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementById('title-input').value,
            description: document.getElementById('desc-input').value
        }),
        method:'POST'
    }).then((res) => res.json()).then((data) => console.log(data.status))
}

export function AddItem() {
    return (
        <>
            <StyledForm>
                <StyledInput id='title-input' placeholder="Title"></StyledInput>
                <StyledTextarea id='desc-input' placeholder="Description"></StyledTextarea>
                <StyledButton onClick={createNew}>Create New Item</StyledButton>
            </StyledForm>
        </>
    )
}



const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
`

const StyledInput = styled.input`
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 10px;

`
const StyledTextarea = styled.textarea`
    height: 50vh;
    margin-bottom: 10px;
`
const StyledButton = styled.button`
    margin-left: 40%;
    margin-right: 40%;
`