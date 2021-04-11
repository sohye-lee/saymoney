import React from 'react';

const Error = (props) => {
    return (
        <div className="error__container">
            {props.children}
        </div>
    )
};

export default Error;
