/* ================================================== Style Rouls for AddRecords ==================================================
Imports module */
import styled from 'styled-components';

export let StyleHeader = {
    ContentContainerRow1: styled.section`
        border: 1px solid red;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-contents: space-between;
    `,
    Col1: styled.section`
        border: 1px solid green;
        width: 15%;

    `,
    AppName: styled.section`
        border: 1px solid green;
        width: 100%;
        font-size: 1.4em;
        text-align: center;
    `,
    ContentContainerRow2: styled.section`
        border: 1px solid red;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,
    Col2: styled.section`
        border: 1px solid green;
        width: 85%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,
    NavBarLink: styled.section`
        border: 1px solid red;
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,
    NavBarButtons: styled.section`
        border: 1px solid red;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,
    NavButtons: styled.section`
        border: 1px solid red;
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `,
}