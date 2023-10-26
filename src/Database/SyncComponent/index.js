import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import moment from 'moment';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAreaTables, fetchAllAreaData} from '../Schema/AreaDetails';
import {createZoneTables, fetchAllZoneData} from '../Schema/ZoneDetails';
import SyncingLoader from '../../component/SyncingLoader';
import AreaDataSync from './AreaDataSync';
import ZoneDataSync from './ZoneDataSync';
import colors from '../../assets/theme/colors';
import {showError} from '../../utils/helperFunction';
import CameraDataSync from './CameraDataSync';
import {
  createCameraTable,
  fetchAllCameraData,
} from '../Schema/Devices/CameraTable';
import {
  createCurtainTable,
  fetchAllCurtainData,
} from '../Schema/Devices/CurtainTable';
import CurtainDataSync from './CurtainDataSync';
import {createDmxTable, fetchAllDmxData} from '../Schema/Devices/DmxTable';
import DmxDataSync from './DmxDataSync';
import {createFanTable, fetchAllFanData} from '../Schema/Devices/FanTable';
import FanDataSync from './FanDataSync';
import {createHvacTable, fetchAllHvacData} from '../Schema/Devices/HvacTable';
import HvacDataSync from './HvacDataSync';
import {
  createIrrigationTable,
  fetchAllIrrigationData,
} from '../Schema/Devices/IrrigationTable';
import IrrigationDataSync from './IrrigationDataSync';
import LightDataSync from './LightDataSync';
import {
  createLightTable,
  fetchAllLightData,
} from '../Schema/Devices/LightTable';
import {
  createMacroTable,
  fetchAllMacroData,
} from '../Schema/Devices/MacroTable';
import MacroDataSync from './MacroDataSync';
import {createRgbwTable, fetchAllRgbwData} from '../Schema/Devices/RgbwTable';
import RgbwDataSync from './RgbwDataSync';
import {
  createScenesTable,
  fetchAllScenesData,
} from '../Schema/Devices/ScenesTable';
import ScenesDataSync from './ScenesDataSync';
import {
  createSequenceTable,
  fetchAllSequenceData,
} from '../Schema/Devices/SequenceTable';
import SequenceDataSync from './SequenceDataSync';

const SyncingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initialDate = '01-01-1970';
  const currentDate = moment().format('DD-MM-YYYY');
  // const currentDate = '25-10-2023';

  useEffect(() => {
    createAreaTables();
    createZoneTables();
    createCameraTable();
    createCurtainTable();
    createDmxTable();
    createFanTable();
    createHvacTable();
    createIrrigationTable();
    createLightTable();
    createMacroTable();
    createRgbwTable();
    createScenesTable();
    createSequenceTable();

    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');

        if (isFirstTime === null) {
          await AsyncStorage.setItem('isFirstTime', 'false');

          setTimeout(() => {
            AreaDataSync(initialDate, setIsLoading);
            ZoneDataSync(initialDate, setIsLoading);
            CameraDataSync(initialDate, setIsLoading);
            CurtainDataSync(initialDate, setIsLoading);
            DmxDataSync(initialDate, setIsLoading);
            FanDataSync(initialDate, setIsLoading);
            HvacDataSync(initialDate, setIsLoading);
            IrrigationDataSync(initialDate, setIsLoading);
            LightDataSync(initialDate, setIsLoading);
            MacroDataSync(initialDate, setIsLoading);
            RgbwDataSync(initialDate, setIsLoading);
            ScenesDataSync(initialDate, setIsLoading);
            SequenceDataSync(initialDate, setIsLoading);
          }, 3000);
        } else {
          setTimeout(() => {
            AreaDataSync(currentDate, setIsLoading);
            ZoneDataSync(currentDate, setIsLoading);
            CameraDataSync(currentDate, setIsLoading);
            CurtainDataSync(currentDate, setIsLoading);
            DmxDataSync(currentDate, setIsLoading);
            FanDataSync(currentDate, setIsLoading);
            HvacDataSync(currentDate, setIsLoading);
            IrrigationDataSync(currentDate, setIsLoading);
            LightDataSync(currentDate, setIsLoading);
            MacroDataSync(currentDate, setIsLoading);
            RgbwDataSync(currentDate, setIsLoading);
            ScenesDataSync(currentDate, setIsLoading);
            SequenceDataSync(currentDate, setIsLoading);
          }, 3000);
        }
      } else {
        console.log(
          'No internet connection. Logging data from the local database.',
        );
        showError('internet is not available');
        fetchAllAreaData();
        fetchAllZoneData();
        fetchAllCameraData();
        fetchAllCurtainData();
        fetchAllDmxData();
        fetchAllFanData();
        fetchAllHvacData();
        fetchAllIrrigationData();
        fetchAllLightData();
        fetchAllMacroData();
        fetchAllRgbwData();
        fetchAllScenesData();
        fetchAllSequenceData();
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>{isLoading ? <SyncingLoader /> : null}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
  },
});

export default SyncingScreen;
