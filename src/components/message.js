import React from 'react';

const Message = React.createClass({
    render: function () {
        return (
            <div className="message">
                <p className="timestamp">{Date.now()}</p>
                <p className="username">{this.props.username}</p>
                <p className="message-content">{this.props.message}</p>
            </div>
        );
    }
});

export default Message;
