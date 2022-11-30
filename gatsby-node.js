/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const fetch = require('node-fetch');

const YEAR = 1980;
const MONTH = 11;

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {

    const responseseasonteams = await fetch(`https://api.playhq.com/v1/seasons/3bb1ab14-ae7f-4ee0-85af-ef4cfd459222/teams`, {
        method: 'get',
        headers: {
            'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
            'x-phq-tenant': 'bwa'
        }
    });

    const datast = await responseseasonteams.json();
    const gradeIDArray = [];
    datast.data.forEach((item) => {
        const grade = item["grade"];
   //     console.log("grade: ", grade);
        if(grade !== null) {
            const gradeID = grade["id"];
            const gradeName = grade["name"];
            const gradeURL = grade["url"];
            createNode({
                ...grade,
                id: gradeID,
                name: gradeName,
                internal: {
                    type: 'Grades',
                    contentDigest: createContentDigest(grade)
                }
            });
            gradeIDArray.push(gradeID);
        }
    });

    const response = await fetch(`https://api.playhq.com/v1/grades/df83e9d4-aef9-41b4-aaba-488c3ed00faf/ladder`, {
        method: 'get',
        headers: {
            'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
            'x-phq-tenant': 'bwa'
        }
    });
    const data = await response.json();
    const gradeID = 'df83e9d4-aef9-41b4-aaba-488c3ed00faf';

    data.data.forEach((item) => {
        const laddersArray = item["ladders"];
        const standingsArray = item["ladders"][0]["standings"];
        laddersArray.forEach((item) => {
            const standingsArray = item["standings"];
            standingsArray.forEach((item) => {
                const teamID = item["team"]["id"];
                const teamName = item["team"]["name"];
                createNode({
                    ...item,
                    id: teamID,
                    name: teamName,
                    gradeID: gradeID,
                    internal: {
                        type: 'LadderResultsMondayMenD',
                        contentDigest: createContentDigest(item)
                    }
                });
            });
        });
    });

    const responseMonMenC = await fetch(`https://api.playhq.com/v1/grades/2b2e3684-40b7-441e-9b07-84984bbe2a7b/ladder`, {
        method: 'get',
        headers: {
            'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
            'x-phq-tenant': 'bwa'
        }
    });
    const data_MonMenC = await responseMonMenC.json();
    const gradeID_MonMenC = '215ed5d0-ab21-424a-a809-8321a4d3e3dc';

    data_MonMenC.data.forEach((item) => {
        const laddersArray = item["ladders"];
        const standingsArray = item["ladders"][0]["standings"];
        laddersArray.forEach((item) => {
            const standingsArray = item["standings"];
            standingsArray.forEach((item) => {
                const teamID = item["team"]["id"];
                const teamName = item["team"]["name"];
                createNode({
                    ...item,
                    id: teamID,
                    name: teamName,
                    gradeID: gradeID_MonMenC,
                    internal: {
                        type: 'LadderResultsMondayMenC',
                        contentDigest: createContentDigest(item)
                    }
                });
            });
        });
    });

    const responseMonMenCFixtures = await fetch(`https://api.playhq.com/v1/grades/215ed5d0-ab21-424a-a809-8321a4d3e3dc/games`, {
        method: 'get',
        headers: {
            'x-api-key': '97c0b8e9-60f4-4015-91fb-d9958501a679',
            'x-phq-tenant': 'bwa'
        }
    });
    const data_MonMenCFixtures = await responseMonMenCFixtures.json();
    const gradeID_MonMenCFixtures = '215ed5d0-ab21-424a-a809-8321a4d3e3dc';

    data_MonMenCFixtures.data.forEach((item) => {

        const gameStatus = item["status"];
//        console.log("item: ", item);

        if(gameStatus === "FINAL") {
          const competitors = item["competitors"][0];
          const competitors1 = item["competitors"][1];

          if(competitors !== null && competitors1 !== null) {
            const team1ID = competitors.id;
            const team1Name = competitors.name;
            const team1isHome = competitors.isHomeTeam;
            const team1Outcome = competitors.outcome;
            const team1scoreTotal = competitors.scoreTotal;
            const team2ID = competitors1.id;
            const team2Name = competitors1.name;
            const team2isHome = competitors1.isHomeTeam;
            const team2Outcome = competitors1.outcome;
            const team2scoreTotal = competitors1.scoreTotal;

            createNode({
                ...item,
                id: team1ID,
                team2ID: team2ID,
                team2Name: team2Name,
                team1isHome: team2isHome,
                team2Outcome: team2Outcome,
                team2scoreTotal: team2scoreTotal,
                team1ID: team1ID,
                team1Name: team1Name,
                team1isHome: team1isHome,
                team1Outcome: team1Outcome,
                team1scoreTotal: team1scoreTotal,
                internal: {
                    type: 'FixturesMenC',
                    contentDigest: createContentDigest(item)
                }
            });
          }

        //  console.log("Team1: ", competitors["name"]);
        //  console.log("Team2: ", competitors1["name"]);
        }

    });
};
