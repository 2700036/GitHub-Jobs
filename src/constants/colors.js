const pallete = {
  violet: 'rgb(96, 106, 215)',
  violetLight: 'rgb(148, 156, 244)',
  blueDark: 'rgb(25, 33, 46)',
  midnight: 'rgb(18, 23, 33)',
  white: 'rgb(255, 255, 255)',
  grayLight: 'rgb(243, 245, 247)',
  gray: 'rgb(158, 175, 194)',
  grayDark: 'rgb(109, 127, 151)',
};

const colors = {  
  light: {
    bg: pallete.grayLight,
    mainBase: pallete.white,
    heading: pallete.blueDark,
    textMain: pallete.grayDark,
    companySiteBtn: pallete.violet,
    border: pallete.white,
    spinner: 'black',
    backToTop: 'rgba(25, 33, 46, 0.8)',
    error: ' rgba(255, 0, 0, 0.8)',    
  },
  dark: {
    bg: pallete.midnight,
    mainBase: pallete.blueDark,
    heading: pallete.white,
    textMain: pallete.grayDark,
    companySiteBtn: pallete.white,
    border: pallete.midnight,
    spinner: pallete.violet,
    backToTop: pallete.violet,
    error: ' rgba(255, 0, 0, 0.4)',  
  }



};

export default colors;