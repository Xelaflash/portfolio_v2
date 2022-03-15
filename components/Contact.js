import styled from 'styled-components';
import { QUERIES } from '../styles/constants';
import ContactForm from './ContactForm';
import MaxWidthWrapper from './MaxWidthWrapper';
import SectionTitle from './SectionTitle';

export default function Contact() {
  return (
    <ContactSection id="contact">
      <SectionTitle title="Contact" margin="0 auto" />
      <MaxWidthWrapper>
        <SubTitleText>
          <p>I'd love to hear from you and discuss your project together.</p>
        </SubTitleText>
        <ContactForm />
      </MaxWidthWrapper>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  /*  TODO: Kill that  */
  border: 1px solid green;
`;

const SubTitleText = styled.div`
  margin: 2rem auto;
  width: fit-content;
  font-size: 1.1rem;
  font-weight: var(--light);
  font-family: var(--title-font-family);
  font-style: italic;
  @media ${QUERIES.phoneAndDown} {
    font-size: 1rem;
    text-align: center;
  }
`;
