import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Button variant="primary" className="mr-2">Bootstrap!</Button>
            </div>
            
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
