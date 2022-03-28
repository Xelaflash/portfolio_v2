import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Image from 'next/image';
import { GitHub, ExternalLink } from 'react-feather';
import VisuallyHidden from './VisuallyHidden';
import { QUERIES } from '../styles/constants';
import BorderWrapper from './BorderWrapper';

export default function Project({ project }) {
  const projectName = project?.properties?.Name?.title?.map(
    (title) => title?.text?.content
  );

  return (
    <SingleProjectWrapper>
      <BorderWrapper>
        {/* Project title */}
        <ProjectName>{projectName}</ProjectName>
        <ProjectDetailsWrapper>
          {/* Date */}
          <p>{project?.properties?.Date?.number}</p>
        </ProjectDetailsWrapper>
        <ImageWrapper>
          {/* Image */}
          {project?.properties?.Image?.files.map((imgFile) => (
            <Image
              src={imgFile?.name}
              key={project?.properties?.Image?.id}
              layout="fill"
              alt={`screen shot of website ${projectName}`}
            />
          ))}
        </ImageWrapper>
        <ProjectTagsWrapper>
          {/* TAGS (front end/ fullstack) */}
          {project?.properties?.Tags?.multi_select?.map((tag) => (
            <Tag key={tag?.id}>{tag?.name}</Tag>
          ))}
          {/* Type freelance/probono */}
          <Tag>{project?.properties?.Type?.select?.name}</Tag>
          {/* Status (offline/online) */}
          <StatusTag
            online={project?.properties?.Status?.select?.name === 'Online'}
          >
            {project?.properties?.Status?.select?.name}
          </StatusTag>
        </ProjectTagsWrapper>
        <ProjectDescriptionWrapper>
          {/* description */}
          {project?.properties?.Description?.rich_text.map(
            (description, index) => (
              <p key={index}>{description?.plain_text}</p>
            )
          )}
        </ProjectDescriptionWrapper>
        <ProjectStackWrapper>
          {/* stack */}
          {project?.properties?.Stack?.multi_select.map((stack) => (
            <Tag key={stack?.id}>{stack?.name}</Tag>
          ))}
        </ProjectStackWrapper>
        <ProjectLinkWrapper>
          {/* Project url */}
          <a
            href={`${project?.properties?.Project_Url?.url}`}
            target="_blank"
            rel="noreferrer noopener"
            className={
              project?.properties?.Project_Url?.url === 'N/A' ? 'disabled' : ''
            }
          >
            <ExternalLink size={24} />
            <VisuallyHidden>
              {project?.properties?.Project_Url?.url}
            </VisuallyHidden>
          </a>
          {/* Github url */}
          <a
            href={`${project?.properties?.Github_Url?.url}`}
            target="_blank"
            rel="noreferrer noopener"
            className={
              project?.properties?.Github_Url?.url === 'N/A' ? 'disabled' : ''
            }
          >
            <GitHub size={24} />
            <VisuallyHidden>
              {project?.properties?.Github_Url?.url}
            </VisuallyHidden>
          </a>
        </ProjectLinkWrapper>
      </BorderWrapper>
    </SingleProjectWrapper>
  );
}

const SingleProjectWrapper = styled.div`
  width: 550px;
  border-radius: 5px;
  background: var(--color-gradient);
  box-shadow: hsla(var(--shadow), 0.4) 0px 2px 4px,
    hsla(var(--shadow), 0.3) 0px 7px 13px -3px,
    hsla(var(--shadow), 0.2) 0px -3px 0px inset;
`;

const ProjectName = styled.div`
  margin: 0.3rem auto 0;
  width: fit-content;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: var(--semiBold);
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${QUERIES.phoneAndDown} {
    font-size: 1.5rem;
    padding-top: 8px;
  }
`;

const ProjectDetailsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: -4px auto 0.5rem;
  width: fit-content;
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-dimmed);
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  line-height: 0;
  img {
    object-fit: contain;
  }
  @media ${QUERIES.phoneAndDown} {
    height: 150px;
  }
`;

const ProjectTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 1rem auto 0;
`;

const Tag = styled.div`
  color: var(--color-text);
  padding: 4px 8px;
  font-size: 0.9rem;
  border: 1px solid var(--color-text);
  border-radius: 5px;
`;

const StatusTag = styled(Tag)`
  ${({ online }) =>
    online &&
    css`
      background: #45a29e;
      border: 1px solid #45a29e;
      /* using this color for contrast ratio in both theme */
      color: #0e141b;
    `}
  ${({ online }) =>
    !online &&
    css`
      background: #f76c6c;
      border: 1px solid #f76c6c;
    `}
`;
const ProjectDescriptionWrapper = styled.div`
  font-size: 0.9rem;
  text-align: left;
  margin: 0.5rem auto 0;
  padding: 0 1rem;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjectStackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0.5rem auto 0;
  min-height: 75px;
`;
const ProjectLinkWrapper = styled.div`
  margin: 0.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 32px;
  a {
    width: var(--min-tap-height);
    height: var(--min-tap-height);
    /* to align in tap box */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 350ms ease;
  }
  a:hover {
    color: var(--color-primary);
  }
  .disabled {
    display: none;
  }
`;

Project.propTypes = {
  project: propTypes.object.isRequired,
};
