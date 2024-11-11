import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 1rem;
`;
export const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  color: #000;
  text-align: center;
  span {
    color: #6e07f3;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #000;
  text-align: center;

  span {
    color: #6e07f3;
  }
`;

export const ImageProfile = styled.img`
  width: 15rem;
  height: 15rem;
  margin-top: 1.5rem;
  border-radius: 50%;
  border: 2px solid #6e07f3;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    filter: drop-shadow(0 0 0.75rem #6e07f3);
  }
  &:active {
    opacity: 0.5;
  }
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;

  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: #000;
    text-align: center;

    span {
      color: #6e07f3;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: drop-shadow(0 0 0.75rem #6e07f3);
        text-decoration: underline;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 15vh;
  cursor: pointer;

  svg {
    font-size: 2rem;
    color: #000;
    transition: all 0.3s ease-in-out;

    &:hover:nth-child(1) {
      color: blue;
      transform: scale(1.5);
    }
    &:hover:nth-child(2) {
      color: black;
      transform: scale(1.5);
    }
    &:hover:nth-child(3) {
      color: green;
      transform: scale(1.5);
    }
    &:hover:nth-child(4) {
      color: red;
      transform: scale(1.5);
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 1.3rem;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
`;
