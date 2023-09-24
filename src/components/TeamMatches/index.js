// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    iplTeamBanner: '',
    latestMatches: [],
    recentMatchesDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await teamResponse.json()
    const updatedTeamData = {
      teamBannerUrl: teamData.team_banner_url,
      latestMatchDetails: teamData.latest_match_details,
      recentMatches: teamData.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedTeamData
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches.map(eachRecentMatch => ({
      umpires: eachRecentMatch.umpires,
      result: eachRecentMatch.result,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      id: eachRecentMatch.id,
      date: eachRecentMatch.date,
      venue: eachRecentMatch.venue,
      competingTeam: eachRecentMatch.competing_team,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      firstInnings: eachRecentMatch.first_innings,
      secondInnings: eachRecentMatch.second_innings,
      matchStatus: eachRecentMatch.match_status,
    }))

    this.setState({
      iplTeamBanner: teamBannerUrl,
      latestMatches: updatedLatestMatchDetails,
      recentMatchesDetails: updatedRecentMatches,
      isLoading: false,
    })
  }

  getTeamMatchDetails = () => {
    const {iplTeamBanner, latestMatches, recentMatchesDetails} = this.state
    return (
      <div>
        <div className="ipl-team-banner-container">
          <img
            src={iplTeamBanner}
            className="ipl-team-banner"
            alt="team banner"
          />
        </div>
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatches} />
        <ul className="recent-matches-list">
          {recentMatchesDetails.map(eachRecentMatch => (
            <MatchCard
              key={eachRecentMatch.id}
              recentMatchDetails={eachRecentMatch}
            />
          ))}
        </ul>
      </div>
    )
  }

  getLoaderContainer = () => (
    <div data-testid="loader" className="loader-style">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {isLoading} = this.state
    const containerBgStyle = isLoading
      ? `${id}-bg-container loader-center`
      : `${id}-bg-container`

    return (
      <div className={containerBgStyle}>
        {isLoading ? this.getLoaderContainer() : this.getTeamMatchDetails()}
      </div>
    )
  }
}

export default TeamMatches
