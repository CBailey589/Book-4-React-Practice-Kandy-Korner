import APIManager from "../utilities/APIManager"

const CandyTypeManager = {
    GET(id) {
        return APIManager.GET("candyTypeArray", id)
    },
    GETALL() {
        return APIManager.GETALL("candyTypeArray")
    }
}

export default CandyTypeManager