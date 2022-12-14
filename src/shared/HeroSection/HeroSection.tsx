import { HeroContentContainer, HeroSectionContainer } from './HeroSection.style'
import DevPic from '../../assets/images/image-profile-mobile.webp'
import DevPicDesktop from '../../assets/images/image-profile-desktop.webp'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { useMediaQuery } from 'react-responsive'
import HalfCirlceImg from '../../assets/images/pattern-circle.svg'


const HeroSection =():React.ReactElement=>{
  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })
  const isTab = useMediaQuery({
    query: '(min-width: 600px)'
  })

  return (
    <HeroSectionContainer>
      <div className='marko_img'>
        <img src={isDesktop?DevPicDesktop:DevPic}  alt="markothedev pics" />
        {
          isTab?
            <img src={HalfCirlceImg} className='latop_circle' alt="" />
            :''
        }
      </div>
      {/*  */}

      <HeroContentContainer>
        <h2>
          <span className='nice_to_meet'>
            <span className='nice_to'>Nice to </span>
                meet you!{' '}
          </span>
            i{'\''}m   <UnderLineSpan giveSpace={false}>Nwokolo Matt.</UnderLineSpan>
        </h2>
            
        <p>
            Based in the Nigeria, I’m a front-end developer passionate about building accessible web apps that users love.
        </p>

        <p className='contact'>
          <UnderLineSpan small_border={true} giveSpace={true}>
          CONTACT ME
          </UnderLineSpan>
        </p>
      </HeroContentContainer>

    </HeroSectionContainer>
  )
}

export default HeroSection