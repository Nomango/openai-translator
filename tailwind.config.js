module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx}'],
  // prefix: 'tw-',
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      boxShadow: {
        tabs: '0 0 12px hsla(174, 65%, 15%, 0.15)',
      },
      borderRadius: {
        tabs: '1rem 1rem 0 0',
      },
      fontFamily: {
        'm-plus-rounded-1c': 'M PLUS Rounded 1c',
      },
    },
  },
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'mcpdark',
    themes: [
      {
        mcplight: {
          primary: '#047AFF',
          secondary: '#463AA2',
          accent: '#C148AC',
          neutral: '#021431',
          'base-100': '#ffffff',
          'base-200': '#F2F7FF',
          'base-300': '#E3E9F4',
          'base-content': '#394E6A',
          info: '#93E7FB',
          success: '#81CFD1',
          warning: '#EFD7BB',
          error: '#E58B8B',

          // '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '1rem', // border radius rounded-btn utility class, used in buttons and similar element
          // '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          // '--animation-btn': '0.25s', // duration of animation when you click on button
          // '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          // '--btn-text-case': 'uppercase', // set default text transform for buttons
          // '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          // '--border-btn': '1px', // border width of buttons
          '--tab-border': '2px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
      {
        mcpdark: {
          primary: '#1C4E80',
          secondary: '#7C909A',
          accent: '#EA6947',
          neutral: '#23282E',
          'base-100': '#202020',
          info: '#0091D5',
          success: '#6BB187',
          warning: '#DBAE59',
          error: '#AC3E31',
          // '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '1rem', // border radius rounded-btn utility class, used in buttons and similar element
          // '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          // '--animation-btn': '0.25s', // duration of animation when you click on button
          // '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          // '--btn-text-case': 'uppercase', // set default text transform for buttons
          // '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          // '--border-btn': '1px', // border width of buttons
          '--tab-border': '2px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
