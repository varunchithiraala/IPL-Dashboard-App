// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplTeamData} = props
  const {id, name, teamImageUrl} = iplTeamData

  return (
    <Link to={`/team-matches/${id}`} class="team-matches">
      <li className="team-card-container">
        <img src={teamImageUrl} className="team-card-logo-image" alt={name} />
        <div className="team-card-name-container">
          <p className="team-card-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
