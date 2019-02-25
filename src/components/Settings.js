import React from 'react';
import Session from './Session';
import Break from './Break';

const Settings = props => {
    return (
        <div className="settings">
            <Session changeSetting={props.changeSetting} session={props.session} />
            <Break changeSetting={props.changeSetting} break={props.break} />
        </div>
    );
}

export default Settings;