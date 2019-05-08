import styled from 'styled-components';

export const Friends = styled.div`

    *{box-sizing:border-box;}
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;

export const Friend = styled.div`
   
    min-width:30%;
    border:1px solid #ddd;
    margin:3px;
    display:flex;
    padding:2px;
    img{
        width:30%;
        background:#ddd;
        height:100%;
    }

    h2{
        text-align:center;
        margin:0;
        text-decoration:underline;
    }
    
    div{
        padding:20px;
    }
    
`;