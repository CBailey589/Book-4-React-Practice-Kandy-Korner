import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from "./locations/StoreList"
import EmployeeList from "./employees/EmployeeList"
import CandyList from "./candies/CandyList"
import SearchResults from "./nav/SearchResults"
import CandyManager from '../modules/resourceManagers/CandyManager';
import StoreManager from '../modules/resourceManagers/StoreManager';
import EmployeeManager from '../modules/resourceManagers/EmployeeManager';
import CandyTypeManager from '../modules/resourceManagers/CandyTypeManager';


class ApplicationViews extends Component {

    state = {
        TacoStores: [],
        TacoEmployees: [],
        TacoCandyTypes: [],
        TacoCandies: [],
    }

    discontinueCandy = (id) => {
        fetch(`http://localhost:5002/candyArray/${id}`, {
            "method": "DELETE"
        })
            .then(() => fetch("http://localhost:5002/candyArray"))
            .then(r => r.json())
            .then(candies => this.setState({ TacoCandies: candies }))
    }

    componentDidMount() {
        const newState = {}

        let prom1 = Promise.resolve(StoreManager.GETALL().then(json => newState.TacoStores = json))
        let prom2 = Promise.resolve(EmployeeManager.GETALL().then(json => newState.TacoEmployees = json))
        let prom3 = Promise.resolve(CandyTypeManager.GETALL().then(json => newState.TacoCandyTypes = json))
        let prom4 = Promise.resolve(CandyManager.GETALL().then(json => newState.TacoCandies = json))
        Promise.all([prom1, prom2, prom3, prom4])
            .then(() => this.setState(newState))

    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList
                        TacoStores={this.state.TacoStores} />
                }} />
                <Route exact path="/employees" render={() => {
                    return <EmployeeList
                        TacoEmployees={this.state.TacoEmployees} />
                }} />
                <Route exact path="/candies" render={() => {
                    return <CandyList
                        TacoCandyTypes={this.state.TacoCandyTypes}
                        TacoCandies={this.state.TacoCandies}
                        discontinueCandy={this.discontinueCandy} />
                }} />
                <Route exact path="/search" render={() => {
                    return <SearchResults />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews