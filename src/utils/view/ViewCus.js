import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
    ActivityIndicator,
    TouchableOpacity, View,
    Text as TextRN, StyleSheet,
    Image as ImageRN, Alert as AlertRN,
    AppState,
    TextInput as TextInputRN,
    FlatList,
    Platform
} from 'react-native';
// import FastImage from 'react-native-fast-image'
// import ModalRN from 'react-native-modal'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import appColors from '../color/AppColor'
import { navigateBack } from '../../navigation/RootNavigation';
import { default as AntDesignRN } from 'react-native-vector-icons/AntDesign';
import { default as EvilIconsRN } from 'react-native-vector-icons/EvilIcons';
import { default as FontAwesomeRN } from 'react-native-vector-icons/FontAwesome';
import { default as FontAwesome5RN } from 'react-native-vector-icons/FontAwesome5';
import { default as IoniconsRN } from 'react-native-vector-icons/Ionicons';
import { default as MaterialCommunityIconsRN } from 'react-native-vector-icons/MaterialCommunityIcons';
import { default as MaterialIconsRN } from 'react-native-vector-icons/MaterialIcons';
import { default as IoniconsFont } from './../iconvector/Ionicons'
// import StylesCus from './StylesCus';
// import constants from '../constant/Constants';
// import Utils from './Utils';
import { useSelector } from 'react-redux';


//#region  ViewHorizontal
let Alert = {
    Confirm: (callback, cancelPress, mess, title, textButtonCancel, textButtonOK, textAskMe, askMePress) => {
        AlertRN.alert(
            title || 'Thông báo',
            mess || 'Bạn có muốn xóa?',
            (
                textAskMe != null ? [
                    {
                        text: textAskMe || 'Nhắc tôi sau',
                        onPress: () => {
                            if (askMePress) askMePress();
                        }
                    }
                ] :
                    []
            ).concat([
                {
                    text: textButtonCancel || 'Hủy',
                    onPress: () => {
                        if (cancelPress) cancelPress();
                    },
                    style: 'cancel',
                },
                {
                    text: textButtonOK || 'Đồng ý',
                    onPress: () => {
                        if (callback) callback();
                    }
                },
            ]),
            { cancelable: false },
        );
    },
    Alert: (mess, title, callback) => {
        AlertRN.alert(
            title || 'Thông báo',
            mess || 'Có lỗi xẩy ra, vui lòng thử lại.',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        if (callback) callback();
                    }
                },
            ],
            { cancelable: false }
        );
    }
}
//#endregion

//#region  ViewHorizontal
var ViewHorizontal = (props) => {
    props = props || {};
    return (
        <View
            {...props}
            style={[
                {
                    flexDirection: 'row'
                },
                props.style
            ]}
        >
            {props.children}
        </View>
    )
}
//#endregion

//#region  ViewHorizontalCenter
var ViewHorizontalCenter = (props) => {

    var { children, style, styleContainer } = props;
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                },
                styleContainer
            ]}
        >
            <View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    style
                ]}
            >
                {children}
            </View>
        </View>
    )
}
//#endregion

// const Loading = forwardRef((props, ref) => {
//     const [isShow, setIsShow] = useState(false);
//     const isActive = useSelector(state => state.debug.isActive)

//     const toggle = (flag) => {
//         flag = flag == null ? !isShow : flag;
//         setIsShow(flag);
//     }

//     useImperativeHandle(
//         ref,
//         () => ({
//             toggle
//         }),
//     )
//     return (
//         isShow &&
//         <View
//             style={{
//                 position: 'absolute',
//                 top: 0,
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'rgba(0,0,0,.7)'
//             }}>
//             <ActivityIndicator size='large' color={'#fff'} />
//             {
//                 isActive &&
//                 <Button
//                     onPress={() => toggle(false)}
//                 >
//                     {'Hiden'}
//                 </Button>
//             }
//         </View>
//     );
// });

