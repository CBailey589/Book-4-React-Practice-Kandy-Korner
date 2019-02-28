import React, { Component } from 'react'

class SingleCandy extends Component {
    render() {
        let candy = this.props.candy
        let type = this.props.TacoCandyTypes.find(tObj => tObj.id === candy.candyType).type
        return (
            <div key={`candy-${candy.id}`} className="singleCandy">
                <h4 key={`candyName--${candy.id}`}>{candy.name}</h4>
                <div key={`candyType--${candy.id}`}>Category: {type}</div>
                <button onClick={() => {
                    this.props.discontinueCandy(candy.id)
                }}
                >Discontinue</button>
            </div>
        )
    }
}

export default SingleCandy