const { default: colors } = require("../../assets/theme/colors");

let data = [
	{
		id: 0,
		iconType: 'fa6',
		iconName: 'snowflake',
		title: 'Cool',
		backgroundColor: colors.cardColorOne,
		iconColor: colors.cardIconColorOne,
		value: true,
		elevation: 10,
	},
	{
		id: 1,
		iconType: 'fa6',
		iconName: 'fire-flame-curved',
		title: 'Heat',
		backgroundColor: colors.cardColorTwo,
		iconColor: colors.cardIconColorTwo,
		value: false,
		elevation: 10,
	},
	{
		id: 2,
		iconType: 'fa6',
		iconName: 'fan',
		title: 'Fan',
		backgroundColor: colors.cardColorThree,
		iconColor: colors.cardIconColorThree,
		value: false,
		elevation: 10,
	},
]

export default data;