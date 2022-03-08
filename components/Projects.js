import { useState } from 'react';
import Image from 'next/image';
import propTypes from 'prop-types';
import styled from 'styled-components';
import MaxWidthWrapper from './MaxWidthWrapper';
import SectionTitle from './SectionTitle';

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

        {/*  TODO: Create a single project component */}
        <div>
          {projectsData?.map((item) => (
            <div key={item.id}>
              <p>--------START PROJECT-----------</p>
              {/* Project title */}
              {item.properties.Name.title.map((title) => (
                <p key={title.text.content}>{title.text.content}</p>
              ))}
              {/* Date */}
              <p>{item.properties.Date.number}</p>
              {/*  companie */}
              {item.properties.Company.rich_text.map((companyName) => (
                <p key={companyName.plain_text}>{companyName.plain_text}</p>
              ))}
              {/* description */}
              {item.properties.Description.rich_text.map(
                (description, index) => (
                  <p key={index}>{description.plain_text}</p>
                )
              )}
              {/* TAGS (offline/online) */}
              {item.properties.Tags.multi_select.map((tag) => (
                <p key={tag.id}>{tag.name}</p>
              ))}
              {/* Type freelance/probono */}
              <p>{item.properties.Type.select.name}</p>
              {/* Status */}
              <p>{item.properties.Status.select.name}</p>
              {/* stack */}
              {item.properties.Stack.multi_select.map((stack) => (
                <p key={stack.id}>{stack.name}</p>
              ))}
              {/* Project url */}
              <p>{item.properties.Project_Url.url}</p>
              {/* Github url */}
              <p>{item.properties.Github_Url.url}</p>
              {/* Image */}
              {item.properties.Image.files.map((imgFile) => (
                <Image src={imgFile.name} width={250} height={120} />
              ))}
              <p>---------END---------</p>
            </div>
          ))}
        </div>
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
  margin: 2rem 0;
`;

const ProjectTypeBtn = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: var(--bold);
  font-family: var(--title-font-family);
  transition: opacity 350ms ease, color 250ms ease-out;
  ${(props) => props.active && `color: var(--color-primary)`};
`;

Projects.propTypes = {
  data: propTypes.object.isRequired,
};
