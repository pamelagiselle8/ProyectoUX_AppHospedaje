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

function Login(): JSX.Element {
  return (
    <SafeAreaView style={[styles.container, styles.fondoAzul]}>
      <Text style={styles.titulo2}>
        hola mundo
      </Text>
    </SafeAreaView>
  );
}

export default Login;