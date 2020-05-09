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
                        <MainCard />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="">

                    </div>
                </div> 
                <Button variant="primary" className="mr-2">Bootstrap!</Button>
            </div>
            
        );
    }
}

class MainCard extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

class Categories extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm text-center">
                <Category value="C#"/>
                <Category value="SQL"/>
                <Category value="HTML"/>
                <Category value="CSS"/>
                <Category value="JavaScript"/>
            </div>
        </div>
        );
    }
}

class Category extends React.Component {
    render() {
        return (
            <div className="row fc-cards">
                <div className="col-sm text-center">
                    <div className="fc-card">{this.props.value}</div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
