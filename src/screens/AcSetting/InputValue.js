import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import TextComponent from '../../component/common/TextComponent';
import BoxTitle from '../../component/common/BoxTitle';
import DropdownComponent from '../../component/common/DropdownComponent';
import data from './data';

const InputValue = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [acName, setacName] = useState('test 1');
  const [subnetID, setsubnetID] = useState('1');
  const [deviceID, setdeviceID] = useState('12');
  const [acSync, setacSync] = useState('1');

  const data = [
    {label: 'AC', value: '1'},
    {label: 'HVAC', value: '2'},
    {label: 'AV with IR', value: '3'},
  ];

  return (
    <View>
      <View>
        <View style={styles.boxTitileinnerContainer}>
          <TextComponent textStyle={styles.textStyle} title={'A/C Name : '} />
          <BoxTitle
            value={acName}
            container={styles.boxTitileElevation}
            onChangeText={value => setacName(value)}
          />
        </View>

        <View style={styles.boxTitileinnerContainer}>
          <TextComponent textStyle={styles.textStyle} title={'Subnet ID : '} />
          <BoxTitle
            value={subnetID}
            container={styles.boxTitileElevation}
            keyboardType={'numeric'}
            onChangeText={value => setsubnetID(value)}
          />
        </View>

        <View style={styles.boxTitileinnerContainer}>
          <TextComponent textStyle={styles.textStyle} title={'Device ID : '} />
          <BoxTitle
            value={deviceID}
            container={styles.boxTitileElevation}
            keyboardType={'numeric'}
            onChangeText={value => setdeviceID(value)}
          />
        </View>

        <View style={styles.boxTitileinnerContainer}>
          <TextComponent textStyle={styles.textStyle} title={'AC Type ID : '} />
          <DropdownComponent
            data={data}
            labelField="label"
            valueField="value"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
      </View>

      <View style={styles.boxTitileinnerContainer}>
        <TextComponent textStyle={styles.textStyle} title={'AC Sync No : '} />
        <BoxTitle
          value={acSync}
          container={styles.boxTitileElevation}
          keyboardType={'numeric'}
          onChangeText={value => setacSync(value)}
        />
      </View>
    </View>
  );
};

export default InputValue;
