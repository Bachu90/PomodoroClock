import React from 'react';

const Break = props => {
    return (
        <div className="break-panel">
            <h3 id="break-label">Break Length</h3>
            <span id="break-decrement" onClick={() => props.changeSetting('break', 'minus')}><i class="fas fa-minus"></i></span>
            <span id="break-length">{props.break / 60}</span>
            <span id="break-increment" onClick={() => props.changeSetting('break', 'plus')}><i class="fas fa-plus"></i></span>
        </div>
    );
}

export default Break;