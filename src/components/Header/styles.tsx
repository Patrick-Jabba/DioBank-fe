import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: center;

  background-color: white;
  color: var(--main-color);
  text-transform: uppercase;
  width: 100vw;
  border: 1px solid var(--main-color);

  h1 {
    font-size: 2rem;
  }

  div.logout {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
