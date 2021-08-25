import logo from './logo.svg';
import './App.css';
import React from "react";
import AuthorList from "./components/Authors";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': []
        }
    }

    componentDidMount() {
        const authors = [
            {
                'first_name': "Ivan",
                'last_name': "Ivanov",
                'birthday_year': 1990
            },
            {
                'first_name': "Petr",
                'last_name': "Petrov",
                'birthday_year': 1991
            }
        ]
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
