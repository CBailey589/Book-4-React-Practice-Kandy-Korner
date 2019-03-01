import React, { Component } from 'react'
import SingleCandy from "./SingleCandy"


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
                <h3 key={`candyList`}>Kandy Korner has all these great candies:</h3>
                {
                    this.props.TacoCandies.map(cObj =>
                        <SingleCandy key={`SingleCandy--${cObj.id}`}
                        TacoCandyTypes={this.props.TacoCandyTypes}
                        candy={cObj}
                        discontinueCandy = {this.props.discontinueCandy} />
                    )
                }
            </section>
        )
    }
}

export default CandyList