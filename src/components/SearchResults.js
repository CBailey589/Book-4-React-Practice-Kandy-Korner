import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class SearchResults extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="matchingCandies">
                    <h3>These candies match your search:</h3>
                    {
                        this.props.location.SearchResults.FilteredCandies.map(candy =>
                            <div key={`matchingCandy--${candy.id}`}>
                                {candy.name}
                            </div>
                        )
                    }
                </section>
                <section className="matchingStores">
                    <h3>These stores match your search:</h3>
                    {
                        this.props.location.SearchResults.FilteredStores.map(store =>
                            <div key={`matchingStore--${store.id}`}>
                                {store.name}
                            </div>
                        )
                    }
                </section>
                <section className="matchingEmployees">
                    <h3>These employees match your search:</h3>
                    {
                        this.props.location.SearchResults.FilteredEmployees.map(employee =>
                            <div key={`matchingEmployee--${employee.id}`}>
                                {employee.name}
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default withRouter(SearchResults)