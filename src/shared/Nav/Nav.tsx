import { NavContainer } from './Nav.style'
import GithubImg from '../../assets/images/path.png'
import fmentor from '../../assets/images/fmentor.png'
import LinkedIn  from '../../assets/images/LinkedIn.png'
import tweet from '../../assets/images/tweet.png'

const Nav= ():React.ReactElement=>{


  return(
    <NavContainer>
      <h2>markothedev</h2>

      <ul>
        <li><img src={GithubImg} alt="" /></li>
        <li><img src={fmentor} alt="" /></li>
        <li><img src={LinkedIn} alt="" /></li>
        <li><img src={tweet} alt="" /></li>
      </ul>
    </NavContainer>
  )
}

export default Nav