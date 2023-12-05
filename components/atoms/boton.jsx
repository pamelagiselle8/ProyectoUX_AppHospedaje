import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import styles from '../../styles';

const boton = ({texto}) => {
  return (
    // <TouchableOpacity styles={styles.fondoAzul}>
    //   <Text styles={styles.textoBoton}>{texto}</Text>
    // </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.textoBoton}>BOTON</Text>
      <View>
        
      </View>
    </TouchableOpacity>
  );
};

export default boton;
