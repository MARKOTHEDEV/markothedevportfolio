import { HeroContentContainer, HeroSectionContainer } from './HeroSection.style'
import DevPic from '../../assets/images/image-profile-mobile.webp'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'



const HeroSection =():React.ReactElement=>{



  return (
    <HeroSectionContainer>
      <img src={DevPic}  alt="markothedev pics" />


      <HeroContentContainer>
        <h2>
                Nice to meet you!
            i{'\''}m   <UnderLineSpan giveSpace>Nwokolo Matt.</UnderLineSpan>
        </h2>
            
        {/* <p>
            Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
        </p> */}
      </HeroContentContainer>

    </HeroSectionContainer>
  )
}

export default HeroSection