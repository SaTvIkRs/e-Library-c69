import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class TransactionScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
            domState:'normal',
            hasCameraPermissions: null,
            scanned: false,
            scannedData:""
        }
    }

getCameraPermissions = async domState=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermissions:status === 'granted',
        domState: domState,
        scanned:false
    })
}

handleBarCodeScanned = async ({type, data}) => {
    this.setState({
        scannedData:data,
        domState:'normal',
        scanned:true
    })
}

    render(){
        const {domState, hasCameraPermissions, scannedData, scanned} = this.state
        if(domState === 'scanner'){
            return(
                <BarcodeScanner
                onBarcodeScanned = {scanned ? undefined : this.handleBarCodeScanned}
                style = {StyleSheet.absoluteFillObject}/>
            )
        }
        return(
           <View style = {styles.container}>
               <Text style = {styles.text}>
                   {hasCameraPermissions ? scannedData : 'request for camera permission'}
                   </Text>

                   <TouchableOpacity
                   style = {[styles.button, {marginTop : 25}]}
                   onPress = {() => this.getCameraPermissions('scanner')}>
                       <Text style = {styles.buttonText}>
                           Scan QR Code
                       </Text>
                    </TouchableOpacity>
                   </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        allignItems:'center',
        backgroundColor:'#5653d4'
    },
    text:{
        color:'#ffffff',
        fontSize:15
    },
    button:{
        width:'43%',
        height:55,
        justifyContent:'center',
        allignItems:'center',
        backgroundColor:'#f48d20',
        borderRadius:15
    },
    buttonText:{
        fontSize:24,
        color:'#ffffff'
    }
})


