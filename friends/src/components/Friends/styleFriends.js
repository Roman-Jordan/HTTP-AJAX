import styled from 'styled-components';


export const Friends = styled.div`

    *{box-sizing:border-box;}
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    max-width:120rem;
    margin: 6.5rem auto;
`;

export const Friend = styled.div`
   
    
    border-bottom:1px solid #ddd;
    margin:1rem 2rem;
    display:flex;
    padding:1rem .5rem;
    min-width:30rem;
    
    img{
        width:10rem;
        height:auto;
        padding:0;
        margin:0;
        border-radius:50%;
        background:#ddd;
        height:100%;
    }

    h2{
        text-align:left;
        margin:0 0 1rem 0;
    }
    
    div{
        padding: .5rem;
    }
    p{
        font-size:1.6rem;
        padding:.5rem;
    }
    @media(max-width:612px){
        width:90%;
    }
    
`;

export const Header = styled.div`
    background:#a0001e;
    position:fixed;
    top:0;
    
    display:flex;
    color:#fff;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding:1rem;
    
    button{
        cursor:pointer;
        text-align:center;
        height:4rem;
        width:4rem;
        border:1px solid #a0001e;
        border-radius:50%;
        padding:.25rem;
        color:#a0001e
        background:#fff;
        font-size:3rem;
        transition: all 0.2s ease;
        &:active,&:focus{
            outline:none;
        }
    }

    button.active{
        transform: rotate(45deg);
        background:#fff;
        color:rgb(59,89,152);
        border:1px solid rgb(59,89,152);
        transition: all 0.2s ease;
    }

`;
