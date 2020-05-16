import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button} from 'react-bootstrap';

const SAMPLE = [
    {
        id:1,
        question: 'A named space in memory',
        answer: 'Variable'
    },
    {
        id:2,
        question: 'Template for an object that consists of member variables, constructor, methods',
        answer: 'Class'
    }
]

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
                    <div className="col-sm text-center">
                        <Button variant="primary" className="mr-2 fc-btn">NEXT</Button>
                    </div>
                </div>
            </div>            
        );
    }
}

class MainCard extends React.Component {
    state = {
        flashcards : SAMPLE
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-5">
                    <div className="main-card">
                        <div className="content-main">{this.state.flashcards[0].question}</div>
                    </div>
                </div>
            </div>
        );
    }
}

class Categories extends React.Component {
    state = {
        values: ['C#','SQL','HTML','CSS','JavaScript']
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm text-center">
                    <CategoryList categories = {this.state.values}/>
                </div>
            </div>
        );
    }
}

class CategoryList extends React.Component {
    render() {
        return (
            this.props.categories.map(cat => {
                return <Category name = {cat}/>
            })
        );
    }
}

class Category extends React.Component {
    render() {
        return (
            <div className="row fc-cards">
                <div className="col-sm text-center">
                    <div className="fc-card">{this.props.name}</div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
