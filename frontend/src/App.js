import logo from './logo.svg';
import './App.css';
import React from "react";
import AuthorList from "./components/Authors";
import axios from "axios";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/authors/')
            .then(response => {...})
            .catch(error => console.log(error))

        this.setState(
            this.state = {
                'authors': authors
            }
        )
    }

    render() {
        return (
            <AuthorList authors={this.state.authors}/>
        )
    }
}

export default App;
