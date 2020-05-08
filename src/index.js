import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <Categories />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-8">

                    </div>
                </div>
                <Button variant="primary" className="mr-2">Bootstrap!</Button>
            </div>
            
        );
    }
}

class Categories extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm">
                <Category />
            </div>
        </div>
        );

    }
}

class Category extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <div className="fc-card">C#</div>
                    <div className="fc-card">SQL</div>
                    <div className="fc-card">HTML</div>
                    <div className="fc-card">CSS</div>
                    <div className="fc-card">JavaScript</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
