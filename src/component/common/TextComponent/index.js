import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'

const TextComponent = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textMain}>
        {title}
      </Text>
    </View>
  )
}

export default TextComponent