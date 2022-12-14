import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import './App.css';


//instead of functional component we are using the class method to use the constructor to pass state to the children component.
class App extends Component {


    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ""
        }
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(respose => {
            return respose.json();
        }).then(user => {
            this.setState({ robots: user })
        });

    };

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())

        })

        return !robots.length ?
            <h1>Loading...</h1> :

            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>



    }

};

export default App;