import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Image from 'next/image';
import { GitHub, ExternalLink } from 'react-feather';
import Link from 'next/link';
import VisuallyHidden from './VisuallyHidden';

export default function Project({ project }) {
  console.log(project.properties.Github_Url.url);
  return (
    <SingleProjectWrapper>
      <BorderWrapper>
        {/* Project title */}
        {project?.properties?.Name?.title?.map((title) => (
          <ProjectName key={title?.text?.content}>
            {title?.text?.content}
          </ProjectName>
        ))}
        <ProjectDetailsWrapper>
          {/* Date */}
          <p>{project?.properties?.Date?.number}</p>
        </ProjectDetailsWrapper>
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
          >
            <GitHub size={24} />
            <VisuallyHidden>
              {project?.properties?.Github_Url?.url}
            </VisuallyHidden>
          </a>
        </ProjectLinkWrapper>

        {/* Image */}
        {project?.properties?.Image?.files.map((imgFile) => (
          <Image
            src={imgFile?.name}
            width={250}
            height={120}
            key={project?.properties?.Image?.id}
          />
        ))}
      </BorderWrapper>
    </SingleProjectWrapper>
  );
}

const SingleProjectWrapper = styled.div`
  position: relative;
  max-width: 600px;
  border-radius: 5px;
  padding: 2px;
  background: var(--color-gradient);
`;

const BorderWrapper = styled.div`
  background: var(--color-background);
  padding: 2rem;
`;

const ProjectName = styled.div`
  margin: 8px auto 0;
  text-transform: uppercase;
  width: fit-content;
  text-align: center;
  font-weight: var(--semiBold);
  font-size: 2rem;
  color: var(--color-gradient);
  background: var(--color-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDetailsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: -4px auto 16px;
  width: fit-content;
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-dimmed);
`;

const ProjectTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: -4px auto 16px;
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
  margin: 32px auto;
  width: 80%;
`;
const ProjectStackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80%;
  gap: 8px;
  margin: -4px auto 16px;
`;
const ProjectLinkWrapper = styled.div`
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
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
`;

Project.propTypes = {
  project: propTypes.object.isRequired,
};
