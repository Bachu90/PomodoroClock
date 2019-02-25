import React from 'react';

const Session = props => {
    return (
        <div className="session-panel">
            <h3 id="session-label">Session Length</h3>
            <span id="session-decrement" onClick={() => props.changeSetting('session', 'minus')}><i class="fas fa-minus"></i></span>
            <span id="session-length">{props.session / 60}</span>
            <span id="session-increment" onClick={() => props.changeSetting('session', 'plus')}><i class="fas fa-plus"></i></span>
        </div>
    );
}

export default Session;