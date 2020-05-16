import { StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';

export const headerStyle: StyleProp<ViewStyle> = {
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   backgroundColor: "white",
   height: 55,
   width: "100%",
   paddingHorizontal: 15,
}

export const headerIconStyle: StyleProp<TextStyle> = {
   fontSize: 20,
   opacity: 0.8,
   color: "rgb(0,0,25)"
}