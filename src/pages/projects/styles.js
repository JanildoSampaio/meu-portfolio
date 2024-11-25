import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
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
  background-image: url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
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
  background-image: url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
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
  background-image: url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
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
