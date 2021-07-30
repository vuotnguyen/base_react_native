export function login(obj, isSaveLocal) {
    return {
        type: 'LOGIN',
        obj,
        isSaveLocal
    }
}