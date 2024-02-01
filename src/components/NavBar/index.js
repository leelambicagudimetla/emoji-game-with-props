// Write your code here.

import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  /* gets top score and current score from EmojiGame page */
  /* isGameEnd is used decide whether display navbar score card or not  */
  renderScores = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    const sco = currentScore !== 0 ? currentScore : '0'
    const top = topScore !== 0 ? topScore : '0'
    if (isGameEnd) {
      return null
    }
    return (
      <div className="Score-container">
        <p className="score-label">Score : {sco}</p>
        <p className="score-label">Total Score : {top}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default NavBar