const FontCustom = {
    'Arial': Platform.select({
        android: 'arial',
        ios: 'arial'
    }),
    Roboto_Black: Platform.select({
        android: 'Roboto-Black',
        ios: 'Roboto-Black'
    }),
    Roboto_BlackItalic: Platform.select({
        android: 'Roboto-BlackItalic',
        ios: 'Roboto-BlackItalic'
    }),
    Roboto_Bold: Platform.select({
        android: 'Roboto-Bold',
        ios: 'Roboto-Bold'
    }),
    Roboto_BoldItalic: Platform.select({
        android: 'Roboto-BoldItalic',
        ios: 'Roboto-BoldItalic'
    }),
    Roboto_Italic: Platform.select({
        android: 'Roboto-Italic',
        ios: 'Roboto-Italic'
    }),
    Roboto_Light: Platform.select({
        android: 'Roboto-Light',
        ios: 'Roboto-Light'
    }),
    Roboto_LightItalic: Platform.select({
        android: 'Roboto-LightItalic',
        ios: 'Roboto-LightItalic'
    }),
    Roboto_Medium: Platform.select({
        android: 'Roboto-Medium',
        ios: 'Roboto-Medium'
    }),
    Roboto_MediumItalic: Platform.select({
        android: 'Roboto-MediumItalic',
        ios: 'Roboto-MediumItalic'
    }),
    Roboto_Regular: Platform.select({
        android: 'Roboto-Regular',
        ios: ''
    }),
    Roboto_Thin: Platform.select({
        android: 'Roboto-Thin',
        ios: 'Roboto-Thin'
    }),
    Roboto_ThinItalic: Platform.select({
        android: 'Roboto-ThinItalic',
        ios: 'Roboto-ThinItalic'
    }),
    'ProximaNovaLg_Black': Platform.select({
        android: 'ProximaNovaLg_Black',
        ios: 'ProximaNova-Black'
    }),
    'ProximaNovaLg_BlackItalic': Platform.select({
        android: 'ProximaNovaLg_BlackItalic',
        ios: 'ProximaNova-BlackIt'
    }),
    'ProximaNovaLg_Bold_Italic': Platform.select({
        android: 'ProximaNovaLg_Bold_Italic',
        ios: 'ProximaNova-BoldIt'
    }),
    'ProximaNovaLg_Bold': Platform.select({
        android: 'ProximaNovaLg_Bold',
        ios: 'ProximaNova-Bold'
    }),
    'ProximaNovaLg_Light_Italic': Platform.select({
        android: 'ProximaNovaLg_Light_Italic',
        ios: 'ProximaNova-LightIt'
    }),
    'ProximaNovaLg_Light': Platform.select({
        android: 'ProximaNovaLg_Light',
        ios: 'ProximaNova-Light'
    }),
    'ProximaNovaLg_Regular_Italic': Platform.select({
        android: 'ProximaNovaLg_Regular_Italic',
        ios: 'ProximaNova-RegularIt'
    }),
    'ProximaNovaLg_Regular': Platform.select({
        android: 'ProximaNovaLg_Regular',
        ios: 'ProximaNova-Regular'
    }),
    'ProximaNovaLg_Semibold_Italic': Platform.select({
        android: 'ProximaNovaLg_Semibold_Italic',
        ios: 'ProximaNova-SemiboldIt'
    }),
    'ProximaNovaLg_Semibold': Platform.select({
        android: 'ProximaNovaLg_Semibold',
        ios: 'ProximaNova-Semibold'
    }),
    'ProximaNovaLg_Thin_Italic': Platform.select({
        android: 'ProximaNovaLg_Thin_Italic',
        ios: 'ProximaNova-ThinIt'
    }),
    'ProximaNovaLg_Thin': Platform.select({
        android: 'ProximaNovaLg_Thin',
        ios: 'ProximaNovaT-Thin'
    }),
}
const Text = (props) => {
    const { style, children } = props;
    var _style = StyleSheet.flatten([
        {
            color: 'black',
            textAlign: 'justify',
            fontFamily: FontCustom.Roboto_Light,
            // fontFamily: FontCustom.ProximaNovaLg_Bold,
        },
        style
    ])

    return (
        <TextRN
            {...props}
            allowFontScaling={false}
            style={_style}
        >
            {children == null ? null : children.constructor == String ? children : children.constructor == Object ? JSON.stringify(children) : (children + '')}
        </TextRN>
    )
}

