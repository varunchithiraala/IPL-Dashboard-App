// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    iplTeamsData: [],
  }

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const iplTeamsDataResponse = await fetch('https://apis.ccbp.in/ipl')
    const iplTeams = await iplTeamsDataResponse.json()
    const {teams} = iplTeams
    const updatedIplTeams = teams.map(eachIplTeam => ({
      id: eachIplTeam.id,
      name: eachIplTeam.name,
      teamImageUrl: eachIplTeam.team_image_url,
    }))
    this.setState({
      isLoading: false,
      iplTeamsData: updatedIplTeams,
    })
  }

  getIplLogoAndTeamCards = () => {
    const {iplTeamsData} = this.state
    return (
      <div>
        <div className="ipl-logo-and-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo-image"
            alt="ipl logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        <div className="ipl-team-cards-container">
          <ul className="ipl-team-cards">
            {iplTeamsData.map(eachIplTeamData => (
              <TeamCard
                key={eachIplTeamData.id}
                iplTeamData={eachIplTeamData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  getLoaderContainer = () => (
    <div data-testid="loader" className="loader-style">
      <Loader type="Oval" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const bgContainerStyle = isLoading
      ? 'ipl-dashboard-app-container loader-container'
      : 'ipl-dashboard-app-container'

    return (
      <div className={bgContainerStyle}>
        {isLoading ? this.getLoaderContainer() : this.getIplLogoAndTeamCards()}
      </div>
    )
  }
}

export default Home
