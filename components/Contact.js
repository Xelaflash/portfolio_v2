import styled from 'styled-components';
import SectionTitle from './SectionTitle';

export default function Contact() {
  return (
    <ContactSection id="contact">
      <SectionTitle title="Contact" margin="0 auto" />
      <p>Contact</p>
      <p>section</p>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  /*  TODO: Kill that  */
  border: 1px solid green;
  min-height: 40vh;
`;
