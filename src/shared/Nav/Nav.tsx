import { NavContainer } from './Nav.style'
import GithubImg from '../../assets/images/path.png'
import fmentor from '../../assets/images/fmentor.png'
import LinkedIn  from '../../assets/images/LinkedIn.png'
import tweet from '../../assets/images/tweet.png'

const Nav= ():React.ReactElement=>{

  const socials = [
    {img:GithubImg,link:'https://github.com/MARKOTHEDEV'},
    {img:fmentor,link:'https://www.frontendmentor.io/profile/MARKOTHEDEV'},
    {img:LinkedIn,link:'https://www.linkedin.com/in/markothedev/'},
    {img:tweet,link:'https://twitter.com/MatthewNwokolo'},
  ]
  return(
    <NavContainer>
      <h2>markothedev</h2>

      <ul>
        {
          socials.map((d,index)=>(
            <li
              key={index}
            ><img src={d.img} onClick={e=>{
                window.open(d.link,'_blank')
              }} alt="" /></li>
          ))
        }
      </ul>
    </NavContainer>
  )
}

export default Nav