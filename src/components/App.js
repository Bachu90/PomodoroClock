import React, { Component } from 'react';
import Clock from './Clock';
import Settings from './Settings';
import Alarm from './alarm.mp3';

class App extends Component {

  state = {
    timeleft: 0,
    current: 'session',
    running: false,
    session: 60,
    break: 60
  }

  counter = null;

  changeSetting = (property, direction) => {
    if (!this.state.running) {
      if (direction === 'plus' && this.state[property] < 3600) {
        this.setState(prevState => ({
          [property]: prevState[property] + 60
        }))
      } else if (direction === 'minus' && this.state[property] > 0) {
        this.setState(prevState => ({
          [property]: prevState[property] - 60
        }))
      }
    }
  }

  startCount = () => {
    if (!this.state.running) {
      if (!(this.state.timeleft > 0)) {
        this.setState({
          timeleft: this.state[this.state.current],
        })
      }

      this.counter = setInterval(() => {
        if (this.state.timeleft > 0) {
          this.setState(prevState => ({
            timeleft: prevState.timeleft - 1
          }))
        } else {
          const current = this.state.current === 'session' ? 'break' : 'session';
          this.setState({
            timeleft: this.state[current],
            current
          })
          document.getElementById('alarm').play()
        }
      }, 1000);

      this.setState({
        running: true
      })
    }
  }

  pauseCount = () => {
    if (this.state.running) {
      clearInterval(this.counter);
      this.setState({
        running: false
      })
    }
  }

  reset = () => {
    if (this.counter) {
      clearInterval(this.counter);
    }
    this.setState({
      timeleft: 0,
      current: 'session',
      running: false,
      session: 1500,
      break: 300
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <Clock current={this.state.current} time={this.state.timeleft} startCount={this.startCount} pauseCount={this.pauseCount} reset={this.reset} />
        <Settings changeSetting={this.changeSetting} session={this.state.session} break={this.state.break} />
        <audio src={Alarm} id="alarm"></audio>
      </div>
    );
  }
}

export default App;
