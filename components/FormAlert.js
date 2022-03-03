import { AlertTriangle } from 'react-feather';
import propTypes from 'prop-types';

const FormAlert = ({ message }) => (
  <div
    style={{
      color: 'var(--color-logo-red)',
      padding: '0.25rem',
      marginTop: '0.5rem',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <AlertTriangle
      color="var(--color-logo-red)"
      size={18}
      style={{ marginRight: '8px', marginTop: '-2px' }}
    />
    {message}
  </div>
);

FormAlert.propTypes = {
  message: propTypes.string,
};

export default FormAlert;
