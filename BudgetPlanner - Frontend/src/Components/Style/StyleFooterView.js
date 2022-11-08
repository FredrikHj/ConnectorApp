/* ==================================================  Override for Footer ==================================================
Imports module */
import { styled } from '@mui/system';
//import styled from 'styled-components';

export let StyleFooterView = {
    ContentContainer: styled('section')({
        height: '5vh',
        marginBottom: '0px',
    })
}
/*
export let StyleFooterView = {
    ContentContainer: styled.section`
    display: flex;
    flex-direction: row;
        justify-content: space-between;
        align-items: center;    
        height: 5vh;
        margin-bottom: 0px;
    `,
}
*/