const Button = (props) => {
    const { style, children, styleText } = props;
    const isShowTouchable = useSelector(state => state.debug.isShowTouchable);

    var _style = StyleSheet.flatten([
        {
            paddingVertical: 8,
            paddingHorizontal: 8,
            backgroundColor: '#f4f4f4',
            justifyContent: 'center',
            alignItems: 'center'
        },
        style,
        isShowTouchable && {
            borderColor: '#00d6ff',
            borderWidth: 1
        }
    ])
    return (
        <TouchableOpacity
            {...props}
            style={_style}
        >
            {
                children == null ? null : children.constructor == String ?
                    <Text
                        style={[{}, styleText]}
                    >{children}</Text>
                    : children
            }
        </TouchableOpacity>
    )
}

// const Image = (props) => {
//     var {
//         source = { uri: '' },
//         autoHeight = false,
//         style
//     } = props;
//     const imgSize = useRef({
//         w: 1, h: 1
//     })
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError, setIsError] = useState(false);

//     var isFetchImage = async (uri) => {
//         return new Promise((resolve, reject) => {
//             ImageRN.prefetch(uri).then(status => {
//                 resolve(true)
//             }, error => {
//                 resolve(false)
//             });
//         });
//     }
//     var load = async () => {
//         setIsLoading(true);
//         setIsError(false);
//         if (source.constructor == Number) {
//             var info = ImageRN.resolveAssetSource(source);
//             imgSize.current = {
//                 w: info.width,
//                 h: info.height,
//             }
//             setIsLoading(false);
//         }
//         else if (source.uri != null && source.uri.constructor == String) {
//             if (autoHeight == true) {
//                 ImageRN.getSize(source.uri, async (w, h) => {
//                     imgSize.current = {
//                         w, h
//                     }
//                     var isLoaded = await isFetchImage(source.uri);
//                     setIsLoading(false);
//                     setIsError(isLoaded ? false : true);
//                 }, (error) => {
//                     setIsError(true);
//                 })
//             }
//             else {
//                 var isLoaded = await isFetchImage(source.uri);
//                 setIsLoading(false);
//                 setIsError(isLoaded ? false : true);
//             }
//         }
//     }

//     useEffect(() => {
//         load();
//     }, [source]);

//     var _style = StyleSheet.flatten([{ width: 1, height: 1 }, style])

//     return (
//         isError ?
//             <View>
//                 <Text>
//                     {'Image error.'}
//                 </Text>
//             </View>
//             : isLoading ?
//                 <View
//                     style={{
//                         width: _style.width,
//                         height: _style.height,
//                         justifyContent: "center",
//                         alignItems: "center"
//                     }}
//                 >
//                     <ActivityIndicator size="small" color={appColors.materialGrey} />
//                 </View>
//                 : <FastImage
//                     resizeMode={"contain"}
//                     {...props}
//                     style={[
//                         _style,
//                         autoHeight ? {
//                             height: (_style.width / imgSize.current.w) * imgSize.current.h
//                         } : {}
//                     ]}
//                     source={source}
//                     onLayout={function (event) {
//                     }}
//                 />
//     )
// }

// const Modal = forwardRef((props, ref) => {
//     const [isShow, setIsShow] = useState(false)
//     const {
//         onBackdropPress,
//         children,
//         title,
//         styleContent,
//         isHidenClickBackrop = true
//     } = props;

