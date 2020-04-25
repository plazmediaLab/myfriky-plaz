import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {

  const resGraphQL = useStaticQuery(graphql`
    query{
      datoCmsSite{
        globalSeo{
          siteName
          titleSuffix
          fallbackSeo{
            title
            description
          }
        }
      }
    }
  `);

  return resGraphQL.datoCmsSite.globalSeo;

};

export default useSeo;