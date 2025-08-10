import React from 'react';
import { TextInput } from 'react-native';
import { styles } from "./Style";

interface BatTextInputProps{
  pass:string
}

export function BatInput(props:BatTextInputProps) {
  return (
    <>
        <TextInput 
        placeholder='Pass'
        value= {props.pass}
        style= {styles.inputer}
        ></TextInput>
    </>
  );
}