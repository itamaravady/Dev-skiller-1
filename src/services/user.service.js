import { storageService } from './storage.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY = 'user'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getById,

}


function getById(userId) {
    const user = storageService.get(STORAGE_KEY, userId)
    return user;
}

function login(userCred) {
    const users = storageService.query(STORAGE_KEY)
    const user = users.find(user => user.username === userCred.username)
    if (user) return _saveLocalUser(user)
}
function signup(userCred) {
    const user = storageService.post(STORAGE_KEY, userCred)
}
function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

