import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TimePicker from '../common/TimePicker';
import TextComponent from '../common/TextComponent';
import colors from '../../assets/theme/colors';
import {moderateVerticalScale} from 'react-native-size-matters';

const TimePicketComponent = () => {
  const [isTimePickerVisibleStart, setTimePickerVisibleStart] = useState(false);
  const [isTimePickerVisibleStop, setTimePickerVisibleStop] = useState(false);
  const [selectedTimeStart, setSelectedTimeStart] = useState('');
  const [selectedTimeStop, setSelectedTimeStop] = useState('');

  const showTimePickerStart = () => {
    setTimePickerVisibleStart(true);
  };
  const showTimePickerStop = () => {
	setTimePickerVisibleStop(true);
  };

  const hideTimePickerStart = () => {
    setTimePickerVisibleStart(false);
  };
  const hideTimePickerStop = () => {
	setTimePickerVisibleStop(true);
  };

  const handleConfirmStart = time => {
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const formattedTimeUpperCase = formattedTime.toUpperCase();
    setSelectedTimeStart(formattedTimeUpperCase);
    hideTimePicker();

    // console.warn(`Start Time : ${selectedTimeStart}`);
  };

  const handleConfirmStop = time => {
    const formattedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const formattedTimeUpperCase = formattedTime.toUpperCase();
    setSelectedTimeStop(formattedTimeUpperCase);
    hideTimePicker();

    // console.warn(`Stop Time : ${selectedTimeStop}`);
  };

  return (
    <>
      <View style={styles.boxTimeinnerContainer}>
        <TextComponent
          textStyle={{color: colors.white}}
          title={'Start Time : '}
        />
        <TimePicker
          onPress={showTimePickerStart}
          isVisible={isTimePickerVisibleStart}
          onConfirm={handleConfirmStart}
          onCancel={hideTimePickerStart}
          timePrint={selectedTimeStart}
        />
      </View>
      <View style={styles.boxTimeinnerContainer}>
        <TextComponent
          textStyle={{color: colors.white}}
          title={'Stop Time : '}
        />
        <TimePicker
          onPress={showTimePickerStop}
          isVisible={isTimePickerVisibleStop}
          onConfirm={handleConfirmStop}
          onCancel={hideTimePickerStart}
          timePrint={selectedTimeStop}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxTimeinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
    // backgroundColor: 'plum'
  },
});

export default TimePicketComponent;
