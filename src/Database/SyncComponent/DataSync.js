import React from 'react';
import {createAreaTables, fetchAllAreaData} from '../Schema/AreaDetails';
import {createZoneTables, fetchAllZoneData} from '../Schema/ZoneDetails';
import {
  createCameraTable,
  fetchAllCameraData,
} from '../Schema/Devices/CameraTable';
import {
  createCurtainTable,
  fetchAllCurtainData,
} from '../Schema/Devices/CurtainTable';
import {createDmxTable, fetchAllDmxData} from '../Schema/Devices/DmxTable';
import {createFanTable, fetchAllFanData} from '../Schema/Devices/FanTable';
import {createHvacTable, fetchAllHvacData} from '../Schema/Devices/HvacTable';
import {
  createIrrigationTable,
  fetchAllIrrigationData,
} from '../Schema/Devices/IrrigationTable';
import {
  createLightTable,
  fetchAllLightData,
} from '../Schema/Devices/LightTable';
import {
  createMacroTable,
  fetchAllMacroData,
} from '../Schema/Devices/MacroTable';
import {createRgbwTable, fetchAllRgbwData} from '../Schema/Devices/RgbwTable';
import {
  createScenesTable,
  fetchAllScenesData,
} from '../Schema/Devices/ScenesTable';
import {
  createSequenceTable,
  fetchAllSequenceData,
} from '../Schema/Devices/SequenceTable';
import AreaDataSync from './AreaDataSync';
import ZoneDataSync from './ZoneDataSync';
import CameraDataSync from './CameraDataSync';
import CurtainDataSync from './CurtainDataSync';
import DmxDataSync from './DmxDataSync';
import FanDataSync from './FanDataSync';
import HvacDataSync from './HvacDataSync';
import IrrigationDataSync from './IrrigationDataSync';
import LightDataSync from './LightDataSync';
import MacroDataSync from './MacroDataSync';
import RgbwDataSync from './RgbwDataSync';
import ScenesDataSync from './ScenesDataSync';
import SequenceDataSync from './SequenceDataSync';
import { createZAudioTable, fetchAllZAudioData } from '../Schema/Devices/ZAudio';
import ZAudioDataSync from './ZAudioDataSync';

const DataSync = {
  initDatabaseTables: () => {
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
    createZAudioTable();
  },

  syncData: (date, setIsLoading) => {
    AreaDataSync(date, setIsLoading);
    ZoneDataSync(date, setIsLoading);
    CameraDataSync(date, setIsLoading);
    CurtainDataSync(date, setIsLoading);
    DmxDataSync(date, setIsLoading);
    FanDataSync(date, setIsLoading);
    HvacDataSync(date, setIsLoading);
    IrrigationDataSync(date, setIsLoading);
    LightDataSync(date, setIsLoading);
    MacroDataSync(date, setIsLoading);
    RgbwDataSync(date, setIsLoading);
    ScenesDataSync(date, setIsLoading);
    SequenceDataSync(date, setIsLoading);
    ZAudioDataSync(date, setIsLoading);
  },

  loadLocalData: setIsLoading => {
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
    fetchAllZAudioData();
    setIsLoading(false);
  },
};

export default DataSync;
