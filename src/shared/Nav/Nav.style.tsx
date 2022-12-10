import styled from 'styled-components';



export const NavContainer = styled.div`
    /* border: 1px solid red; */
    text-align: center;
    padding: 1rem;
    h2{
        padding-bottom: 1.4rem;
    }

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid pink; */
        width: 53%;
        margin: 0 auto  ;
    }


    @media screen and (min-width: 500px){
        /* padding: 1.3rem 1.2rem; */
        display: flex;
        align-items: center;
        justify-content :space-between;
        ul{
            margin: unset;
            width: 150px;
        }
        h2{
            padding: unset;
        }
        
    }
`
