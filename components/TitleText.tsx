import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleTextProps {
  style?: React.CSSProperties,
  children: React.ReactNode
}

const TitleText = ({style, children}: TitleTextProps) => (
  <Text style={{ ...styles.title, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

export default TitleText;
