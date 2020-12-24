import React from 'react'
import styled from "styled-components"
import { Link } from "react-scroll"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: auto;
`

export const DownloadButtonLink = styled(Link)`
    border-radius: 50px;
    color: ${props => props.theme.nav.textPrimary};
    border: 0.8px solid ${props => props.theme.nav.textPrimary};
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        background: ${props => props.theme.nav.textPrimary};
        color: ${props => props.theme.nav.bgPrimary};
    }
`

export const IconContainer = styled.div`
    display: inline-block;
    align-items: center;
    text-align: center;
    align-self: flex-end;
    margin-left: 8px;
`