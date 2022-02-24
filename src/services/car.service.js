
import { storageService } from './storage.service.js'

const STORAGE_KEY = 'car'

export const carService = {
    query,
    getById,
    save,
    remove,
}

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
}
function getById(carId) {
    return storageService.get(STORAGE_KEY, carId)
}
function remove(carId) {
    return storageService.remove(STORAGE_KEY, carId)

}
function save(car) {
    if (car._id) {
        return storageService.put(STORAGE_KEY, car)

    } else {
        return storageService.post(STORAGE_KEY, car)
    }
}


