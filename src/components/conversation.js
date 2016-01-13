import React from 'react';

import Message from './message';

const Conversation = React.createClass({
    getInitialState: function () {
        return { messages: [] };
    },
    componentDidMount: function () {

        var evtSource = new EventSource("/chat-feed");
        evtSource.addEventListener("message", e => {

            this.setState({
                messages: [...this.state.messages, JSON.parse(e.data)]
            });
        });
    },
    render: function () {
        return (
            <div className="conversation">
                {(this.state.messages || []).map((m,i) => {
                    return <Message key={i} username={m.username} message={m.message}/>;
                })}
            </div>
        );
    }
});

export default Conversation;
