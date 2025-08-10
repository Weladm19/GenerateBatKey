import * as clipboard from "expo-clipboard";
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import passGeneration from '../../services/passwordService';
import { BatInput } from '../BatInput/BatInput';
import { styles } from "./Style";

export function BatButton() {
  const [pass, setPass] = useState("");
  const [copyValue, setCopyValue] = useState(false)

  function randomGeneration(){
    let generateToken = passGeneration()
    setPass(generateToken)
  }

  function handeCopyButton(){
    clipboard.setStringAsync(pass)
    setCopyValue(true)
  }

  return (
    <>
        <BatInput pass={pass}/>
        <View style={styles.contentButtons}>  
          <Pressable 
            onPress={randomGeneration}
            style={styles.buttonBat}
            >
            <Text>Generation 🎲</Text>
          </Pressable>
          <Pressable 
            onPress={handeCopyButton}
            style={styles.buttonBat}
            >
            <Text>Copy 🖨️</Text>
          </Pressable>
        </View>
        <Text>{copyValue? "Texto Copiado" : ""}</Text>
    </>
  );
}