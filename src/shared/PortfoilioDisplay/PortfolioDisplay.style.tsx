import styled from 'styled-components';


export const PortfolioDisplayContainer =styled.div`

`

export const MainPortfolioImageContainer =styled.div`

padding: 1rem 0;
img{
    width: 100%;
    height: 100%;
}
`

export const PortfolioContent =styled.div`
h2{
    font-size: 1rem;
font-weight: normal !important;
letter-spacing: 1px;
}
.porfolio_techs p{
    color: ${({theme})=>theme.ash};
    padding-right: .7rem;
    padding-top: .5rem;
}

.porfolio_techs{
    display: flex;
    flex-wrap: wrap;
}

.porfolio_view_container span{
    margin: .2rem 0;
}
.porfolio_view_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 80%;
    padding: .8rem 0;
    p{
letter-spacing: 1px;
        font-size: .9rem;
        
    }

    @media screen and (min-width: 400px){
        max-width: 250px;
    }
}
`