import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background-color: #121212;
    flex-direction: column;
    justify-content: center;
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2rem 2rem 1rem 2rem;
    justify-content: center;
    color: white;
`

export const ContactText = styled.div`
    display: flex;
    margin: 0rem 1.5rem;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
`

export const A = styled.a`
    display: flex;
    font-size: 2rem;
    justify-content: center;
    text-decoration: none;
    color: white;
    padding-top: 5px;
`

export const DesignedBy = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0rem 2rem 1rem 2rem;
    font-size: 1rem;
    text-align: center;
    color: white;
    overflow: wrap;
`