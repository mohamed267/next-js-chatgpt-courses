"use client"

import { getColor } from "@/utils/chakra"
import { mode } from '@chakra-ui/theme-tools';

const globalStyle = {
  colors: {
    transparent: "transparent",
    bg: {
        // light: "#F2F2F2",
        white: '#ffffff',
        dark: "#0b1437"
    },
    card: {
      light: "#F2F2F2",
      dark: "#111c44"
    },
    primary: {
      50: "#E8F0F1",
      100: "#F5F9F9",
      200: "#EFFBF8",
      300: "#D4EBEE",
      500: "#30A7AA",
    },
    green: {
      200: "#EFFBF8",
      400: "#34D1A8",
      500: "#17FC26",
    },
    secondary: {
      300: "#F5F9F9",
    },
    gray: {
      200: "#F2F2F2",
      100: "#F2F5F5", 
      300: "#bab8b7",
      600: "#707070",
      700: "#646464",
      900: "#3D3D3D",
    },
    black: {
      700: "#1E1D1D",
    },
    danger: {
      200: "#FCF6F6",
      300: "#F84F4F",
      400: "#F16164",
      500: "#FF0101",
    },
    yellow: {
      300: "#FFF700",
      500: "#EEFF00",
    },
    audioPlayer: {
      400: "#f1f3f4",
    },
  },
  fonts: {
    head: `Lato black`,
  },
  shadows: {
    prEdit: `0 0 0 2px ${getColor("primary.500")}`,
  },

  styles: {
		global: (props: any) => ({
      body: {
        bg: mode("bg.light" , "bg.dark" )(props) ,
      },
      "*:not(font)": {
        fontFamily: "'Montserrat', sans-serif;",
      },
      h1: {
        fontSize: "4xl",
        fontWeight: "semibold"
      },
      h2:{
        fontSize: "3xl"
      },
      h3:{
        fontSize: "2xl"

      },
      h4:{
        fontSize: "xl"
      },
      h5:{
        fontSize: "lg"

      }
      
    })
  }
};

export default globalStyle;
