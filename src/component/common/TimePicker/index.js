import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import colors from '../../../assets/theme/colors';

const TimePicker = ({onPress, isVisible, onConfirm, onCancel, timePrint}) => {
//   const [isTimePickerVisible, setTimePickerVisible] = useState(false);
//   const [selectedTime, setSelectedTime] = useState('');

//   const showTimePicker = () => {
//     setTimePickerVisible(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisible(false);
//   };

//   const handleConfirm = time => {
//     const formattedTime = time.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//     const formattedTimeUpperCase = formattedTime.toUpperCase();
//     setSelectedTime(formattedTimeUpperCase);
//     hideTimePicker();
//   };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      //   onPress={showTimePicker}
      onPress={onPress}
      style={styles.container}>
      <DateTimePickerModal
        // isVisible={isTimePickerVisible}
        isVisible={isVisible}
        mode="time"
        display="default"
        // onConfirm={handleConfirm}
        // onCancel={hideTimePicker}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
      <Text style={styles.textStyle}>{timePrint}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textBoxOpacity,
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    borderRadius: 5,
  },
  textStyle: {paddingVertical: 12, color: colors.white, fontSize: 16},
});

export default TimePicker;
