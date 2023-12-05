import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

import styles from './styles';

const Sidebar = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View style={[styles.containerCentrar]}>
      <Text>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.topBar}>
        <Button title="*" onPress={() => drawer.current?.openDrawer()} />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default Sidebar;
