import { useMediaQuery } from 'react-responsive'
import PortfolioDisplay from '../PortfoilioDisplay/PortfolioDisplay'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { ListOFProject, ProjectsContainer, ProjectsHeaderContainer } from './Projects.style'



const Projects = ():React.ReactElement=>{
  // const isTab = useMediaQuery({
  //   query: '(min-width: 600px)'
  // })

  return (
    <ProjectsContainer>

      <ProjectsHeaderContainer>
        <h2>Projects</h2>
        <UnderLineSpan giveSpace >
          <p>CONTACT ME</p>
        </UnderLineSpan>
        
      </ProjectsHeaderContainer>

      <ListOFProject>
        <PortfolioDisplay/>
        <PortfolioDisplay/>
        <PortfolioDisplay/>
      </ListOFProject>

     

    </ProjectsContainer>
  )
}

export default Projects