import { utilService } from './util.service'
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType) {
    return JSON.parse(localStorage.getItem(entityType)) || []
}

function get(entityType, entityId) {
    const entities = query(entityType)
    return entities.find(entity => entity._id === entityId)
}
function post(entityType, newEntity) {
    newEntity._id = utilService.makeId();
    const entities = query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

function put(entityType, updatedEntity) {
    const entities = query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
}
function remove(entityType, entityId) {
    const entities = query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}