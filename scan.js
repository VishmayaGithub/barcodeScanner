import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class Scan extends React.Component {
    constructor(){
        super()
        this.state={
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermissions = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
         
          hasCameraPermissions: status === "granted",
          buttonState: 'clicked',
          scanned: false
        });
      }
  
      handleBarCodeScanned = async({type, data})=>{
        this.setState({
          scanned: true,
          scannedData: data,
          buttonState: 'normal'
        });
      }
  render(){
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;
<Text style={styles.container}>Barcode Scanner</Text>
  
    if (buttonState === "clicked" && hasCameraPermissions){
        return(
            
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        );
      }
      else if (buttonState === "normal"){
          return(
    <View style={styles.container}>
        <Text style={styles.buttonText}>Barcode Scanner</Text>
       <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
          }}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: 40,
          }}/>

        <Text style={styles.displayText}>{
            hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
          }</Text>  
      
      <StatusBar style="auto" />
      <TouchableOpacity
            onPress={this.getCameraPermissions}
            style={styles.scanButton}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
    </View>
          )
      }
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffc305',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButton:{
      borderWidth:4,
      backgroundColor:'blue'
  },
  buttonText:{
      fontSize:24
  }
});
