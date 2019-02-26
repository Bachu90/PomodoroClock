import React, { Component } from 'react';
import Clock from './Clock';
import Settings from './Settings';
import Alarm from './beep.mp3';

class App extends Component {

  state = {
    timeleft: 0,
    current: 'session',
    running: false,
    session: 1500,
    break: 300
  }

  counter = null;

  changeSetting = (property, direction) => {
    if (!this.state.running) {
      if (direction === 'plus' && this.state[property] < 3600) {
        this.setState(prevState => ({
          [property]: prevState[property] + 60
        }))
      } else if (direction === 'minus' && this.state[property] > 60) {
        this.setState(prevState => ({
          [property]: prevState[property] - 60
        }))
      }
    }
  }

  count = () => {
    this.counter = setInterval(() => {
      if (this.state.timeleft > 0) {
        this.setState(prevState => ({
          timeleft: prevState.timeleft - 1
        }))
      } else {
        clearInterval(this.counter);
        const current = this.state.current === 'session' ? 'break' : 'session';
        this.setState({
          timeleft: this.state[current],
          current
        })
        document.getElementById('beep').play()
        this.count()
      }
    }, 1000);

  }

  startCount = () => {
    if (!this.state.running) {
      if (!(this.state.timeleft > 0)) {
        this.setState({
          timeleft: this.state[this.state.current],
        })
      }
      this.count()

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
    document.getElementById('beep').pause();
    document.getElementById('beep').load();
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <Clock running={this.state.running} current={this.state.current} time={this.state.timeleft} startCount={this.startCount} pauseCount={this.pauseCount} reset={this.reset} />
        <Settings changeSetting={this.changeSetting} session={this.state.session} break={this.state.break} />
        <audio src={Alarm} id="beep"></audio>
      </div>
    );
  }
}

export default App;
