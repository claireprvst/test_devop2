module.exports = {
  siteMetadata: {
    title: "static_content",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",

      {
        resolve: `gatsby-plugin-s3`,
        options: {
          bucketName: "testdevopawsbucket",
            protocol: "https",
            hostname: "d1u54hcs7cq0ov.cloudfront.net",

        },
      },
]
};
