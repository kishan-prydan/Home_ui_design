import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import FAIcon6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const getIconFont = type => {
  switch (type) {
    case 'material':
      return MaterialIcon;
    case 'materialCommunity':
      return MaterialCommunityIcons;
    case 'entypo':
      return Entypo;
    case 'fa':
      return FAIcon;
    case 'fa5':
      return FAIcon5;
    case 'fa6':
      return FAIcon6;
    case 'ant':
      return AntDesign;
    default:
      return FAIcon;
  }
};

const Icon = ({type, ...props}) => {
  const FontICon = getIconFont(type);

  return <FontICon {...props} />;
};

export default Icon;
