import { useState } from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { ThumbsUp, AlertTriangle } from 'react-feather';
import Button from './Button';
import FormAlert from './FormAlert';
import BorderWrapper from './BorderWrapper';
import { QUERIES } from '../styles/constants';

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

  const [isEmailSent, setIsEmailSent] = useState(null);
  const [mailSendingErrors, setMailSendingErrors] = useState(null);

  const sendEmail = (formValues) => {
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        formValues,
        `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsEmailSent(true);
          } else {
            setIsEmailSent(false);
          }
        },
        (error) => {
          setIsEmailSent(false);
          setMailSendingErrors(error.text);
        }
      );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting, resetForm, initialValues }) => {
        sendEmail(values);
        setSubmitting(false);
        setTimeout(() => {
          resetForm(initialValues);
        }, 1000);
      }}
    >
      {({ errors, touched, isSubmitting, isValid, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <BorderWrapper>
            <FormContent>
              {isEmailSent && (
                <p
                  style={{
                    color: 'var(--color-logo-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ThumbsUp
                    color="var(--color-logo-green)"
                    size={18}
                    style={{ marginRight: '8px', marginTop: '-2px' }}
                  />
                  Email sent successfully
                </p>
              )}
              {isEmailSent === false && (
                <p
                  style={{
                    color: 'var(--color-logo-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AlertTriangle
                    color="var(--color-logo-red)"
                    size={18}
                    style={{ marginRight: '8px', marginTop: '-2px' }}
                  />
                  Ooops....That's embarrassing an error occured.
                </p>
              )}
              {mailSendingErrors !== null && (
                <p
                  style={{
                    color: 'var(--color-logo-red)',
                    textAlign: 'center',
                  }}
                >
                  Error :{mailSendingErrors}
                </p>
              )}

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
            </FormContent>
          </BorderWrapper>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  max-width: 550px;
  margin: 2rem auto;
  padding: 5px 0 2px 0;
  box-shadow: hsla(var(--shadow), 0.4) 0px 2px 4px,
    hsla(var(--shadow), 0.3) 0px 7px 13px -3px,
    hsla(var(--shadow), 0.2) 0px -3px 0px inset;
  border-radius: 5px;
  background: var(--color-gradient);
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

const FormContent = styled.div`
  padding: 1rem 2rem;
  @media ${QUERIES.phoneAndDown} {
    padding: 1rem 0.5rem;
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
