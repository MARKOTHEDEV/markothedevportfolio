import { MainPortfolioImageContainer, PortfolioContent, PortfolioDisplayContainer } from './PortfolioDisplay.style'
import Projectdummy from '../../assets/images/projectdummy.webp'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'



const PortfolioDisplay = ():React.ReactElement=>{

  return (
    <PortfolioDisplayContainer>
      <MainPortfolioImageContainer>
        <img src={Projectdummy} alt="" />
        {/* <PortfolioImageCover className='PortfolioImageCover'>
            <p>VIEW PROJECt</p>
            <p>VIEW CODE</p>
          </PortfolioImageCover> */}
      </MainPortfolioImageContainer>
        

      <PortfolioContent>
        <h2>DESIGN PORTFOLIO</h2>
        <div className='porfolio_techs'>
          <p>HTML</p>
          <p>CSS</p>
        </div>
       
        <div className='porfolio_view_container'>
          <UnderLineSpan giveSpace small_border={true} >
            <p>VIEW PROJECT </p>
          </UnderLineSpan>

          <UnderLineSpan giveSpace small_border={true} >
            <p>VIEW CODE</p>
          </UnderLineSpan>
        </div>
      </PortfolioContent>

    </PortfolioDisplayContainer>
  )
}

export default PortfolioDisplay