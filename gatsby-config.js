
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// require.esm = require("/.require-esm");

module.exports = {
  //site configuration

  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        icon: "src/images/icon-svg/j-logo.svg",
        crossOrigin: "use-credentials",
      },
    },

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [],
      },
    },

    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects/`,
      },
      __key: "projects",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/projects/`,
      },
      __key: "markdown",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "blogposts",
    //     path: `${__dirname}/src/blogposts/`,
    //   },
    //   __key: "projects",
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown`,
    //     path: `${__dirname}/src/blogposts/`,
    //   },
    //   __key: "markdown",
    // } ,
  ],
  siteMetadata: {
    title: "Jay' Personal Site",
    description:
      "Welome, and thank you for visiting my corner of the internet. I am a UX designer and front end web developer, interested in working at the intersection of design and devlopement.",
    copyright: "2022",
    contact: "jayfergusonweb@gmail.com",
    author: "Jay",
    logo: "/src/images/icon-svg/j-logo.svg",
    img: "/src/images/",
    siteUrl: "https://jay-ferguson.com/",
    keywords: `UX, Design, Developer, Web, User Interface, UI, Canada `,
  },
};
