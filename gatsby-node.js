/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const fetch = require('node-fetch');

const YEAR = 1980;
const MONTH = 11;

// exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {


//   const AllGradesJuniorDomestic = await fetch(`https://api.playhq.com/v1/seasons/b9c36620-a2df-4e9d-8e30-e600985f11f8/grades`, {
//       method: 'get',
//       headers: {
//           'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
//           'x-phq-tenant': 'bwa'
//       }
//   });

//   const AllGradesJuniorDomesticData = await AllGradesJuniorDomestic.json();
//   const AllGradesJuniorDomesticDataArray = [];
//   AllGradesJuniorDomesticData.data.forEach(async (item) => {
//           const grade = item;
//           const gradeIDNew = item["id"];
//           const gradeName = item["name"];
//           const gradeURL = item["url"];
//           createNode({
//               ...grade,
//               id: gradeIDNew,
//               name: gradeName,
//               internal: {
//                   type: 'JuniorDomesticGrades',
//                   contentDigest: createContentDigest(grade)
//               }
//           });
//           AllGradesJuniorDomesticDataArray.push(gradeIDNew);
//             const responseLadder = await fetch(`https://api.playhq.com/v1/grades/${gradeIDNew}/ladder`, {
//                 method: 'get',
//                 headers: {
//                     'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
//                     'x-phq-tenant': 'bwa'
//                 }
//             });
//             const responseLadderJSON = await responseLadder.json();

//             responseLadderJSON.data.forEach(async (item) => {
//                     const grade = item;
//                     const gradeLadder = item["ladders"];
//                     const gradeLadderSingle = item["grade"];
//                     //console.log("item is: ",  item);
//                     createNode({
//                         ...item,
//                         id: gradeLadderSingle["id"],
//                         name: gradeLadderSingle["name"],
//                         internal: {
//                             type: 'Ladders',
//                             contentDigest: createContentDigest(item)
//                         }
//                     });


//   });

// });

//     const responseseasonteams = await fetch(`https://api.playhq.com/v1/seasons/3bb1ab14-ae7f-4ee0-85af-ef4cfd459222/teams`, {
//         method: 'get',
//         headers: {
//             'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
//             'x-phq-tenant': 'bwa'
//         }
//     });

//     const datast = await responseseasonteams.json();
//     const gradeIDArray = [];
//     datast.data.forEach((item) => {
//         const grade = item["grade"];
//         if(grade !== null) {
//             const gradeID = grade["id"];
//             const gradeName = grade["name"];
//             const gradeURL = grade["url"];
//             createNode({
//                 ...grade,
//                 id: gradeID,
//                 name: gradeName,
//                 internal: {
//                     type: 'Grades',
//                     contentDigest: createContentDigest(grade)
//                 }
//             });
//             gradeIDArray.push(gradeID);
//         }
//     });

//     const response = await fetch(`https://api.playhq.com/v1/grades/df83e9d4-aef9-41b4-aaba-488c3ed00faf/ladder`, {
//         method: 'get',
//         headers: {
//             'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
//             'x-phq-tenant': 'bwa'
//         }
//     });
//     const data = await response.json();
//     const gradeID = 'df83e9d4-aef9-41b4-aaba-488c3ed00faf';

//     data.data.forEach((item) => {
//         const laddersArray = item["ladders"];
//         const standingsArray = item["ladders"][0]["standings"];
//         laddersArray.forEach((item) => {
//             const standingsArray = item["standings"];
//             standingsArray.forEach((item) => {
//                 const teamID = item["team"]["id"];
//                 const teamName = item["team"]["name"];
//                 createNode({
//                     ...item,
//                     id: teamID,
//                     name: teamName,
//                     gradeID: gradeID,
//                     internal: {
//                         type: 'LadderResultsMondayMenD',
//                         contentDigest: createContentDigest(item)
//                     }
//                 });
//             });
//         });
//     });

//     const responseMonMenC = await fetch(`https://api.playhq.com/v1/grades/2b2e3684-40b7-441e-9b07-84984bbe2a7b/ladder`, {
//         method: 'get',
//         headers: {
//             'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
//             'x-phq-tenant': 'bwa'
//         }
//     });
//     const data_MonMenC = await responseMonMenC.json();
//     const gradeID_MonMenC = '215ed5d0-ab21-424a-a809-8321a4d3e3dc';

