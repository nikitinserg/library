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
        // this.setState(
        //     this.state = {
        //         'authors': authors
        //     }
        // )

        axios
            .get('http://127.0.0.1:8000/api/authors/')
            .then(response => {
                const authors = response.data
                this.setState({'authors': authors})
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <AuthorList authors={this.state.authors}/>
        )
    }
}

export default App;
