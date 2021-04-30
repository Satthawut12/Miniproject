import styled from 'styled-components';

export const AddOrderWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    .title{
        font-size:1.5em;
    }

    .content{
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:white;
        margin-top:0px;
        padding:30px 21px 0px 21px;
    }
    .row-content{
        display:flex;
    }
    .order{
        margin-right:10px;
    }    
`;