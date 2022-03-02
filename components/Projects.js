import styled from 'styled-components';
import SectionTitle from './SectionTitle';

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle title="Projects" margin="0 auto" />
      <p>Projects</p>
      <p>section</p>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section`
  /*  TODO: kill that */
  border: 1px solid red;
  min-height: 50vh;
`;
