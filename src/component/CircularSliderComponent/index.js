import React, { useState } from 'react';
import { View, Text, PanResponder } from 'react-native';
import { Svg, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import colors from '../../assets/theme/colors';

const CircularSliderComponent = ({ width, height, gradientColors }) => {
  const [angle, setAngle] = useState(180);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const { moveX, moveY } = gestureState;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) - 20;

      const x = moveX - centerX;
      const y = moveY - centerY;

      let newAngle = (Math.atan2(y, x) * (180 / Math.PI)) % 360;
      if (newAngle < 0) {
        newAngle += 360;
      }

      setAngle(newAngle);
    },
  });

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) - 20;

  const thumbX = centerX + radius * Math.cos((angle * (Math.PI / 180)));
  const thumbY = centerY + radius * Math.sin((angle * (Math.PI / 180)));

  const maxValue = 100;
  const value = Math.round((angle / 360) * maxValue);
  // onValueChange(value);

  return (
    <View>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="sliderGradient" x1="0" y1="1" x2="0" y2="0">
            {gradientColors.map((color, index) => (
              <Stop
                key={index}
                offset={(index / (gradientColors.length - 1)).toString()}
                stopColor={color}
              />
            ))}
          </LinearGradient>
        </Defs>
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="url(#sliderGradient)"
          strokeWidth={22}
          fill="transparent"
        />
        <Circle
          cx={thumbX}
          cy={thumbY}
          r={14}
          fill={colors.white}
          stroke={colors.themeColor}
          strokeWidth={9}
          {...panResponder.panHandlers}
        />
      </Svg>
      <View style={{ position: 'absolute', top: centerY - 15, left: centerX - 25 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: colors.primary }}>{value}{'\u2103'}</Text>
      </View>
    </View>
  );
};

export default CircularSliderComponent;
