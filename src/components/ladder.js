import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Ladder = () => {
  const data = useStaticQuery(graphql`
    query {
      allLadderResultsMondayMenD {
        edges {
          node {
            id
            name
            percentage
            played
            pointsAgainst
            pointsFor
            ranking
            won
            drawn
            lost
            forfeits
            disqualifications
            competitionPoints
            children {
              id
            }
            byes
            adjustments
          }
        }
      }
     allLadderResultsMondayMenC {
        edges {
          node {
            id
            name
            percentage
            played
            pointsAgainst
            pointsFor
            ranking
            won
            lost
            drawn
            forfeits
            disqualifications
            competitionPoints
            children {
              id
            }
            byes
            adjustments
            lost
          }
        }
      }
    }
  `)

  return (

      <div>
          <h2 className="h2divider">Men Group D</h2>
          <div className="ladder-headings">
              <label>Team Name</label>
              <label>P</label>
              <label>W</label>
              <label>L</label>
              <label>%</label>
          </div>
          {
              data.allLadderResultsMondayMenD.edges.map((item) => (
                  <div class="ladder-result">
                      <label className="name">{item.node.name}</label>
                      <label className="played">{item.node.played}</label>
                      <label className="wins">{item.node.won}</label>
                      <label className="lost">{item.node.lost}</label>
                      <label className="percentage">{item.node.percentage}</label>
                  </div>
              ))
          }

          <h2 className="h2divider">Men Group C</h2>
          <div className="ladder-headings">
              <label>Team Name</label>
              <label>P</label>
              <label>W</label>
              <label>L</label>
              <label>%</label>
          </div>
          {
              data.allLadderResultsMondayMenC.edges.map((item) => (
                  <div class="ladder-result">
                      <label className="name">{item.node.name}</label>
                      <label className="played">{item.node.played}</label>
                      <label className="wins">{item.node.won}</label>
                      <label className="lost">{item.node.lost}</label>
                      <label className="percentage">{item.node.percentage}</label>
                  </div>
              ))
          }
      </div>
  )
}

export default Ladder
