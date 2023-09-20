//import liraries
import React from 'react';
import { View } from 'react-native';
import BoxTitle from '../common/BoxTitle';
import TextComponent from '../common/TextComponent';
import styles from './styles';

const LightSettingBoxComponent = ({mainTitle, boxTitle}) => {
	return (
		<View style={styles.container}>
			<TextComponent textStyle={styles.textStyle} title={mainTitle}/>
			<BoxTitle boxTitle={boxTitle}/>
		</View>
	);
};



export default LightSettingBoxComponent;