import propTypes from 'prop-types';

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Oops. An error occurred on server. Code : ${statusCode}`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode;
  // const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }
  return { statusCode };
};

Error.propTypes = {
  statusCode: propTypes.number.isRequired,
};

export default Error;

//  TODO: Custom this error page
