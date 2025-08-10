import React from 'react';
import { Image, Text, View } from 'react-native';

import batlogoImg from "../../../assets/bat-logo.png";
import { styles } from './Style';

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>
            BatGenerations
        </Text>
        <Image source={batlogoImg} style={{
          resizeMode: "contain",
          height: 180
        }}/>
    </View>
  );
}