import styled from "styled-components";

export const Container = styled.div`
    input:hover,
    div:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-out;
    }
    input:active,
    div:active {
        transform: scale(0.9);
        transition: all 0.2s ease-out;
    }
    .primary {
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #5A5A5A;
        color: #ffffff;
        transform: scale(1) ;
        transition: all 0.2s ease-out;
        padding:  8px 55px 8px 55px;
    }
    .fav-button {
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #5A5A5A;
        color: #ffffff;
        transform: scale(1) ;
        transition: all 0.2s ease-out;
        padding:  8px 85px 8px 85px; 
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    .text-fav-button {
        margin-right: 5px;
    }
    .icon-fav-button {
        font-size: 15px
    }
`;