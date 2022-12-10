import { UnderLineSpanContainer } from './UnderLineSpan.style'


type Prop = React.PropsWithChildren<{

    giveSpace?:boolean
}>
const UnderLineSpan =({children,giveSpace=false}:Prop):React.ReactElement=>{

  return (
    <UnderLineSpanContainer style={{'paddingBottom':giveSpace?'.2rem':'unset'}}>
      {
        children
      }
    </UnderLineSpanContainer>
  )
}
export default UnderLineSpan