//     const toggle = (flag) => {
//         flag = flag == null ? !isShow : flag
//         setIsShow(flag);
//     }
//     useImperativeHandle(ref, () => ({
//         toggle
//     }))
//     return (
//         <ModalRN
//             {...props}
//             isVisible={isShow}
//             onBackdropPress={() => {
//                 isHidenClickBackrop && toggle(false);
//                 onBackdropPress != null && onBackdropPress()
//             }}
//             useNativeDriver={true}
//             style={{
//                 flexShrink: 1
//             }}
//         >
//             <View
//                 style={{
//                     backgroundColor: 'white',
//                     paddingHorizontal: 8,
//                     paddingVertical: 8,
//                     borderRadius: 10,
//                     flexShrink: 1,
//                     width: '100%'
//                 }}
//             >
//                 {(title || '') == '' ? null : title.constructor == String ?
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             alignItems: 'center'
//                         }}
//                     >
//                         <Text
//                             style={{
//                                 fontSize: 16,
//                                 flex: 1
//                             }}
//                         >
//                             {title}
//                         </Text>
//                         <Button
//                             style={{
//                                 backgroundColor: 'transparent'
//                             }}
//                             onPress={() => toggle(false)}
//                         >
//                             <Ionicons
//                                 name='close'
//                                 size={25}
//                             />
//                         </Button>
//                     </View>
//                     : title
//                 }
//                 <View
//                     style={[
//                         {
//                             flexShrink: 1,
//                         },
//                         (title || '') != '' && {
//                             borderColor: '#f2f2f2', borderTopWidth: 1,
//                             paddingVertical: 8
//                         },
//                         styleContent
//                     ]}
//                 >
//                     {children}
//                 </View>
//             </View>
//         </ModalRN>
//     )
// })

const Header = (props) => {
    const insets = useSafeAreaInsets();
    const {
        style,
        styleContainer,
        styleTextTitle,
        title,
        rightComponent = null
    } = props;
    return (
        <View
            style={[
                {
                    backgroundColor: appColors.primary,
                    width: '100%',
                },
                styleContainer
            ]}
        >
            <View
                style={{
                    height: insets.top
                }}
            />
            <View
                style={{
                    justifyContent: 'center',
                }}
            >
                {
                    title == null ? null : title.constructor == String ?
                        <Text
                            style={[
                                {
                                    textAlign: 'center',
                                    fontSize: 20,
                                    // textTranform: 'capitalize',
                                    color: appColors.white,
                                    paddingVertical: 10
                                },
                                styleTextTitle
                            ]}
                        >
                            {title}
                        </Text>
                        : title
                }
                <Button
                    style={{
                        backgroundColor: appColors.transparent,
                        position: 'absolute',
                        height: '100%',
                        paddingHorizontal: 8,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigateBack()}
                >
                    <AntDesign name='left' color={appColors.white} size={28} />
                </Button>
                {
                    rightComponent != null &&
                    <View
                        style={{
                            position: 'absolute',
                            height: '100%',
                            paddingHorizontal: 8,
                            justifyContent: 'center',
                            right: 0
                        }}
                    >
                        {rightComponent}
                    </View>
                }
            </View>
        </View>
    )
}

//#region  Icon
//https://oblador.github.io/react-native-vector-icons/
class Icon extends React.PureComponent {
    static Type = {
        Ionicons: IoniconsRN,
        AntDesign: AntDesignRN,
        EvilIcons: EvilIconsRN,
        MaterialIcons: MaterialIconsRN,
        MaterialCommunityIcons: MaterialCommunityIconsRN,
        FontAwesome: FontAwesomeRN,
        FontAwesome5: FontAwesome5RN,
    }
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        var { type, size, color, name, icon } = this.props;
        type = type == null || type == '' ? 'Ionicons' : type;
        size = size || 24;
        color = color || 'black';
        name = name || icon || '';

        var IconView = Icon.Type[type];
        return (
            <IconView {...this.props} size={size} color={color} name={name} />
        );
    }
}
Icon.defaultProps = {
    type: '',
    size: '',
    name: '',
    icon: '',
    color: ''
}

var Ionicons = (props) => {
    return <Icon {...props} type='Ionicons' />
}

var AntDesign = (props) => {
    return <Icon {...props} type='AntDesign' />
}

var EvilIcons = (props) => {
    return <Icon {...props} type='EvilIcons' />
}

var MaterialIcons = (props) => {
    return <Icon {...props} type='MaterialIcons' />
}

var MaterialCommunityIcons = (props) => {
    return <Icon {...props} type='MaterialCommunityIcons' />
}

var FontAwesome = (props) => {
    return <Icon {...props} type='FontAwesome' />
}

var FontAwesome5 = (props) => {
    return <Icon {...props} type='FontAwesome5' />
}
//#endregion

