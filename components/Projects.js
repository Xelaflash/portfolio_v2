import { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';
import SectionTitle from './SectionTitle';
import Project from './Project';

export default function Projects({ data }) {
  const [isWorkProjectsActive, setIsWorkProjectsActive] = useState(true);
  const [isPersoProjectsActive, setIsPersoProjectsActive] = useState(false);

  const handleClick = () => {
    setIsWorkProjectsActive(!isWorkProjectsActive);
    setIsPersoProjectsActive(!isPersoProjectsActive);
  };

  const workProjectsData = data?.workProjectsData?.results;
  const persoProjectsData = data?.persoProjectsData?.results;
  const projectsData = isWorkProjectsActive
    ? workProjectsData
    : persoProjectsData;

  return (
    <ProjectsSection id="projects">
      <SectionTitle title="Projects" margin="0 auto" />
      <MaxWidthWrapper>
        <ProjectTypeWrapper>
          <ProjectTypeBtn
            active={isWorkProjectsActive}
            onClick={handleClick}
            type="button"
          >
            Work Projects
          </ProjectTypeBtn>
          <ProjectTypeBtn
            active={isPersoProjectsActive}
            onClick={handleClick}
            type="button"
          >
            Personal Projects
          </ProjectTypeBtn>
        </ProjectTypeWrapper>
        <ProjectWrapper>
          {projectsData?.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectWrapper>
      </MaxWidthWrapper>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section`
  /*  TODO: kill that */
  border: 1px solid red;
  min-height: 50vh;
  margin-top: -4rem;
`;

const ProjectTypeWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 0 1rem;
`;

const ProjectTypeBtn = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: var(--bold);
  font-family: var(--title-font-family);
  transition: opacity 350ms ease, color 250ms ease-out;
  ${(props) => props.active && `color: var(--color-primary)`};
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 16px;
`;

Projects.propTypes = {
  data: propTypes.object.isRequired,
};
