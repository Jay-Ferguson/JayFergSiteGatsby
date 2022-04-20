module.exports = {
  //site configuration
 
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-manifest',
      options:{
        start_url:"/",
        icon:"src/images/icon-svg/j-logo.svg",
        crossOrigin:"use-credentials"
      }
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
  ],
  siteMetadata: {
    title: "Hello",
    description: "Thank you for visiting my website. I am a UX designer and front end web developer from Ottawa Canada.",
    copyright:"2021",
    contact:"jayfergusonweb@gmail.com",
    logo: "/src/images/icon-svg/j-logo.svg",
    img:"/src/images/",
    siteUrl:"https://jay-ferguson.com/"
  },
};
