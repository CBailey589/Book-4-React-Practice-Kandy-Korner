import APIManager from "../utilities/APIManager"

const CandyManager = Object.create(APIManager, {
    array: {
        value: "candyArray"
    }
})

export default CandyManager