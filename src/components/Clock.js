import React from 'react';

const Clock = props => {
    return (
        <div className="timer-container">
            <h2 id="timer-label" className="timer">{props.current}</h2>
            <p className="timer" id="time-left">{(props.time / 60) < 10 ? "0" + Math.floor(props.time / 60) : Math.floor(props.time / 60)}:{(props.time % 60) < 10 ? "0" + (props.time % 60) : (props.time % 60)}</p>
            <div className="panel">
                <i class={`fas ${props.running ? 'fa-pause' : 'fa-play'}`} id="start_stop" onClick={() => {
                    if (props.running) {
                        props.pauseCount()
                    } else {
                        props.startCount()
                    }
                }}></i>
                <i class="fas fa-sync-alt" id="reset" onClick={props.reset}></i>
            </div>
        </div>
    );
}

export default Clock;