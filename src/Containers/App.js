import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/scroll';
import {robots} from '../Robots';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
// For Fetching Api
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({robots: users}))
    // }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (this.state.robots.length === 0){
            return <h1 className ="tc pa7"> loading...</h1>
        }

        else{
            return(
                <div className ="tc">
                    <h1 className = 'f2'>robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <CardList  robots ={filteredRobots} />
                    </Scroll>
                </div>
            );
            
        }
        

    }
    
}

export default App;