//#region ViewIcon
class ViewIcon extends React.PureComponent {
    render() {
        var {
            iconTop, iconBottom, iconLeft, iconRight, children,
            styleContainer,
        } = this.props;
        return (
            <View
                style={[
                    {},
                    iconTop != null || iconBottom != null && {
                        alignItems: 'center'
                    },
                    styleContainer
                ]}
            >
                {iconTop}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    {iconLeft != null &&
                        <View
                            style={[
                                {
                                    marginRight: 5
                                },
                                this.props.styleIconLeftContainer
                            ]}
                        >
                            {iconLeft}
                        </View>
                    }
                    {children != null && children.constructor == String ?
                        <Text
                            style={[
                                {},
                                this.props.styleText
                            ]}
                        >{children}</Text>
                        : children
                    }
                    {iconRight != null &&
                        <View>
                            {iconRight}
                        </View>
                    }
                </View>
                {iconBottom}
            </View>
        )
    }
}
ViewIcon.defaultProps = {
    iconTop: null,
    iconBottom: null,
    iconLeft: null,
    iconRight: null,
    styleContainer: null,
    styleIconLeftContainer: null,
    styleText: null,
}
//#endregion

//#region Card
// const Card = (props) => {
//     const {
//         children,
//         title = null,
//         styleContainer,
//         styleTitleText,
//         styleContent,
//     } = props

//     return (
//         <View
//             style={[
//                 {
//                     backgroundColor: appColors.white,
//                     marginHorizontal: 10,
//                     ...StylesCus.boxShadow
//                 },
//                 styleContainer
//             ]}
//         >
//             {
//                 title == null ? null : title.constructor == String ?
//                     <ViewHorizontal
//                         style={{
//                             padding: 8
//                         }}
//                     >
//                         <Text
//                             style={[
//                                 {
//                                     fontSize: 18
//                                 },
//                                 styleTitleText
//                             ]}
//                         >
//                             {title}
//                         </Text>
//                     </ViewHorizontal>
//                     : title
//             }
//             <View
//                 style={[
//                     {
//                         paddingHorizontal: 8
//                     },
//                     title != null && {
//                         borderColor: '#f2f2f2',
//                         borderTopWidth: 1,
//                         paddingVertical: 8
//                     },
//                     styleContent
//                 ]}
//             >
//                 {children}
//             </View>
//         </View>
//     )
// }
//#endregion

//#region TextInput
class TextInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.value != this.state.value)
            this.setState(s => s.value = nextProps.value)
    }

    clearText = () => {
        this.setState(s => s.value = '', () => this.props.onChangeText(''))
    }

    onChangeText = (txt) => {
        this.setState(s => s.value = txt, () => this.props.onChangeText(txt))
    }


    render() {
        return (
            <View
                style={[
                    {
                        width: '100%'
                    },
                    this.props.label && { marginTop: 10 },
                    this.props.styleContainer
                ]}
            >
                {this.props.label != null &&
                    <Text>
                        {this.props.label}
                    </Text>
                }
                <View
                    style={[
                        {
                            padding: 5,
                            borderColor: '#f2f2f2',
                            borderWidth: 1,
                            paddingLeft: 8,
                            paddingRight: 8,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 3
                        },
                        this.props.label && { marginTop: 5 },
                        this.props.styleContainerText,
                    ]}
                >
                    {this.props.leftIcon &&
                        <View
                            style={[
                                {
                                    marginRight: 8
                                },

                            ]}
                        >
                            {this.props.leftIcon}
                        </View>
                    }
                    <TextInputRN
                        {...this.props}
                        placeholderTextColor='#ccc'
                        // placeholderStyle={{

                        // }}
                        style={[
                            {
                                height: 32,
                                padding: 0,
                                flex: 1,
                                // fontFamily: Text.FontCustom.ProximaNovaLg_Regular[Platform.OS == 'android' ? 'android' : 'ios'],
                                fontSize: 16
                            },
                            this.props.style
                        ]}
                        value={this.state.value}
                        onChangeText={txt => this.onChangeText(txt)}
                    />
                    {
                        this.state.value.trim() != '' &&
                        <Button
                            style={{
                                backgroundColor: appColors.transparent,
                                padding: 5
                            }}
                            onPress={() => this.clearText()}
                        >
                            <Ionicons icon={IoniconsFont.close} size={18} />
                        </Button>
                    }
                </View>
                {
                    false && <View
                        style={{
                            marginTop: 5
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                color: appColors.materialRed
                            }}
                        >
                            {'Không được để trống.'}
                        </Text>
                    </View>
                }
            </View>
        )
    }
}
TextInput.defaultProps = {
    label: null,
    leftIcon: null,
    styleLeftIcon: null,
    styleContainer: null,
    styleContainerText: null,
    onChangeText: () => { }
}
//#endregion

