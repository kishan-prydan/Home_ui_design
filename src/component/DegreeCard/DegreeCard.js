import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CircularSliderComponent from '../CircularSliderComponent';
import colors from '../../assets/theme/colors';
import styles from './styles';
import BoxTitle from '../common/BoxTitle';
import TextIncrementDecrement from '../common/TextIncrementDecrement';
import IconTextSwitchCard from '../common/IconTextSwitchCard';
import data from './data';
import IconclickColorChange from '../IconclickColorChange';

const DegreeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTitleStyle}>
        <BoxTitle
          clickableText
          disabled={true}
          boxTitle={'\u2109>\u2103'}
          textStyle={styles.textComponent}
          container={styles.textContainer}
        />
      </View>

      <View style={styles.sliderStyle}>
        <CircularSliderComponent
          width={200}
          height={200}
          gradientColors={[
            colors.sliderColorFour,
            colors.sliderColorThree,
            colors.sliderColorTwo,
            colors.sliderColorOne,
          ]}
        />
      </View>

      <View style={styles.buttonText}>
        <TextIncrementDecrement celsius />
        <TextIncrementDecrement />
      </View>

      <View style={styles.cardStyle}>
        {data.map((data, index) => {
          return (
            <IconTextSwitchCard
              key={index}
              iconType={data.iconType}
              iconName={data.iconName}
              title={data.title}
              innerStyle={
                data.value === true
                  ? {
                      elevation: data.elevation,
                      backgroundColor: data.backgroundColor,
                    }
                  : {backgroundColor: data.backgroundColor}
              }
              iconStyle={{color: data.iconColor}}
              value={data.value}
            />
          );
        })}
        <IconTextSwitchCard
          title={'Auto'}
          innerStyle={{backgroundColor: colors.cardColorFour}}
          iconView={{backgroundColor: 'transparent'}}
          value={false}
        />
      </View>

      <View style={styles.fanIconBoxTitleStyle}>
        <IconclickColorChange />

        <BoxTitle
          clickableText
          disabled={true}
          boxTitle={'Auto'}
          container={styles.boxTitleContainer}
          textStyle={styles.boxTitleTextStyle}
        />
      </View>
    </View>
  );
};

export default DegreeCard;
