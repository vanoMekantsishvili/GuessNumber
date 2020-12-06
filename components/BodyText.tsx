import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BodyTextProps {
  style?: React.CSSProperties,
  children: React.ReactNode
}

const BodyText = ({style, children}: BodyTextProps) => (
  <Text style={{ ...styles.body, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  body: {
    // fontFamily: 'open-sans'
  }
});

export default BodyText;
