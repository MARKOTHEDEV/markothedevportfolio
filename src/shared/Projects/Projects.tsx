import { useMediaQuery } from 'react-responsive'
import PortfolioDisplay, { PortfolioDisplayProp } from '../PortfoilioDisplay/PortfolioDisplay'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { ListOFProject, ProjectsContainer, ProjectsHeaderContainer } from './Projects.style'
import Projectdummy from '../../assets/images/projectdummy.webp'




const Projects = ():React.ReactElement=>{
  const isTab = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const porfolio_data:PortfolioDisplayProp[] =[
    {
      accessVariant:isTab?'hover':'static',
      code_url:'https://github.com/MARKOTHEDEV',
      website_url:'https://www.youtube.com/',
      stacks:['HTML','CSS'],
      projectName:'DESIGN PORTFOLIO',
      projectImage:Projectdummy
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'https://github.com/MARKOTHEDEV',
      website_url:'https://www.youtube.com/',
      stacks:['HTML','CSS'],
      projectName:'DESIGN PORTFOLIO',
      projectImage:Projectdummy
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'https://github.com/MARKOTHEDEV',
      website_url:'https://www.youtube.com/',
      stacks:['HTML','CSS'],
      projectName:'DESIGN PORTFOLIO',
      projectImage:Projectdummy
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'https://github.com/MARKOTHEDEV',
      website_url:'https://www.youtube.com/',
      stacks:['HTML','CSS'],
      projectName:'DESIGN PORTFOLIO',
      projectImage:Projectdummy
    },
    
  ]
  return (
    <ProjectsContainer>

      <ProjectsHeaderContainer>
        <h2>Projects</h2>
        <UnderLineSpan giveSpace >
          <p>CONTACT ME</p>
        </UnderLineSpan>
        
      </ProjectsHeaderContainer>
      <br /><br />
      <ListOFProject>
        {
          porfolio_data.map((data,index)=>(
            <PortfolioDisplay 
              key={index}
              stacks={data.stacks}
              code_url={data.code_url}
              website_url={data.website_url}
              accessVariant={data.accessVariant}
              projectImage={data.projectImage}
              projectName={data.projectName}
            />
          ))
        }
       
        
        
      </ListOFProject>

     

    </ProjectsContainer>
  )
}

export default Projects