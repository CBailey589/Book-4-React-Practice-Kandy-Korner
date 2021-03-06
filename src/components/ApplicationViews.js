import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import StoreList from "./locations/StoreList"
import StoreDetails from "./locations/StoreDetails"
import EmployeeList from "./employees/EmployeeList"
import EmployeeDetails from "./employees/EmployeeDetails"
import EmployeeForm from "./employees/EmployeeForm"
import EmployeeEditForm from "./employees/EmployeeEditForm"
import CandyList from "./candies/CandyList"
import SearchResults from "./nav/SearchResults"
import CandyManager from '../modules/resourceManagers/CandyManager';
import StoreManager from '../modules/resourceManagers/StoreManager';
import EmployeeManager from '../modules/resourceManagers/EmployeeManager';
import CandyTypeManager from '../modules/resourceManagers/CandyTypeManager';
import Login from "./authentication/Login"


class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        TacoStores: [],
        TacoEmployees: [],
        TacoCandyTypes: [],
        TacoCandies: [],
    }

    discontinueCandy = (id) => {
        CandyManager.DELETE(id)
            .then(() => CandyManager.GETALL())
            .then(json => this.setState({ TacoCandies: json }))
    }

    fireEmployee = (id) => {
        EmployeeManager.DELETE(id)
            .then(() => EmployeeManager.GETALL())
            .then(json => this.setState({ TacoEmployees: json }))
    }

    hireEmployee = (obj) => {
        return EmployeeManager.POST(obj)
            .then(() => EmployeeManager.GETALL())
            .then(json => this.setState({ TacoEmployees: json }))
    }

    updateEmployee = (editedObj) => {
        return EmployeeManager.PUT(editedObj)
            .then(() => EmployeeManager.GETALL())
            .then(json => this.setState({ TacoEmployees: json }))
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
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    return <StoreList
                        {...props}
                        TacoStores={this.state.TacoStores} />
                }} />
                <Route exact path="/stores/:storeId(\d+)" render={(props) => {
                    return <StoreDetails
                        {...props}
                        TacoStores={this.state.TacoStores}
                        TacoEmployees={this.state.TacoEmployees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList
                            {...props}
                            TacoEmployees={this.state.TacoEmployees}
                            fireEmployee={this.fireEmployee} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetails
                        {...props}
                        TacoEmployees={this.state.TacoEmployees}
                        fireEmployee={this.fireEmployee}
                        TacoStores={this.state.TacoStores} />
                }} />
                <Route exact path="/employees/new" render={(props) => {
                    return <EmployeeForm
                        {...props}
                        hireEmployee={this.hireEmployee}
                        TacoStores={this.state.TacoStores} />
                }} />
                <Route
                    path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm
                            {...props}
                            TacoStores={this.state.TacoStores}
                            updateEmployee={this.updateEmployee} />
                    }}
                />
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