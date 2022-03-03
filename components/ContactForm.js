import styled from 'styled-components';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Button from './Button';
import FormAlert from './FormAlert';

export default function ContactForm() {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Must be 5 characters or more')
      .required('A name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('A valid email is required'),
    subject: Yup.string()
      .min(5, 'Must be 5 characters or more')
      .required('A subject is required'),
    message: Yup.string()
      .min(20, 'Must be 20 characters or more')
      .required('A message is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting, isValid, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FieldWrapper>
            <label htmlFor="name" className="label">
              Name
            </label>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="Jon Doe"
              className="input"
            />
            {errors.name && touched.name ? (
              <FormAlert message={errors.name} />
            ) : null}
          </FieldWrapper>
          <FieldWrapper>
            <label htmlFor="email" className="label">
              Email
            </label>
            <Field
              id="email"
              type="text"
              name="email"
              placeholder="jondoe@gmail.com"
              className="input"
            />
            {errors.email && touched.email ? (
              <FormAlert message={errors.email} />
            ) : null}
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="subject" className="label">
              Subject
            </label>
            <Field
              id="subject"
              type="text"
              name="subject"
              placeholder="Request for proposal"
              className="input"
            />
            {errors.subject && touched.subject ? (
              <FormAlert message={errors.subject} />
            ) : null}
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="message" className="label">
              Message
            </label>
            <Field
              id="message"
              name="message"
              placeholder="Your message body..."
              className="textarea"
              component="textarea"
            />
            {errors.message && touched.message ? (
              <FormAlert message={errors.message} />
            ) : null}
          </FieldWrapper>

          <SubmitButton
            text="Send Email"
            color="var(--color-background)"
            background="var(--color-secondary)"
            type="submit"
            disabled={isSubmitting || !isValid}
          />
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  max-width: 550px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  box-shadow: 0.3px 0.5px 0.7px hsla(var(--shadow), 0.36),
    0.8px 1.6px 2px -0.8px hsla(var(--shadow), 0.36),
    2.1px 4.1px 5.2px -1.7px hsla(var(--shadow), 0.36),
    5px 10px 12.6px -2.5px hsla(var(--shadow), 0.36);
  border-radius: 5px;
  .label {
    padding: 0.4rem 0;
    margin: 0;
    display: block;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: var(--medium);
    letter-spacing: 0.5px;
  }

  .input,
  .textarea {
    background: hsla(var(--color-background-shade2-unitless), 1);
    border: none;
    box-shadow: 0.3px 0.5px 0.7px hsla(var(--shadow), 0.34),
      0.4px 0.8px 1px -1.2px hsla(var(--shadow), 0.34),
      1px 2px 2.5px -2.5px hsla(var(--shadow), 0.34);
    border-radius: 5px;
    padding: 0.4rem 0.5rem;
    width: 100%;
    height: 48px;
    color: var(--color-text);
    &::placeholder {
      color: var(--text-dimmed);
      font-size: 0.95rem;
      font-weight: var(--regular);
    }
    &:focus,
    &:active {
      outline: 1px solid var(--color-primary);
      border: 1px solid;
      border-image-slice: 1;
      border-width: 1px;
      border-image-source: var(--color-gradient);
      border-radius: 5px;
    }
  }
  .textarea {
    resize: vertical;
    min-height: 152px;
  }
`;

const FieldWrapper = styled.div`
  margin: 16px auto;
  width: 100%;
  &:first-of-type {
    margin: 0 auto 16px;
  }
`;

const SubmitButton = styled(Button)`
  margin: 32px auto 0;
  padding: 0.8rem 3.5rem;
`;
