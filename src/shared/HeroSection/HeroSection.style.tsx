import styled from 'styled-components';
import RingImg from '../../assets/images/pattern-rings.svg'
import HalfCirlceImg from '../../assets/images/pattern-circle.svg'


export const HeroSectionContainer = styled.div`
    
    background: url(${RingImg}),url(${HalfCirlceImg});   
    background-repeat: no-repeat,no-repeat;
    background-size: 700px,150px;
    background-position-x: -540px,300px;
    background-position-y:30px,200px;
    img{
        /* border: 1px solid red; */
        width:200px;
        display:block;
        margin:0 auto;
        transform:translateY(-100px);
    }

    @media screen and (min-width: 600px) {
        /* border: 1px solid red; */
        display: flex;
        /* align-items: center; */
        flex-direction: row-reverse;
        justify-content: space-between;
        background-size: 400px,150px;
        background-position-x: -240px,300px;
        background-position-y:55px,200px;

        &> img{
            width: 40%;
        }
        
        &>div{
            width: 60%; 
        }

    }
`
export const HeroContentContainer= styled.div`
/* border: 1px solid yellow; */
text-align: center;
margin-top: -64px;
h2{
    font-size: 1.5rem;
}
p{
    font-weight: normal;
    font-size: .9rem;
    padding: 1.2rem .7rem;
    color: ${({theme})=>theme.ash};
}
.contact{
    font-size: 1.2rem;
    color: ${({theme})=>theme.light};
    letter-spacing: 3px;

}

@media screen and (min-width: 600px){   
    transform: translateX(35px);
    margin-top: unset;
    text-align: left;
    padding: 1rem;
    h2{
        font-size: 3rem;
        /* border: 1px solid red; */
        padding-top: 5rem;
        width: 500px;
    }
    p{
        padding: unset;
        padding-top: 3rem;
    }
    .contact{
        padding: unset;
        font-size: .9rem;
        padding-top: 1rem;
     }
    .nice_to{
        display: block;
    }
}


@media screen and (min-width: 900px) {
    
}


`