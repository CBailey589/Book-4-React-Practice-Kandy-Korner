import APIManager from "../utilities/APIManager"

const CandyTypeManager = Object.create(APIManager, {
    array: {
        value: "candyTypeArray"
    }
})

export default CandyTypeManager