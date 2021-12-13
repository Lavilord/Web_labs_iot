import styled from "styled-components";

export const AnimalPageStyled = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  font-size: 1.25rem;
  
  img {
    border-radius: 5px;
    height: 300px;
  }
  
  ul {
    text-align: left;
  }
  h1 {
    font-size: 5rem;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: #585858;
  }
  .image-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    Button {
      background-color: #fce301;
    }
    Button:hover {
      color: #faac24;
      border-color: #faac24;
    }
  }
`;