const mainColors = {
  red1: '#E06379',
  greenLight: '#edfcfd',
  dark1: '#112340',
  dark2: '#495a75',
  dark3: '#8092AF',
  grey1: '#7d8797',
  grey2: '#e9e9e9',
  grey3: '#edeef0',
  blue1: '#0066cb',
};

export const colors = {
  primary: mainColors.red1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  black: 'black',
  white: 'white',
  disable: mainColors.grey3,

  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.red1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.red1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.greenLight,
};
