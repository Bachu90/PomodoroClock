import React from 'react';

const Clock = props => {
    return (
        <div className="timer-container">
            <h2 id="timer-label" className="timer">{props.current}</h2>
            <p className="timer" id="time-left">{Math.floor((props.time / 60) < 10 ? "0" + (props.time / 60) : (props.time / 60))}:{(props.time % 60) < 10 ? "0" + (props.time % 60) : (props.time % 60)}</p>
            <div className="panel">
                <i class="fas fa-play" onClick={props.startCount}></i>
                <i class="fas fa-pause" onClick={props.pauseCount}></i>
                <i class="fas fa-sync-alt" onClick={props.reset}></i>
            </div>
        </div>
    );
}

export default Clock;