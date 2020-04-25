exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query{
      allDatoCmsRoom{
        nodes{
          slug
        }
      }
    }
  `);

  // console.log(res.data.allDatoCmsRoom.nodes);

  if(res.errors){
    reporter.panic('There was no response', res.errors)
  }

  // Affected pages
  const rooms = res.data.allDatoCmsRoom.nodes;
  console.log(rooms);

  rooms.forEach(item => {
    actions.createPage({
      path: item.slug,
      component: require.resolve('./src/components/rooms.js'),
      context: {
        slug: item.slug
      }
    })
  });
}