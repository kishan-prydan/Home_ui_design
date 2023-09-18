//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const BoxTitle = ({boxTitle}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>{boxTitle}</Text>
		</View>
	);
};



export default BoxTitle;