//#region  Selector
// class Selector extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isVisible: false,
//             isShow: false,
//             txtSearch: '',
//             options: [],
//             selected: [],
//             // selected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//             selected: this.props.value != null ? this.getIndexOfValue(this.props.value) : [],
//         }
//     }

//     refModal = null;

//     getIndexOfValue(value) {
//         var options = this.props.options.map((e, index) => {
//             {
//                 return {
//                     key: this.props.optionKey(e, index),
//                     index
//                 }
//             }
//         })

//         var selected = (this.props.multiple ? value : [value]).map((e, index) => {
//             var find = options.filter(e1 => e1.key == e)[0];
//             return find == null ? null : find.index;
//         }).filter(e => e != null);
//         return selected;
//     }

//     UNSAFE_componentWillUpdate(nextProps, nextState) {
//         if (nextProps.value != null) {
//             var selected = this.getIndexOfValue(nextProps.value);
//             if (JSON.stringify(selected) != JSON.stringify(this.state.selected)) {
//                 this.setState(s => s.selected = selected);
//             }
//         }
//     }

//     toggleModal = () => {
//         this.refModal.toggle();
//     }

//     renderOption = (e, index) => {
//         var isSelected = this.state.selected.indexOf(index) >= 0;
//         return (
//             <Button
//                 style={[
//                     {
//                         backgroundColor: this.props.multiple ? 'white' : isSelected ? 'rgba(205,205,205,1)' : index % 2 ? 'white' : '#f9f9f9'
//                     },
//                     this.props.styleOptionContainer,
//                     {
//                         flexDirection: 'row'
//                     }
//                 ]}
//                 onPress={() => this.clickOption(e, index, isSelected)}
//             >
//                 {
//                     this.props.multiple &&
//                     <View style={{
//                         width: 40
//                     }}>
//                         {isSelected && <Ionicons icon={IoniconsFont.checkmarkSharp} color={appColors.success} size={18} />}
//                     </View>
//                 }
//                 {this.props.optionRender != null ?
//                     this.props.optionRender.apply(this, e, index) :
//                     <Text
//                         style={[{
//                             // textAlign: 'center',
//                             flex: 1,
//                             flexWrap: 'wrap'
//                         },
//                         this.props.styleOptionLabel
//                         ]}
//                     >
//                         {this.props.optionLabel(e, index)}
//                     </Text>
//                 }
//             </Button>
//         )
//     }

//     onModalShow = () => {
//         this.setState(s => {
//             s.isShow = true;
//             s.txtSearch = '';
//             return s;
//         }, () => this.searchOptions(''))
//     }

//     onModalHide = () => {
//         this.setState(s => s.isShow = false)
//     }

//     timeoutSearch = null;
//     onChangeTextSearch = (txt) => {
//         txt = txt.trim()
//         this.setState(s => s.txtSearch = txt, () => {
//             this.timeoutSearch != null && clearTimeout(this.timeoutSearch);
//             this.timeoutSearch = setTimeout(() => {
//                 this.searchOptions(txt);
//             }, txt == '' ? 0 : 1000);
//         });
//     }

//     searchOptions = (txt) => {
//         var options = this.props.options.map((e, index) => {
//             var label = Utils.string.convertToUnSign(this.props.optionLabel(e, index));
//             if (label.indexOf(txt) < 0) return null;
//             return {
//                 index: index,
//                 item: e
//             }
//         }).filter(e => e != null);

//         this.setState(s => s.options = options)
//     }

