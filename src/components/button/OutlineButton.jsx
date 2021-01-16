import React from 'react';

import './OutlineButton.scss';

const OutlineButton = (props) => {
    return (<button onClick={props.handleEventButton}>{props.children}</button>);
};

export default OutlineButton;