//     data_MonMenC.data.forEach((item) => {
//         const laddersArray = item["ladders"];
//         const standingsArray = item["ladders"][0]["standings"];
//         laddersArray.forEach((item) => {
//             const standingsArray = item["standings"];
//             standingsArray.forEach((item) => {
//                 const teamID = item["team"]["id"];
//                 const teamName = item["team"]["name"];
//                 createNode({
//                     ...item,
//                     id: teamID,
//                     name: teamName,
//                     gradeID: gradeID_MonMenC,
//                     internal: {
//                         type: 'LadderResultsMondayMenC',
//                         contentDigest: createContentDigest(item)
//                     }
//                 });
//             });
//         });
//     });

//     const responseMonMenCFixtures = await fetch(`https://api.playhq.com/v1/grades/215ed5d0-ab21-424a-a809-8321a4d3e3dc/games`, {
//         method: 'get',
//         headers: {
//             'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
//             'x-phq-tenant': 'bwa'
//         }
//     });
//     const data_MonMenCFixtures = await responseMonMenCFixtures.json();
//     const gradeID_MonMenCFixtures = '215ed5d0-ab21-424a-a809-8321a4d3e3dc';

//     data_MonMenCFixtures.data.forEach((item) => {

//         const gameStatus = item["status"];

//         if(gameStatus === "FINAL") {
//           const competitors = item["competitors"][0];
//           const competitors1 = item["competitors"][1];

//           if(competitors !== null && competitors1 !== null) {
//             const team1ID = competitors.id;
//             const team1Name = competitors.name;
//             const team1isHome = competitors.isHomeTeam;
//             const team1Outcome = competitors.outcome;
//             const team1scoreTotal = competitors.scoreTotal;
//             const team2ID = competitors1.id;
//             const team2Name = competitors1.name;
//             const team2isHome = competitors1.isHomeTeam;
//             const team2Outcome = competitors1.outcome;
//             const team2scoreTotal = competitors1.scoreTotal;

//             createNode({
//                 ...item,
//                 id: team1ID,
//                 team2ID: team2ID,
//                 team2Name: team2Name,
//                 team1isHome: team2isHome,
//                 team2Outcome: team2Outcome,
//                 team2scoreTotal: team2scoreTotal,
//                 team1ID: team1ID,
//                 team1Name: team1Name,
//                 team1isHome: team1isHome,
//                 team1Outcome: team1Outcome,
//                 team1scoreTotal: team1scoreTotal,
//                 internal: {
//                     type: 'FixturesMenC',
//                     contentDigest: createContentDigest(item)
//                 }
//             });
//           }

//         //  console.log("Team1: ", competitors["name"]);
//         //  console.log("Team2: ", competitors1["name"]);
//         }

//     });
// };

//------------------------------Create Pages-------------------------------//

const {graphql} = require('gatsby')
const path = require(`path`)

exports.createPages = async gatsbyUtilities => {

  const pages = await getPages(gatsbyUtilities)
  const newsPost = await getNewsPosts(gatsbyUtilities)

  if (!pages.length) {
    console.log('pages=false')
    return
    }

  await createPages(pages, {gatsbyUtilities})
  await createNewsPostPages(newsPost, {gatsbyUtilities})
}

//------------------------------Content Pages------------------------------//

  const createPages = async ( pages, {gatsbyUtilities}) => {

    Promise.all(
      pages.map( ( page ) =>
        gatsbyUtilities.actions.createPage({
          path: page.uri,
          component: path.resolve(`./src/templates/page.js`),
          // values in the context object are passed in as variables to page queries
          context: {
            title: page.title,
            slug: page.slug,
          },
        })
      )
    )
}



async function getPages({ graphql, reporter }) {
  const pagesQuery = await graphql(/* GraphQL */ `
    query Pages {
        allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "content"}}}}}) {
            nodes {
                slug
                uri
                title
            }
        }
    }
  `)

  if (pagesQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      console.log(pages),
      pagesQuery.errors
    )
    return
  }
    // console.log('pagesQuery:  ')
    // console.log(pagesQuery)
    return pagesQuery.data.allWpPost.nodes

}

//------------------------------News Pages---------------------------------//

  const createNewsPostPages = async (posts, {gatsbyUtilities}) =>
  Promise.all(
    posts.map((post) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/news-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,
        },
      })
    )
  )

  async function getNewsPosts({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
      query NewsPostArchive {
        allWpPost(
            filter: {categories: {nodes: {elemMatch: {slug: {eq: "news"}}}}}
            limit: 20
            ) {
                nodes {
                    id
                    uri
                }
            }
      }
    `)
    console.log(graphqlResult)
    if (graphqlResult.errors) {
      reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        graphqlResult.errors
      )
      return
    }
  
    return graphqlResult.data.allWpPost.nodes
  }