//     clickOption = (e, index, isSelected) => {
//         if (this.props.multiple) {
//             var selected = [];
//             if (isSelected)
//                 selected = this.state.selected.filter(e => e != index);
//             else
//                 selected = this.state.selected.concat([index]);

//             selected.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
//             this.setState(s => s.selected = selected);
//         }
//         else {
//             this.setState(s => {
//                 s.selected = [index];
//                 s.isVisible = false;
//                 return s;
//             }, () => (this.refModal.toggle(), this.props.onSelected(e, index)))
//         }
//     }

//     clickClearOption = (e, index) => {
//         var selected = this.state.selected.filter(e => e != index);
//         this.setState(s => s.selected = selected);
//     }

//     render() {
//         return (
//             <View
//                 style={[
//                     {
//                         width: '100%',
//                     },
//                     this.props.label && {
//                         marginTop: 10
//                     },
//                     this.props.styleContainer
//                 ]}
//             >
//                 {this.props.label &&
//                     <Text>
//                         {this.props.label}
//                     </Text>
//                 }
//                 <Button
//                     style={[
//                         {
//                             flexDirection: 'row',
//                             flexWrap: 'wrap',
//                             // padding: 5,
//                             // paddingBottom: 5,
//                             // paddingTop: 8,
//                             borderColor: '#f2f2f2',
//                             borderWidth: 1,
//                             borderRadius: 3,
//                             backgroundColor: appColors.transparent,
//                             minHeight: 45,
//                             // alignItems: 'center',
//                         },
//                         this.props.label && { marginTop: 5 },
//                         this.props.styleButtonContainer
//                     ]}
//                     onPress={() => this.toggleModal()}
//                 >
//                     {
//                         this.state.selected.length <= 0 ?
//                             (
//                                 <Text
//                                     style={[
//                                         {
//                                             color: '#ccc'
//                                         },
//                                         this.props.stylePlaceholder
//                                     ]}
//                                 >
//                                     {this.props.children != null && this.props.children.constructor == String ? this.props.children : this.props.placeholder}
//                                 </Text>
//                             )
//                             :
//                             this.props.multiple ? (
//                                 this.state.selected.map((e, index) => {
//                                     return (
//                                         <View
//                                             key={index}
//                                             style={[
//                                                 {
//                                                     backgroundColor: appColors.transparent,
//                                                     borderColor: '#f2f2f2',
//                                                     borderWidth: 1,
//                                                     padding: 5,
//                                                     borderRadius: 3,
//                                                     margin: 3,
//                                                     flexDirection: 'row',
//                                                     alignItems: 'center'
//                                                 },
//                                             ]}
//                                             onPress={() => this.toggleModal()}
//                                         >
//                                             <Text>
//                                                 {
//                                                     this.props.buttonRenderMultiple != null ?
//                                                         this.props.buttonRenderMultiple(this.props.options[e], e)
//                                                         : this.props.optionLabel(this.props.options[e], e)
//                                                 }
//                                             </Text>
//                                             <Button
//                                                 style={{
//                                                     backgroundColor: appColors.transparent,
//                                                     padding: 3
//                                                 }}
//                                                 onPress={() => this.clickClearOption(this.props.options[e], e)}
//                                             >
//                                                 <Ionicons icon={IoniconsFont.close} size={18} />
//                                             </Button>
//                                         </View>
//                                     )
//                                 })
//                             )
//                                 : (
//                                     this.props.buttonRender != null ?
//                                         this.props.buttonRender(this.props.options[this.state.selected[0]], 0)
//                                         : this.props.optionLabel(this.props.options[this.state.selected[0]], 0)
//                                 )

