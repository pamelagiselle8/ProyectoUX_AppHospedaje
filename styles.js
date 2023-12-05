import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  titulo1: {
    color: COLORS.blue,
    fontSize: SIZES.xLarge,
  },
  titulo2: {
    color: COLORS.blue,
    fontSize: SIZES.large,
  },
  fondoAzul: {
    backgroundColor: COLORS.blue,
  },
  textoBoton: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textoBotonBlanco: {
    color: COLORS.blue,
    fontSize: SIZES.medium,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  boton: {
    backgroundColor: COLORS.blue,
  },
  botonBlanco: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  containerIzq: {
    width: '40%',
  },
  containerCentrar: {
    alignSelf: 'center',
  },
  topBar: {
    position: 'absolute',
    height: 30,
  },
    navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
});

export default styles;
