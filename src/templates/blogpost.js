// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// import styled from "styled-components";
// import { ButtonMain } from "../components/Button";
// import { device } from "../styles/mediaQueries";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import IntroCard from "../components/IntroCard";


// export default function BlogsDetails({ data }) {
//   const { html } = data.markdownRemark;
//   const { title, stack, featuredImg, link, github } =
//     data.markdownRemark.frontmatter;
//   const image = getImage(featuredImg.childImageSharp);
//   console.log(github);
//   return (
//     <Layout>
//       <IntroCard>
//         <Title>{title}</Title>
//         <LineTwo />
//         <Stack>{stack}</Stack>
//       </IntroCard>

//       {/* <Img
//         fluid={featuredImg.childImageSharp.fluid}
//         alt="project-details"
//         formats={["AUTO", "WEBP"]}
//       ></Img> */}

//       <GatsbyImage
//         image={image}
//         alt="project-img"
//         objectFit="contain"
//       ></GatsbyImage>

//       <PDetails dangerouslySetInnerHTML={{ __html: html }} />
//       <ButtonsContainer>
//         <ButtonMain href={github} target="blank" role="button">
//           Github
//         </ButtonMain>
//         <ButtonMain href={link} target="blank" role="button">
//           Live
//         </ButtonMain>
//       </ButtonsContainer>
//     </Layout>
//   );
// }

// export const query = graphql`
//   query BlogsDetails($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         stack
//         title
//         link
//         github
//         featuredImg {
//           childImageSharp {
//             gatsbyImageData(
//               width: 400
//               placeholder: BLURRED
//               formats: WEBP
//               transformOptions: { fit: CONTAIN, cropFocus: CENTER }
//             )
//           }
//         }
//       }
//     }
//   }
// `;