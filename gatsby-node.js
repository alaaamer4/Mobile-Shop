const path = require("path")

exports.createPages = async ({ page, actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allStrapiPhones {
        nodes {
          id
        }
      }
    }
  `)
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.id}`,
      component: path.resolve(`src/components/home/singleProduct.js`),
      context: {
        id: product.id,
      },
    })
  })
}
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}
