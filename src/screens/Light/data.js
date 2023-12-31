import colors from '../../assets/theme/colors';

let data = [
  {
    type: 'fa6',
    name: 'lightbulb',
    color: colors.iconSecondColor,
    value: 0,
    text: 'Light 1',
    iconColor: colors.iconColor,
    titleTextPresent: true,
    switchTitleText: false,
  },
  {
    type: 'fa6',
    name: 'lightbulb',
    color: colors.iconThirdColor,
    value: 42,
    iconColor: colors.yellow,
    text: 'Light 2',
    titleTextPresent: true,
    switchTitleText: false,
  },
  {
    type: 'fa6',
    name: 'lightbulb',
    color: colors.iconForthColor,
    value: 0,
    iconColor: colors.iconColor,
    text: 'Conf 1',
    titleTextPresent: true,
    switchTitleText: false,
  },
  {
    type: 'fa6',
    name: 'lightbulb',
    iconColor: colors.yellow,
    color: colors.iconFifthColor,
    value: 55,
    text: 'Conf 2',
    titleTextPresent: true,
    switchTitleText: false,
  },
  {
    type: 'fa6',
    name: 'lightbulb',
    iconColor: colors.iconColor,
    color: colors.iconSixthColor,
    value: 100,
    text: 'Reception',
    titleTextPresent: true,
    switchTitleText: false,
  },
  {
    type: 'fa6',
    name: 'lightbulb',
    iconColor: colors.yellow,
    color: colors.iconSeventhColor,
    switchText: 'Star light',
    switchTitleText: true,
    titleTextPresent: false,
  },
];
export default data;
