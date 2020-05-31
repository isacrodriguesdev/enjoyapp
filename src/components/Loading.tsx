import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
// imports
import { secundaryColor } from '~/app/colors';
// types
// components

type Props = {};

export default function Loading(props: Props) {

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={secundaryColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
})