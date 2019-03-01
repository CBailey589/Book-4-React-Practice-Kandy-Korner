import APIManager from "../utilities/APIManager"

const EmployeeManager = Object.create(APIManager, {
    array: {
        value: "employeeArray"
    }
})

export default EmployeeManager