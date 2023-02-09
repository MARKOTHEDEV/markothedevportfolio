import { MainPortfolioImageContainer,PortfolioImageCover, PortfolioContent, PortfolioDisplayContainer } from './PortfolioDisplay.style'
import Projectdummy from '../../assets/images/projectdummy.webp'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'


type Prop ={
  accessVariant?:'hover'|'static'
}
const PortfolioDisplay = ({accessVariant='static'}:Prop):React.ReactElement=>{

  return (
    <PortfolioDisplayContainer>
      <MainPortfolioImageContainer>
        <img src={Projectdummy} alt="" />
        {
          accessVariant=='hover'?
            <PortfolioImageCover className='PortfolioImageCover'>
              <UnderLineSpan giveSpace small_border={true} >
                <p>VIEW PROJECT </p>
              </UnderLineSpan>

              <UnderLineSpan giveSpace small_border={true} >
                <p>VIEW CODE</p>
              </UnderLineSpan>
            </PortfolioImageCover>:''
        }
      </MainPortfolioImageContainer>
        

      <PortfolioContent>
        <h2>DESIGN PORTFOLIO</h2>
        <div className='porfolio_techs'>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        {
          accessVariant=='static'?
            <div className='porfolio_view_container'>
              <UnderLineSpan giveSpace small_border={true} >
                <p>VIEW PROJECT </p>
              </UnderLineSpan>
              <UnderLineSpan giveSpace small_border={true} >
                <p>VIEW CODE</p>
              </UnderLineSpan>
            </div>:''
        }
      </PortfolioContent>

    </PortfolioDisplayContainer>
  )
}

export default PortfolioDisplay