//                     }
//                 </Button>
//                 <Modal
//                     ref={e => this.refModal = e}
//                     title={this.props.title}
//                     isVisible={this.state.isVisible}
//                     onToggleModal={e => this.setState(s => s.isVisible = e)}
//                     scrollHorizontal={true}
//                     propagateSwipe={true}
//                     style={{
//                     }}
//                     styleContentContainer={{
//                         width: constants.WINDOW.width * .8,
//                     }}
//                     styleContent={{
//                         padding: 0
//                     }}
//                     onModalShow={() => this.onModalShow()}
//                     onModalHide={() => this.onModalHide()}
//                     titleComponent={
//                         !this.props.isSearch ? null : <TextInput
//                             style={{
//                                 color: 'black'
//                             }}
//                             styleContainer={{
//                                 flex: 1,
//                             }}
//                             value={this.state.txtSearch}
//                             placeholder='Tìm kiếm'
//                             onChangeText={txt => this.onChangeTextSearch(txt)}
//                             leftIcon={
//                                 <Ionicons icon={IoniconsFont.search} color='#cdcdcd' />
//                             }
//                         />
//                     }
//                 >
//                     {
//                         false && <View
//                             style={{
//                                 flexDirection: 'row'
//                             }}
//                         >
//                             <TextInput
//                                 style={{
//                                     color: 'black'
//                                 }}
//                                 styleContainer={{
//                                     flex: 1,
//                                 }}
//                                 value={this.state.txtSearch}
//                                 placeholder='Tìm kiếm'
//                                 onChangeText={txt => this.onChangeTextSearch(txt)}
//                                 leftIcon={
//                                     <Ionicons icon={IoniconsFont.search} color='##cdcdcd' />
//                                 }
//                             />
//                         </View>
//                     }
//                     {this.state.isShow &&
//                         <FlatList
//                             style={{
//                                 flexShrink: 1
//                             }}
//                             data={this.state.options}
//                             keyExtractor={(item, index) => index + 'a'}
//                             renderItem={({ index, item }) => this.renderOption(item.item, item.index)}
//                         />
//                     }
//                     {this.props.multiple &&
//                         <Button
//                             style={{
//                                 backgroundColor: appColors.red
//                             }}
//                             styleText={{
//                                 color: 'white',
//                                 fontSize: 16
//                             }}
//                             onPress={() => this.refModal.toggle()}
//                         >
//                             {'Xong'}
//                         </Button>
//                     }
//                 </Modal>
//             </View>
//         )
//     }
// }
// Selector.defaultProps = {
//     value: null,
//     isSearch: true,
//     label: null,
//     placeholder: 'Chọn',
//     title: '',
//     styleContainer: null,
//     styleButton: null,
//     styleButtonContainer: null,
//     buttonRender: null,
//     buttonRenderMultiple: null,
//     options: [],
//     optionLabel: (e, index) => e,
//     optionKey: (e, index) => { },
//     optionRender: null,
//     // (e, index) => {
//     //     return <Text>{this.props.optionLabel(e, index)}</Text>
//     // },
//     styleOptionContainer: null,
//     styleOption: null,
//     styleOptionLabel: null,
//     onSelected: (e, index) => { },
//     multiple: false,
// }
//#endregion

//#region Screen
const Screen = (props) => {
    const {
        onDeactive = () => { },
        onActive = () => { },
    } = props;


    const refNextAppState = useRef(null)

    const _handleAppStateChange = (nextAppState) => {
        if (['background', 'inactive'].indexOf(nextAppState) >= 0 && (refNextAppState.current == 'active' || refNextAppState.current == null)) {
            onDeactive();
        }
        else if (['background', 'inactive'].indexOf(refNextAppState.current) >= 0 && nextAppState == 'active') {
            onActive();
        }

        refNextAppState.current = nextAppState;
    };
    useEffect(() => {
        AppState.addEventListener('change', _handleAppStateChange);
        return () => {
            AppState.removeEventListener('change', _handleAppStateChange);
        }
    }, [])
    const { style, children } = props
    return (
        <View
            style={[
                {
                    flex: 1
                },
                style
            ]}
        >
            {children}
        </View>
    )
}
//#endregion

const SafeAreaView = (props) => {
    const { getStyle } = props
    const insets = useSafeAreaInsets();
    return getStyle == null ? null :
        <View
            style={[
                {},
                getStyle(insets)
            ]}
        />
}
export default {
    Alert,
    ViewHorizontal,
    ViewHorizontalCenter,
    // Loading,
    Text,
    Button,
    // Image,
    // Modal,
    Header,
    Icon,
    Ionicons,
    AntDesign,
    EvilIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    FontAwesome5,
    ViewIcon,
    Screen,
    // Card,
    // Selector,
    FontCustom,
    SafeAreaView,
};