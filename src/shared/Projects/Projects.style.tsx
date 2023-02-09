import styled from 'styled-components';


export const ProjectsContainer = styled.div`
    max-width: 1050px;
    margin: 10px auto;
`


export const ProjectsHeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    h2{
        font-size: 2rem;
    }

    p{
        font-weight: normal !important;
        letter-spacing:3px;
        font-size: .9rem;
        color: ${({theme})=>theme.lightDark};
    }
   
`
