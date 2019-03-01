import APIManager from "../utilities/APIManager"

const CandyManager = {
    GET(id) {
        return APIManager.GET("candyArray", id)
    },
    GETALL() {
        return APIManager.GETALL("candyArray")
    },
    DELETE(id) {
        return APIManager.DELETE("candyArray", id)
    }
}

export default CandyManager