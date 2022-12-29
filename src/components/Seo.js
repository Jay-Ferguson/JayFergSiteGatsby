
// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby";
// import PropTypes from "prop-types"





// export default function SEO({ description, lang, meta, title}) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             keywords
//           }
//         }
//       }
//     `
//   )

    
 

//  const keywords = site.siteMetadata.keywords;
//  const metaDescription = description || site.siteMetadata.description;
//  const defaultTitle = site.siteMetadata?.title;



// return (
//   <Head
//     htmlAttributes={{
//       lang,
//     }}
//     title={title}
//     titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
//     meta={[
//       {
//         name: `description`,
//         content: metaDescription,
//       },
//       {
//         name: `keywords`,
//         content: keywords,
//       },
//       {
//         property: `og:title`,
//         content: title,
//       },
//       {
//         property: `og:description`,
//         content: metaDescription,
//       },
//       {
//         property: `og:type`,
//         content: `website`,
//       },
//       {
//         name: `twitter:card`,
//         content: `summary`,
//       },
//       {
//         name: `twitter:creator`,
//         content: site.siteMetadata?.author || `Jay`,
//       },
//       {
//         name: `twitter:title`,
//         content: title,
//       },
//       {
//         name: `twitter:description`,
//         content: metaDescription,
//       },
//     ].concat(meta)}
//   />
// )
// }
 
//   SEO.defaultProps = {
//     lang: `en`,
//     meta: [],
//     description: ``,
//   };

//   SEO.propTypes = {
//     description: PropTypes.string,
//     lang: PropTypes.string,
//     meta: PropTypes.arrayOf(PropTypes.object),
//     title: PropTypes.string.isRequired,
//   };
