import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { ProjectsContainer, ProjectsHeaderContainer } from './Projects.style'



const Projects = ():React.ReactElement=>{


  return (
    <ProjectsContainer>

      <ProjectsHeaderContainer>
        <h2>Projects</h2>
        <UnderLineSpan giveSpace >
          <p>CONTACT ME</p>
        </UnderLineSpan>
      </ProjectsHeaderContainer>

    </ProjectsContainer>
  )
}

export default Projects