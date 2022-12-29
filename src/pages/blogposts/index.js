// import React from "react";
// import { graphql, Link } from "gatsby";
// import Layout from "../../components/Layout";
// import styled from "styled-components";
// import { GatsbyImage } from "gatsby-plugin-image";
// import StyledTitleCard from "../../components/TitleCard";


// const Grid = styled.div`
//   max-width: 110rem;
//   width: 90%;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-column-gap: 1.5rem;
//   grid-row-gap: 1.5rem;
//   padding-bottom: 4rem;

//   @media screen and (min-width: 700px) {
//     grid-template-columns: 50% 50%;
//     grid-column-gap: 1rem;
//   }
// `;

// const GridLink = styled(Link)``;

// const GridCard = styled.div`
//   width: 100%;
//   height: 30rem;
//   padding: 2rem 0 2rem 0;
//   background: rgba(64, 64, 64, 0.5);
//   box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
//   backdrop-filter: blur(17px);
//   -webkit-backdrop-filter: blur(17px);
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   display: flex;
//   flex-flow: column;
//   gap: 1rem;
//   align-items: center;
//   justify-content: flex-end;
//   transition: 0.1s;

//   &:hover {
//     transform: scale(1.02);
//     transition: 0.15s;
//     background: rgba(255, 255, 255, 0.45);
//   }
// `;
// const StyledH3 = styled.h3`
//   margin-top: 1rem;
//   font-size: 2.2rem;
//   font-weight: 200;
// `;

// const SubTitle = styled.h3`
//   margin-bottom: 4rem;
// `;

// const Stack = styled.p`
//   font-size: 1.8rem;
//   font-weight: 100;
//   text-align: center;
// `;
// export default function BlogPosts ({ data }) {
//   const blogs = data.blogs.nodes;
//   // const image = getImage(project.frontmatter.thumbImg.childImageSharp);

//   return (
//     <Layout>
//       <StyledTitleCard>Blog Posts</StyledTitleCard>
//       <SubTitle></SubTitle>
//       <Grid>
//         {blogposts.map((blogpost) => (
//           <GridLink
//             to={"/blogposts/" + blogpost.frontmatter.slug}
//             key={blogpost.id}
//           >
//             <GridCard>
//               <GatsbyImage
//                 image={
//                   blogpost.frontmatter.thumbImg.childImageSharp.gatsbyImageData
//                 }
//                 style={{ width: "80%" }}
//                 alt="project-banner-image"
//                 objectFit="contain"
//                 placeholder="blurred"
//               />
//               <StyledH3>{blogpost.frontmatter.title}</StyledH3>
//               <Stack>{blogpost.frontmatter.stack}</Stack>
//             </GridCard>
//           </GridLink>
//         ))}
//       </Grid>
//     </Layout>
//   );
// }
// // export page query

// export const query = graphql`
//   query ProjectPage {
//     projects: allMarkdownRemark {
//       nodes {
//         frontmatter {
//           slug
//           stack
//           title
//           thumbImg {
//             childImageSharp {
//               gatsbyImageData(
//                 width: 400
//                 placeholder: BLURRED
//                 layout: FULL_WIDTH
//                 formats: [AUTO, WEBP]
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `;