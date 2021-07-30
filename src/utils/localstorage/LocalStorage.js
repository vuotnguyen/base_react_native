
import AsyncStorage from 'react-native';

const HISTORY = 'HISTORY'
const DEBUG = 'DEBUG'

const KEYS_LOCALSTORAGE = [
    {
        name: 'DEBUG',
        value: DEBUG,
        default: '{}'
    },
    {
        name: 'HISTORY',
        value: HISTORY,
        default: '[]'
    },
]
export {
    KEYS_LOCALSTORAGE,
    DEBUG,
    HISTORY
}

var LocalStorage = {
    getItems: async function (keys) {
        keys = keys || []
        try {
            var obj = {};
            for (let i = 0; i < keys.length; i++) {
                const e = keys[i];
                let item = await AsyncStorage.getItem(e.key);
                obj[e.key] = item == null ? e.default : item;
            }
            // return JSON.parse(item);
            return obj
        } catch (ex) {
            return _default;
        }
    },
    getItem: async function (key, _default) {
        try {
            let item = await AsyncStorage.getItem(key);
            // return JSON.parse(item);
            return item == null ? _default : item;
        } catch (ex) {
            return _default;
        }
    },
    setItem: async function (key, value) {
        // return await AsyncStorage.setItem(key, JSON.stringify(value));
        return await AsyncStorage.setItem(key, value);
    },
    removeItem: async function (key) {
        return await AsyncStorage.removeItem(key);
    },
    // getSaved: (callback)=>{
    //     return new Promise(async (resolve, reject) => {
    //         var datas = await LocalStorage.getItems([
    //             {
    //                 key: DEBUG,
    //                 default: '{}'
    //             },
    //             {
    //                 key: HISTORY,
    //                 default: '[]'
    //             },
    //         ]);
    //         (callback || resolve)({
    //             debug: JSON.parse(datas[DEBUG]),
    //             history: JSON.parse(datas[HISTORY]),
    //         })
    //     });
    // },
}

export default LocalStorage