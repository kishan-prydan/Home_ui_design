import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';
import { moderateVerticalScale } from 'react-native-size-matters';

const BoxContainer = ({children}) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.containerBoxOpacity,
		borderRadius: 5,
		paddingVertical: moderateVerticalScale(10),
	},
});

export default BoxContainer;
