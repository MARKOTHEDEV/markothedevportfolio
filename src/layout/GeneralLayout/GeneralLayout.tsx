import Nav from '../../shared/Nav/Nav'
import { GeneralLayoutContainer } from './GeneralLayout.style'


type Prop = React.PropsWithChildren<{



}>
const GeneralLayout = ({ children }:Prop):React.ReactElement=>{


  return (
    <GeneralLayoutContainer>
      {/* nav goes here */}
      <Nav/>
      {
        children
      }
    </GeneralLayoutContainer>
  )
}


export default GeneralLayout