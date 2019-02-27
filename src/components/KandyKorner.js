import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import StoreList from "./StoreList"
import CandyList from "./CandyList"

class KandyKorner extends Component {
    storeArray = [
        { id: 1, name: "Kandy Korner North", address: "1 North Street, Nashville, TN, 37215" },
        { id: 2, name: "Kandy Korner South", address: "4 South Avenue, Nashville, TN, 37203" }
    ]

    employeeArray = [
        { id: 1, name: "Connor Bailey", store: 2 },
        { id: 2, name: "Brian Neal", store: 2 },
        { id: 3, name: "Dominic Kantrude", store: 1 },
        { id: 4, name: "Sam Cronin", store: 1 },
        { id: 5, name: "Abbey Brown", store: 2 },
        { id: 6, name: "Panya Farnette", store: 1 },
        { id: 7, name: "Trevan Young", store: 1 },
        { id: 8, name: "Janet Woods", store: 2 }
    ]

    candyTypeArray = [
        { id: 1, type: "Lollipops and Suckers" },
        { id: 2, type: "Jelly Beans" },
        { id: 3, type: "Rock Candy and Sugra Swizzle Sticks" },
        { id: 4, type: "Gummy and Chewy Candy" },
        { id: 5, type: "Big Candy/Giant Candy" },
        { id: 6, type: "Bite Size Candy" }
    ]

    candyArray = [
        { id: 1, candyType: 1, name: "Charms Sweet Pops" },
        { id: 2, candyType: 1, name: "Charms Blow Pops" },
        { id: 3, candyType: 1, name: "Ring Pops" },
        { id: 4, candyType: 1, name: "Tootsie Pops" },
        { id: 5, candyType: 2, name: "Jolly Rancher Jelly Beans" },
        { id: 6, candyType: 2, name: "Welch's Assorted Jelly Beans" },
        { id: 7, candyType: 2, name: "Jelly Belly Jelly Beans" },
        { id: 8, candyType: 3, name: "Rock Candy Crystal Sticks" },
        { id: 9, candyType: 3, name: "Rainbow Confetti Rock Candy" },
        { id: 10, candyType: 3, name: "Rock Candy Chewy Nuggets" },
        { id: 11, candyType: 4, name: "Jumbo Gummy Bears 3kg Bag" },
        { id: 12, candyType: 4, name: "Papa Bears Jumbo Gummy Bears 5lb Bag" },
        { id: 13, candyType: 4, name: "Harribo Gold Bears 5lb Bag" },
        { id: 14, candyType: 4, name: "Cubs 12-Flavors Baby Gummy Bears 5lb Bag" },
        { id: 15, candyType: 5, name: "Astro Worlds Largest Gummy Bear Gift Box" },
        { id: 16, candyType: 5, name: "Giant Blow Pops 6-Piece" },
        { id: 17, candyType: 5, name: "Life Savers 5 Flavor Big Bank" },
        { id: 18, candyType: 5, name: "Enormous 4 Inch Jawbreaker Candy Ball" },
        { id: 19, candyType: 5, name: "Whirly Popl 3lb Giant Rainbow Swirl Sucker" },
        { id: 20, candyType: 5, name: "Tesla's Tremendously Tall 3oz Twist Pops" },
        { id: 21, candyType: 6, name: "Reese's Mini Sticks Candy Bars" },
        { id: 22, candyType: 6, name: "Milky Way Simply Caramel Bites" },
        { id: 23, candyType: 6, name: "3 Musketeers Bites" },
        { id: 24, candyType: 6, name: "York Peppermint Pattie Minis" },
        { id: 25, candyType: 6, name: "Kit Kat Minis" },
        { id: 26, candyType: 6, name: "3 Musketeers Mint Bites" },
        { id: 27, candyType: 6, name: "Milky Way Bites" },
        { id: 28, candyType: 6, name: "Twix Bites" }
    ]

    state = {
        TacoStores: this.storeArray,
        TacoEmployees: this.employeeArray,
        TacoCandyTypes: this.candyTypeArray,
        TacoCandies: this.candyArray
    }

    render() {
        return (
            <React.Fragment>
                <StoreList TacoStores={this.state.TacoStores} />
                <EmployeeList TacoEmployees={this.state.TacoEmployees} />
                <CandyList TacoCandyTypes={this.state.TacoCandyTypes}
                    TacoCandies={this.state.TacoCandies} />
            </React.Fragment>
        );
    }
}

export default KandyKorner