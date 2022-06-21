// Add global styles and fonts here


const time = () => {
  const today = new Date()
  const currTime = today.getHours()
  return currTime > 7 && currTime < 19
}

console.log(time())

const theme = {
  breakpoints: {
    small: {
      ceiling: '32em',
      floor: '31.9em'
    },
    middle: {
      ceiling: '42em',
      floor: '41.9em'
    },
    headerStyle: {
      ceiling: '890px',
      floor: '889px'
    }
  },
  colors: {
    background: time() ? '#67a8bf' : '#63232d',
    backgroundAlt: time() ? '#fdd9a1' : '#6f6c87',
    backgroundDark: time() ? '#67a8bf' : '#2C353C',
    backgroundBrown: '#fdd9a1',
    header: '#42344D',
    headerAlt: '#F5E5D5',
    mainFlipped: '#2C353C',
    mainDark: time() ? '#2C353C' : '#fdd9a1',
    mainAlt: '#e8893c'
  },
  fonts: {
    main: `'Amatic SC', sans-serif;`,
    heading: `'Jost', serif;`
  }
}
//#a1e5fd
//#fdd9a1
export default theme
