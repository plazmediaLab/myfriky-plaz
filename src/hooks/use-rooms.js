import { graphql, useStaticQuery } from 'gatsby';

const useRooms = () => {

  const resDataGraphQL = useStaticQuery(graphql`
    query{
      allDatoCmsRoom{
        nodes{
          title
          content
          image{
            fluid(maxWidth:1200){
              ...GatsbyDatoCmsFluid
            }
          }
          slug
          id
        }
      }
    }
  `);

  return resDataGraphQL.allDatoCmsRoom.nodes.map(item => ({
    title: item.title,
    content: item.content,
    image: item.image,
    slug: item.slug,
    id: item.id,
  }));

}

export default useRooms;