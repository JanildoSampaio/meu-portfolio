import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs, FaReact  } from "react-icons/fa";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;

`

export const Me = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    
    h1{
        font-size: 2rem;
        font-weight: 600;        
        margin-bottom: 1rem;
        margin-top: 5rem;
        @media (max-width: 768px) {
            font-size: 1.5rem;            
        }
        
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 1rem;
        text-align: center;
        width: 70%;
    }

`

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 2rem;
        font-weight: 600;        
        margin-bottom: 1rem;
        margin-top: 1rem;    
        @media (max-width: 768px) {
            font-size: 1.5rem;            
        }
        
    }
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

   li  {
        list-style: none;
        cursor: pointer;
    }
`

export const StyledHtml = styled(FaHtml5)`
    font-size: 3rem;
    color: #e34c26;   

    &:hover {
        transform: scale(1.4);
        transition: 0.5s;       
    }
`
export const StyledCss = styled(FaCss3Alt)`
    font-size: 3rem;
    color: #264de4;
    &:hover {
        transform: scale(1.4);
        transition: 0.5s;       
    }

`
export const StyledJs = styled(FaJs)`
    font-size: 3rem;
    color: #f0db4f;
    &:hover {
        transform: scale(1.4);
        transition: 0.5s;       
    }

`
export const StyledReact = styled(FaReact)`
    font-size: 3rem;
    color: #61dbfb;
    &:hover {
        transform: scale(1.4);
        transition: 0.5s;       
    }
`

export const Philosophy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;  
    
    h1{
        font-size: 2rem;
        font-weight: 600;        
        margin-bottom: 1rem;
        margin-top: 1rem;
        @media (max-width: 768px) {
            font-size: 1.5rem;            
        }
        
    }
    p {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1rem;
        text-align: center;
        width: 70%;
    }

    li {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
`

export const Learning = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1{
        font-size: 2rem;
        font-weight: 600;        
        margin-bottom: 1rem;
        margin-top: 1rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;            
        }
        
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1rem;
        text-align: center;
        width: 70%;
    }

    li {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: .5rem;
    
    }

`


