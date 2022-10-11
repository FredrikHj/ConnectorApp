/* ================================================== Style Rouls for AddRecords ==================================================
Imports module */
import styled from 'styled-components';

export let StyleBody = {
    BodyContainer: styled.section`
        border: 1px solid red;
        width: 99.8%;
        height: 90vh;
        font-size: 0,9em;
    `,
    ContentContainer: styled.section`
        border: 1px solid red;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,
    HeaderContainer: styled.section`
        border: 1px solid red;
        height: 50px;
        background-color: red; /* For browsers that do not support gradients */
        background-image: linear-gradient(to right, red, yellow);
    `,
    FooterContainer: styled.section`
        border: 1px solid red;
        position: fixed;
        bottom: 0px;
        width: 80%;
        margin-left: 10%;
    `
}