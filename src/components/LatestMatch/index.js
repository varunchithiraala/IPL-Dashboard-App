// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="competing-container">
        <div className="latest-match-competing-container">
          <p className="competing-team competing-bold">{competingTeam}</p>
          <p className="competing-team">{date}</p>
          <p className="competing-text">{venue}</p>
          <p className="competing-text">{result}</p>
        </div>
        <div className="team-logo-container">
          <img
            src={competingTeamLogo}
            className="team-logo-image"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="innings-container">
        <div>
          <p className="innings-heading">First Innings</p>
          <p className="innings-text">{firstInnings}</p>
          <p className="innings-heading">Second Innings</p>
          <p className="innings-text">{secondInnings}</p>
          <p className="innings-heading">Man Of The Match</p>
          <p className="innings-text">{manOfTheMatch}</p>
          <p className="innings-heading">Umpires</p>
          <p className="innings-text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
