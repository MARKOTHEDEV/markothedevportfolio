import { useMediaQuery } from 'react-responsive'
import PortfolioDisplay, { PortfolioDisplayProp } from '../PortfoilioDisplay/PortfolioDisplay'
import UnderLineSpan from '../UnderLineSpan/UnderLineSpan'
import { ListOFProject, ProjectsContainer, ProjectsHeaderContainer } from './Projects.style'
import Projectdummy from '../../assets/images/projectdummy.webp'
import checkidImg from '../../assets/images/checkid.jpg'
import EmetricImg  from '../../assets/images/emetricsuite.jpg'
import meticapp from '../../assets/images/metic.jpg'
import manna from '../../assets/images/mannaexpress.jpg'
const Projects = ():React.ReactElement=>{
  const isTab = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const porfolio_data:PortfolioDisplayProp[] =[
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://checkid.ng/',
      stacks:['stitches','NEXTJS','REACT QUERY'],
      projectName:'CHECKID',
      projectImage:checkidImg
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'http://emetricsuite.com/',
      stacks:['styled-components.com','NEXTJS'],
      projectName:'Emetric Suite Landing Page',
      projectImage:EmetricImg
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'#',
      stacks:['NEXTJS','stitches','REACT QUERY','ZUSTAND','PostgreSQL','django-restframework','redis',],
      projectName:'MANNA EXPRESS',
      projectImage:manna
    },
    {
      accessVariant:isTab?'hover':'static',
      code_url:'#',
      website_url:'https://app.emetricsuite.com/',
      stacks:['REDUX TOOLKIT','REACT','CHAKRA UI','DJANGO REST FRAMEWORK','REDIS','PostgreSQL'],
      projectName:'Emetric Suite web app(only desktop)',
      projectImage:meticapp
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