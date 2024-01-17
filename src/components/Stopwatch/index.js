// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="title">Stopwatch</h1>
          <div className="container">
            <div className="timer-watch-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-pic"
              />
              <p className="stop-watch-title">Timer</p>
            </div>
            <h1 className="time-counting">{time}</h1>
            <div className="buttons-container">
              <button
                className="start-button button"
                type="button"
                disabled={isTimerRunning}
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
