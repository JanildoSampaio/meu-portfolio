import styled from "styled-components";
import device from "../../styles/breakpoint";

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;
export const Image = styled.img`
  width: 6rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    filter: drop-shadow(0 0 0.75rem #6e07f3);
  }
  &:active {
    opacity: 0.5;
  }

  @media ${device.mobile} {
    width: 4rem;
    margin: 0 auto;    
  }

`;
export const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;
export const Li = styled.li`
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #000;
    transform: scale(1.1);
    transition: 0.3s;
    filter: drop-shadow(0 0 0.75rem #6e07f3);
  }

  &:active {
    opacity: 0.5;    
  }

  @media  ${device.mobile} {
      display: none;
  }
`;
