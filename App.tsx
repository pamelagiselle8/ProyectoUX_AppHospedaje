import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import styles from './styles';
import Sidebar from './Sidebar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Sidebar />
      {/* <View style={styles.containerIzq}>
        <View style={styles.containerCentrar}>
          <Text style={styles.textoBoton}>hola mundo</Text>
        </View>
        <TouchableOpacity style={styles.botonBlanco}>
          <View style={styles.containerCentrar}>
            <Text style={styles.textoBotonBlanco}>boton</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

export default App;
