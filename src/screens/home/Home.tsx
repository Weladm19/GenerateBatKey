import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { BatButton } from "../../components/BatButton/BatButon";
import { BatLogo } from "../../components/BatLogo/Batlogo";
import styles from "./Style";


export default function Home(){

    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
                <BatButton/>   
            </View> 
            
            <StatusBar style="light"/>
        </View>
    )
}