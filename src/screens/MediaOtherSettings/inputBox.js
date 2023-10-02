import React, {useState} from 'react';
import {View} from 'react-native';
import LightSettingBoxComponent from '../../component/LightSettingBoxComponent';
import styles from './styles';

const InputBox = () => {

  const [subnetID, setSubnetID] = useState('29');
  const [deviceName, settext] = useState('ir1');
  const [home, setHome] = useState('10');
  const [power, setPower] = useState('10');
  const [backward, setBackward] = useState('10');
  const [pause, setPause] = useState('10');
  const [play, setPlay] = useState('10');
  const [stop, setStop] = useState('10');
  const [forword, setForword] = useState('10');
  const [channelPlus, setChannelPlus] = useState('10');
  const [channelMinus, setChannelMinus] = useState('10');
  const [volumePlus, setVolumePlus] = useState('10');

  const handleChange = () => {
    settext(value => {
      value;
    });
  };
  const handleChangeOther = () => {
    setSubnetID(value => {
      value;
    });
  };

  const handleChangeHome = () => {
    setHome(value => {
      value;
    });
  };
  const handleChangePower = () => {
    setPower(value => {
      value;
    });
  };
  const handleChangeBackward = () => {
    setBackward(value => {
      value;
    });
  };
  const handleChangePause = () => {
    setPause(value => {
      value;
    });
  };
  const handleChangePlay = () => {
    setPlay(value => {
      value;
    });
  };
  const handleChangeStop = () => {
    setStop(value => {
      value;
    });
  };
  const handleChangeForword = () => {
    setForword(value => {
      value;
    });
  };
  const handleChangeChannelPlus = () => {
    setChannelPlus(value => {
      value;
    });
  };
  const handleChangeChannelMinus = () => {
    setChannelMinus(value => {
      value;
    });
  };
  const handleChangeVolumePlus = () => {
    setVolumePlus(value => {
      value;
    });
  };

  return (
    <View>
      <View style={styles.boxTitleContainer}>
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Subnet ID : '}
          value={subnetID}
          editable={true}
          keyboardType="numeric"
          onChangeText={() => handleChangeOther()}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Device Name : '}
          value={deviceName}
          editable={true}
          onChangeText={() => handleChange()}
        />
      </View>
      <View style={styles.secondBoxstyle}>
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Home'}
          value={home}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeHome()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Power'}
          value={power}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangePower()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Backward'}
          value={backward}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeBackward()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Pause'}
          value={pause}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangePause()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Play'}
          value={play}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangePlay()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Stop'}
          value={stop}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeStop()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'Forword'}
          value={forword}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeForword()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'ChannelPlus'}
          value={channelPlus}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeChannelPlus()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'ChannelMinus'}
          value={channelMinus}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeChannelMinus()}
          container={styles.lightBoxContainer}
        />
        <LightSettingBoxComponent
          darkMode
          mainTitle={'VolumePlus'}
          value={volumePlus}
          keyboardType="numeric"
          editable={true}
          onChangeText={() => handleChangeVolumePlus()}
          container={styles.lightBoxContainer}
        />
      </View>
    </View>
  );
};

export default InputBox;
