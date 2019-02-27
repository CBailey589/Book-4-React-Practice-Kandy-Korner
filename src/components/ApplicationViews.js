import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"
import SearchResults from "./SearchResults"


class ApplicationViews extends Component {

    state = {
        TacoStores: [],
        TacoEmployees: [],
        TacoCandyTypes: [],
        TacoCandies: [],
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/storeArray")
            .then(r => r.json())
            .then(parsedStores => newState.TacoStores = parsedStores)
            .then(() => fetch("http://localhost:5002/employeeArray")
                .then(r => r.json()))
            .then(parsedEmployees => newState.TacoEmployees = parsedEmployees)
            .then(() => fetch("http://localhost:5002/candyTypeArray")
                .then(r => r.json()))
            .then(parsedCandyTypes => newState.TacoCandyTypes = parsedCandyTypes)
            .then(() => fetch("http://localhost:5002/candyArray")
                .then(r => r.json()))
            .then(parsedCandy => newState.TacoCandies = parsedCandy)
            .then(() => this.setState(newState))

    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList TacoStores={this.state.TacoStores} />
                }} />
                <Route exact path="/employees" render={() => {
                    return <EmployeeList TacoEmployees={this.state.TacoEmployees} />
                }} />
                <Route exact path="/candies" render={() => {
                    return <CandyList TacoCandyTypes={this.state.TacoCandyTypes}
                        TacoCandies={this.state.TacoCandies} />
                }} />
                <Route exact path="/search" render={() => {
                    return <SearchResults TacoStores={this.props.FilteredStores}
                        TacoEmployees={this.props.FilteredEmployees}
                        TacoCandyTypes={this.props.FilteredCandies}
                        TacoCandies={this.state.TacoCandies}
                    />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews