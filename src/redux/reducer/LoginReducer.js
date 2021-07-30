import LocalStorage from "../../utils/localstorage/LocalStorage";

const initialState ={
    userInfo: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'LOGIN':
            var _state = {
                ...state,
                ...action.obj
            }
            action.isSaveLocal && LocalStorage.setItem('USER_INFO', _state.userInfo)
            break;
    
        default:
            return state;
    }
}