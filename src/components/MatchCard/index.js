// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = recentMatchDetails
  const matchStatusStyle = matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="competing-team-result">{result}</p>
      <p className={`match-status ${matchStatusStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
