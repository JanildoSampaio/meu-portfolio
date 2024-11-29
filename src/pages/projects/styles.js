import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const CardProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 80%;
  padding: 1rem;
`;

export const CardProject1 = styled.div`
  
  width: 20rem;
  height: 30rem;

  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const CardProject2 = styled.div`
  
  width: 20rem;
  height: 30rem;

  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #000;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const CardProject3 = styled.div`
  
  width: 20rem;
  height: 30rem;

  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid #000;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
export const Button = styled.button`
  width: 10rem;
  height: 2rem;
  border-radius: 1rem;
  cursor: pointer;

  position: relative;
  top: 12rem;
  left: 5rem;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

