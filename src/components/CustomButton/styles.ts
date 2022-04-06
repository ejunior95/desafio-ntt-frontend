import styled from "styled-components";

export const Container = styled.div`
    input {
        padding:  8px 35px 8px 35px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #5A5A5A;
        color: #ffffff;
        transform: scale(1) ;
        transition: all 0.2s ease-out;
    }
    input:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-out;
    }
    input:active {
        transform: scale(0.9);
        transition: all 0.2s ease-out;
    }
`;