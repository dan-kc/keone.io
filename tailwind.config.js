/** @type {import('tailwindcss').Config} */ const {
  fontFamily,
} = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    maxWidth: {
      0: '0',
      none: 'none',
      xs: '320px',
      sm: '384px',
      md: '448px',
      lg: '512px',
      xl: '576px',
      '2xl': '672px',
      '3xl': '768px',
      '4xl': '896px',
      '5xl': '1024px',
      '6xl': '1152px',
      '7xl': '1280px',
      full: '100%',
      max: 'max-content',
      fit: 'fit-content',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      tomato: {
        1: '#fffcfc',
        2: '#fff8f7',
        3: '#fff0ee',
        4: '#ffe6e2',
        5: '#fdd8d3',
        6: '#fac7be',
        7: '#f3b0a2',
        8: '#ea9280',
        9: '#e54d2e',
        10: '#db4324',
        11: '#ca3214',
        12: '#341711',
      },
      tomatoDark: {
        1: '#1d1412',
        1: '#1d1412',
        2: '#2a1410',
        3: '#3b1813',
        4: '#481a14',
        5: '#541c15',
        6: '#652016',
        7: '#7f2315',
        8: '#a42a12',
        9: '#e54d2e',
        10: '#ec5e41',
        11: '#f16a50',
        12: '#feefec',
      },
      red: {
        1: '#fffcfc',
        2: '#fff8f8',
        3: '#ffefef',
        4: '#ffe5e5',
        5: '#fdd8d8',
        6: '#f9c6c6',
        7: '#f3aeaf',
        8: '#eb9091',
        9: '#e5484d',
        10: '#dc3d43',
        11: '#cd2b31',
        12: '#381316',
      },
      redDark: {
        1: '#1f1315',
        2: '#291415',
        3: '#3c181a',
        4: '#481a1d',
        5: '#541b1f',
        6: '#671e22',
        7: '#822025',
        8: '#aa2429',
        9: '#e5484d',
        10: '#f2555a',
        11: '#ff6369',
        12: '#feecee',
      },
      crimson: {
        1: '#fffcfd',
        2: '#fff7fb',
        3: '#feeff6',
        4: '#fce5f0',
        5: '#f9d8e7',
        6: '#f4c6db',
        7: '#edadc8',
        8: '#e58fb1',
        9: '#e93d82',
        10: '#e03177',
        11: '#d31e66',
        12: '#3d0d1d',
      },
      crimsonDark: {
        1: '#1d1418',
        2: '#27141c',
        3: '#3c1827',
        4: '#481a2d',
        5: '#541b33',
        6: '#641d3b',
        7: '#801d45',
        8: '#ae1955',
        9: '#e93d82',
        10: '#f04f88',
        11: '#f76190',
        12: '#feecf4',
      },
      purple: {
        1: '#fefcfe',
        2: '#fdfaff',
        3: '#f9f1fe',
        4: '#f3e7fc',
        5: '#eddbf9',
        6: '#e3ccf4',
        7: '#d3b4ed',
        8: '#be93e4',
        9: '#8e4ec6',
        10: '#8445bc',
        11: '#793aaf',
        12: '#2b0e44',
      },
      purpleDark: {
        1: '#1b141d',
        2: '#221527',
        3: '#301a3a',
        4: '#3a1e48',
        5: '#432155',
        6: '#4e2667',
        7: '#5f2d84',
        8: '#7938b2',
        9: '#8e4ec6',
        10: '#9d5bd2',
        11: '#bf7af0',
        12: '#f7ecfc',
      },
      violet: {
        1: '#fdfcfe',
        2: '#fbfaff',
        3: '#f5f2ff',
        4: '#ede9fe',
        5: '#e4defc',
        6: '#d7cff9',
        7: '#c4b8f3',
        8: '#aa99ec',
        9: '#6e56cf',
        10: '#644fc1',
        11: '#5746af',
        12: '#20134b',
      },
      violetDark: {
        1: '#17151f',
        2: '#1c172b',
        3: '#251e40',
        4: '#2c2250',
        5: '#32275f',
        6: '#392c72',
        7: '#443592',
        8: '#5842c3',
        9: '#6e56cf',
        10: '#7c66dc',
        11: '#9e8cfc',
        12: '#f1eefe',
      },
      green: {
        1: '#fbfefc',
        2: '#f2fcf5',
        3: '#e9f9ee',
        4: '#ddf3e4',
        5: '#ccebd7',
        6: '#b4dfc4',
        7: '#92ceac',
        8: '#5bb98c',
        9: '#30a46c',
        10: '#299764',
        11: '#18794e',
        12: '#153226',
      },
      greenDark: {
        1: '#0d1912',
        2: '#0c1f17',
        3: '#0f291e',
        4: '#113123',
        5: '#133929',
        6: '#164430',
        7: '#1b543a',
        8: '#236e4a',
        9: '#30a46c',
        10: '#3cb179',
        11: '#4cc38a',
        12: '#e5fbeb',
      },
      sky: {
        1: '#f9feff',
        2: '#f1fcff',
        3: '#e4f9ff',
        4: '#d5f4fd',
        5: '#c1ecf9',
        6: '#a4dff1',
        7: '#79cfea',
        8: '#2ebde5',
        9: '#68ddfd',
        10: '#5fd4f4',
        11: '#0078a1',
        12: '#003242',
      },
      skyDark: {
        1: '#0c1820',
        2: '#071d2a',
        3: '#082636',
        4: '#082d41',
        5: '#08354c',
        6: '#083e59',
        7: '#064b6b',
        8: '#005d85',
        9: '#68ddfd',
        10: '#8ae8ff',
        11: '#2ec8ee',
        12: '#eaf8ff',
      },
      yellow: {
        1: '#fdfdf9',
        2: '#fffce8',
        3: '#fffbd1',
        4: '#fff8bb',
        5: '#fef2a4',
        6: '#f9e68c',
        7: '#efd36c',
        8: '#ebbc00',
        9: '#f5d90a',
        10: '#f7ce00',
        11: '#946800',
        12: '#35290f',
      },
      yellowDark: {
        1: '#1c1500',
        2: '#221a00',
        3: '#2c2100',
        4: '#352800',
        5: '#3e3000',
        6: '#493c00',
        7: '#594a05',
        8: '#705e00',
        9: '#f5d90a',
        10: '#ffef5c',
        11: '#f0c000',
        12: '#fffad1',
      },
      gray: {
        1: '#fcfcfc',
        2: '#f8f8f8',
        3: '#f3f3f3',
        4: '#ededed',
        5: '#e8e8e8',
        6: '#e2e2e2',
        7: '#dbdbdb',
        8: '#c7c7c7',
        9: '#8f8f8f',
        10: '#858585',
        11: '#6f6f6f',
        12: '#171717',
      },
      grayDark: {
        1: '#161616',
        2: '#1c1c1c',
        3: '#232323',
        4: '#282828',
        5: '#2e2e2e',
        6: '#343434',
        7: '#3e3e3e',
        8: '#505050',
        9: '#707070',
        10: '#7e7e7e',
        11: '#a0a0a0',
        12: '#ededed',
      },
      mauve: {
        1: '#fdfcfd',
        2: '#f9f8f9',
        3: '#f4f2f4',
        4: '#eeedef',
        5: '#e9e8ea',
        6: '#e4e2e4',
        7: '#dcdbdd',
        8: '#c8c7cb',
        9: '#908e96',
        10: '#86848d',
        11: '#6f6e77',
        12: '#1a1523',
      },
      mauveDark: {
        1: '#161618',
        2: '#1c1c1f',
        3: '#232326',
        4: '#28282c',
        5: '#2e2e32',
        6: '#34343a',
        7: '#3e3e44',
        8: '#504f57',
        9: '#706f78',
        10: '#7e7d86',
        11: '#a09fa6',
        12: '#ededef',
      },
      slate: {
        1: '#fbfcfd',
        2: '#f8f9fa',
        3: '#f1f3f5',
        4: '#eceef0',
        5: '#e6e8eb',
        6: '#dfe3e6',
        7: '#d7dbdf',
        8: '#c1c8cd',
        9: '#889096',
        10: '#7e868c',
        11: '#687076',
        12: '#11181c',
      },
      slateDark: {
        1: '#151718',
        2: '#1a1d1e',
        3: '#202425',
        4: '#26292b',
        5: '#2b2f31',
        6: '#313538',
        7: '#3a3f42',
        8: '#4c5155',
        9: '#697177',
        10: '#787f85',
        11: '#9ba1a6',
        12: '#ecedee',
      },
      sage: {
        1: '#fbfdfc',
        2: '#f8faf9',
        3: '#f1f4f3',
        4: '#ecefed',
        5: '#e6e9e8',
        6: '#dfe4e2',
        7: '#d7dcda',
        8: '#c2c9c6',
        9: '#8a918e',
        10: '#808784',
        11: '#6a716e',
        12: '#111c18',
      },
      sageDark: {
        1: '#141716',
        2: '#191d1b',
        3: '#1f2421',
        4: '#252a27',
        5: '#2a2f2c',
        6: '#303633',
        7: '#393f3c',
        8: '#4a524e',
        9: '#66736d',
        10: '#75817b',
        11: '#99a29e',
        12: '#eceeed',
      },
    },
    fontFamily: {
      heading: ['var(--font-outfit)', ...fontFamily.sans],
      body: ['var(--font-montserrat)', ...fontFamily.sans],
      display: ['Hermit', 'Monospace', ...fontFamily.mono],
    },
  },
}
