/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],

  content: [],
  theme: {
    extend: {
      fontFamily: {
        generalFont: ['rational','sans-serif'],
        millionaire: ['millionaire','sans-serif'],
        bolkit: ['bolkit','rational','sans-serif'],
        interFont: ['interFont','sans-serif'],
        'sans': ['rational','sans-serif'],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#405B39",
          accent: "#EFEEE9",
          light:"#FAF7F3"
          
        },
        
        dark: {
          DEFAULT: "#1F1F1F",
          light: "#353535",
          lightest: "#254474",
          lighter:"#4F5965",
          text:"#98A6B8",
        
          paragraphText:"#0B1126"
        },
        blueGrey: "#525D7D",
        muted: "#141924B3",
        disabled: "#F5F5F7",
        grey: {
          DEFAULT: "#33333380",
          light: "#E6E6F2",
          lighter: "#F8F8F8",
          lightest: "#FAFAFA",
          liner:"#7b7f72",
          text:"#B5B0A5",
          dark: "#5C6052",
          accent:"#CCCAC3",
          hover:'#e0dfd9'
          
        },
        yellow: "#F4B83E",
        orange:"#FC967F",
        green:"#4ECB71",
        red:"#E74F62",
        newsletter:"#c4c0b5"
      },
      spacing: {
        wrapper: "6.438rem",
        "wrapper-xl": "9rem",
        "wrapper-sm": "1.375rem",
        100: "34rem",
      },

      minHeight: {
        "todo-modal": "608px",
        "form-box": "621.73px",
        mainSection:'120vh'
      },
      maxHeight: {
        "todo-modal": "608px",
      },
      maxWidth: {
        "todo-modal": "470px",
        "form-box": "400.2px",
      },
      borderRadius: {
        eventCard: "0.188rem",
        testimonialCard:".6rem",
        image:'0rem',
      },
      borderWidth: {
        middle: ".5px",
      },
      width: {
        btn: "7.5rem",
        btn_x: "8.375rem",
        w_line:"96%",
        w_image:"23.75rem",
        highLightImage:"22rem"
      },
      height: {
        line:".7px",
        eventCard:"12rem",
        btn: "2.5rem",
        mainSection:'150vh',
        highLightImage:"22rem",
        virtualImage:"26.75rem",
        videoSection:"40rem",
        newsletter:'24rem'
      
       
      },
      padding: {
        404: "140px",
        btn: ".688rem",
      },
      margin: {
        mBtwLinks: "1.813rem",
      },

      animation: {
        scaleto: "scaleto 2s ease  infinite",
        appear: "opacityTo 1.4s ease  both",
        lineTo:"lineTo .5s 1.3s ease both  ",
        translateY:"translateY .5s 1.3s ease both  ",
        expanded:"expanded 1s  ease both",
        logoTitle:'logoTitle .6s  ease-out both',
        logoSTitle:'logoTitle .6s .3s  ease-out both',
        zoom:'zoom 1.2s 1s  ease  infinite',
      },
      keyframes: {
        scaleto: {
          "0%": { transform: "scale(0)" ,opacity:"1"},
          "50%": { transform: "scale(1.5)" ,opacity:"0"},
          "100%": { transform: "scale(0)" ,opacity:"0"},
        },
        opacityTo:{
          "100%":{opacity:"1"}
        },
        lineTo:{
          "100%":{width:'96%'}
        },
        translateY:{
          "100%":{transform:'translateY(0)',opacity:1}
        },
        expanded:{
          "100%":{width:'100%',height:'100%',transform:"translate(0,0)",borderRadius:0}
        },
        logoTitle:{
          "100%":{transform:'translateY(0)',opacity:1}
        },
        zoom:{
          "0%":{transform:"translateY(0)",opacity:.5},
          "50%":{transform:"translateY(10px)",opacity:1},
          "100%":{transform:"translateY(0)",opacity:.5},
        }
      },
      lineHeight: {
        24: "24px",
      },
      backgroundColor:{
        'projectBgHover':'rgba(37, 68, 116,1)',
        'projectBg':'rgba(37, 68, 116, 0.63)'
      },
      backgroundImage:{
        'hero-service-card': "linear-gradient(0.98deg, rgba(121, 121, 121, 0.25) 1.5%, rgba(121, 121, 121, 0) 75%)",
        'hero-service-card-overlays':"radial-gradient(50% 50% at 50% 50%, rgba(243, 146, 0, 0.38) 0%, rgba(243, 146, 0, 0) 78.12%, rgba(243, 146, 0, 0) 100%)",
        'hero-project-card-overlays':"linear-gradient(301.44deg, #F19833 -16.37%, rgba(240, 149, 50, 0) 95.74%)",
        'bg-plan-card':'linear-gradient(0.46deg, #162844 41.12%, #44597C 109.89%)',
        'bg-ourGoalItem':'linear-gradient(0.98deg, rgba(121, 121, 121, 0.25) 1.5%, rgba(121, 121, 121, 0) 109.71%)'


      },
      boxShadow:{
        'planCard':'0px 9px 33px 0px #304C8191',

        'featureCard':'0px 9px 16px #0000000A'
      },
      inset: {
        'magazine': '60%',
        figure:"32%",
        video:"80"
      }
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".0,8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3.2rem",
      "6xl": "4rem",
      "7xl": "5rem",
      btnSmall:".9rem",
      eventTitle: "1.4rem",
      mainTitle:"2.2rem",
      secondTitle:"1.7rem",
    

    },
  },
  plugins: [],
}
