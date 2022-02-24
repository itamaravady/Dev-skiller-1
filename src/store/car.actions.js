import { carService } from "../services/car.service.js";
import { userService } from "../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadCars() {
    return async (dispatch) => {
        try {
            const cars = await carService.query();
            dispatch({
                type: 'SET_CARS',
                cars
            })
        }
        catch (err) {
            showErrorMsg('Cannot load cars')
            console.log('Cannot load cars', err)
        };

        // carService.subscribe((cars) => {
        //     console.log('Got notified');
        //     dispatch({
        //         type: 'SET_CARS',
        //         cars
        //     })
        // })
    }
}

export function onRemoveCar(carId) {
    return async (dispatch) => {
        try {
            await carService.remove(carId);
            console.log('Deleted Succesfully!');
            dispatch({
                type: 'REMOVE_CAR',
                carId
            })
            showSuccessMsg('Car removed')
        }
        catch (err) {
            showErrorMsg('Cannot remove car')
            console.log('Cannot remove car', err)
        }
    }
}
export function onAddCar(car) {
    return async (dispatch) => {
        try {
            const savedCar = await carService.save(car);
            console.log('Added Car', savedCar);
            dispatch({
                type: 'ADD_CAR',
                car: savedCar
            })
            showSuccessMsg('Car added')
        }
        catch (err) {
            showErrorMsg('Cannot add car')
            console.log('Cannot add car', err)
        }
    }
}
export function onEditCar(carToSave) {
    return async (dispatch) => {
        try {
            const savedCar = await carService.save(carToSave);
            console.log('Updated Car:', savedCar);
            dispatch({
                type: 'UPDATE_CAR',
                car: savedCar
            })
            showSuccessMsg('Car updated')
        }
        catch (err) {
            showErrorMsg('Cannot update car')
            console.log('Cannot save car', err)
        }
    }
}