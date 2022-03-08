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
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

//  TODO: Custom this error page
