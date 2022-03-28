import { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';
import SectionTitle from './SectionTitle';
import Project from './Project';
import Pagination from './Pagination';
import { QUERIES } from '../styles/constants';
import { useColorTheme } from '../utils/themeState';

const PageSize = 2;
export default function Projects({ data }) {
  const [isWorkProjectsActive, setIsWorkProjectsActive] = useState(true);
  const [isPersoProjectsActive, setIsPersoProjectsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { activeTheme } = useColorTheme();

  const handleClick = () => {
    setIsWorkProjectsActive(!isWorkProjectsActive);
    setIsPersoProjectsActive(!isPersoProjectsActive);
    setCurrentPage(1);
  };

  const workProjectsData = data?.workProjectsData?.results;
  const persoProjectsData = data?.persoProjectsData?.results;
  const projectsData = isWorkProjectsActive
    ? workProjectsData
    : persoProjectsData;

  const projectsDataArray = useMemo(() => [...projectsData], [projectsData]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projectsDataArray.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projectsDataArray]);

  return (
    <ProjectsSection id="projects">
      <SectionTitle title="Projects" margin="0 auto" />
      <MaxWidthWrapper>
        <ProjectsNav>
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
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={projectsDataArray.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
            theme={activeTheme}
          />
        </ProjectsNav>
        <ProjectWrapper>
          {currentData?.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectWrapper>
      </MaxWidthWrapper>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section`
  min-height: 50vh;
  margin-top: -4rem;
  margin-bottom: 6rem;
  @media ${QUERIES.tabletAndDown} {
    margin-top: -1.75rem;
  }

  @media ${QUERIES.phoneAndDown} {
    margin-top: -1rem;
    margin-bottom: 4rem;
  }
`;

const ProjectsNav = styled.div`
  margin: 0.5rem auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  max-width: 1160px;
  margin: auto;
  @media (max-width: 1180px) {
    justify-content: space-evenly;
  }
  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectTypeWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 0 1rem;
  @media ${QUERIES.tabletAndDown} {
    margin: 2rem auto 1rem auto;
  }
  @media ${QUERIES.phoneAndDown} {
    margin: 1rem auto;
  }
`;

const ProjectTypeBtn = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: var(--bold);
  font-family: var(--title-font-family);
  transition: opacity 350ms ease, color 250ms ease-out;
  ${(props) => props.active && `color: var(--color-primary)`};
  @media ${QUERIES.phoneAndDown} {
    font-size: 1.1rem;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 16px;
  @media ${QUERIES.tabletAndDown} {
    gap: 32px;
  }
  .pagination-bar {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

Projects.propTypes = {
  data: propTypes.object.isRequired,
};
