import { Text, TextProps } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const ThemedText = ({style, children, ...props} : TextProps) => {
  const theme = useTheme();

  return (
    <Text style={[style, {color: theme.colors.text}]} {...props}>{children}</Text>
  )
}

export default ThemedText