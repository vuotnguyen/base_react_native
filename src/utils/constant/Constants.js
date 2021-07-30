import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

export default {
    HEADER : height * 0.2,
    HOST: {
        api: 'http://ws.vtrust.vn/',
    },
    WINDOW: {
        width: width,
        height: height,
    },
    IMAGE : {
        app_icon: require(''),
        background: require('')
    } 
}