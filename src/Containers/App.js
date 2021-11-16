import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/scroll';
import {robots} from '../Robots';
import { setSearchField } from '../actions';


const mapStateToProps = (state) =>{
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots
        }
    }

    render(){
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (this.state.robots.length === 0){
            return <h1 className ="tc pa7"> loading...</h1>
        }

        else{
            return(
                <div className ="tc">
                    <h1 className = 'f2'>robofriends</h1>
                    <SearchBox searchChange = {onSearchChange} />
                    <Scroll>
                        <CardList  robots ={filteredRobots} />
                    </Scroll>
                </div>
            );
            
        }
        

    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);