const initialState = {
    cars: [],
}
export function carReducer(state = initialState, action) {
    var newState = state
    var cars
    switch (action.type) {
        case 'SET_CARS':
            newState = { ...state, cars: action.cars }
            break;
        case 'REMOVE_CAR':
            const lastRemovedCar = state.cars.find(car => car._id === action.carId)
            cars = state.cars.filter(car => car._id !== action.carId)
            newState = { ...state, cars, lastRemovedCar }
            break;
        case 'ADD_CAR':
            newState = { ...state, cars: [...state.cars, action.car] }
            break;
        case 'UPDATE_CAR':
            cars = state.cars.map(car => (car._id === action.car._id) ? action.car : car)
            newState = { ...state, cars }
            break;
        default:
    }
    return newState
}
