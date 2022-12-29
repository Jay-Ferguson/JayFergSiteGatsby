const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          internal{
            contentFilePath
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
