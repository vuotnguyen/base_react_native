import store from "./Store";

export function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export let dispatch = (action) => {
    store.dispatch(action);
}