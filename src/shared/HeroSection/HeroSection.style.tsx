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
`
export const HeroContentContainer= styled.div`
/* border: 1px solid yellow; */
font-size: 1.5rem;
text-align: center;
margin-top: -64px;
`