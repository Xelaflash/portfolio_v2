module.exports = {
  reactStrictMode: true,
  styledComponents: true,
  // below is to specify external sources to next image
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'res.cloudinary.com'],
    // config needed for svg taken from Notion API
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
