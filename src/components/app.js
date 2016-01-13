import React from 'react';

import Composer from './composer';
import Conversation from './conversation';

const App = React.createClass({
    render: function () {

        return (
            <div className="app-container">
                <Conversation/>
                <Composer/>
            </div>
        )
    }
});

export default App;
