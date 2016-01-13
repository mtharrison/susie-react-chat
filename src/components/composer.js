import Axios from 'axios';
import React from 'react';

const Composer = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            message: '',
            usernameLocked: false
        };
    },
    update: function () {
        this.setState({
            username: this.refs.username.value,
            message: this.refs.message.value
        });
    },
    sendMessage: function () {
        Axios.post('/new-message', {
            username: this.state.username,
            message: this.state.message
        })
        .then(() => {
            this.setState({
                usernameLocked: true,
                message: ''
            });
        })
        .catch(response => {
            console.log(response);
        });
    },
    render: function () {
        return (
            <div className="composer">
                <div className="username-input">
                    <input disabled={this.state.usernameLocked} ref="username" onChange={this.update} type="text" value={this.state.username} placeholder="enter username…"/>
                </div>
                <div className="message-input">
                    <input ref="message" onChange={this.update} type="text" value={this.state.message} placeholder="enter message…"/>
                </div>
                <div className="send-button">
                    <button onClick={this.sendMessage}>SEND</button>
                </div>
            </div>
        );
    }
});

export default Composer;
