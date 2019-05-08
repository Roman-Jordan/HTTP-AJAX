import styled from 'styled-components';


export const Friends = styled.div`

    *{box-sizing:border-box;}
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    max-width:100rem;
    margin: 5rem auto;

`;

export const Friend = styled.div`
   
    min-width:30%;
    border:1px solid #ddd;
    margin:3px;
    display:flex;
    padding:2px;
    img{
        min-width:30%;
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

export const SAddFriend = styled.div`
a{
    text-decoration:none;
    text-align:center;
    position:fixed;
    top:10px;
    right:10px;
    height:4rem;
    width:4rem;
    border:none;
    border-radius:50%;
    padding:.5rem;
    background:forestgreen;
    color:#fff;
    font-size:3rem;
}


`;
