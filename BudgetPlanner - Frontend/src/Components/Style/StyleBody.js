/* ================================================== Style Rouls for AddRecords ==================================================
Imports module */
import styled from 'styled-components';

export let StyleBody = {
    BodyContainer: styled.section`
        border: 1px solid red;
        max-width: 1900px;
        height: 90vh;
        font-size: 0,9em;
        margin-left: calc(50%-1900/2px);
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
        display: flex;
        flex-direction: column;
        content-items: center;
    `,
    FooterContainer: styled.section`
        border: 1px solid red;
        position: fixed;
        bottom: 0px;
        width: 80%;
        margin-left: 10%;
    `
}