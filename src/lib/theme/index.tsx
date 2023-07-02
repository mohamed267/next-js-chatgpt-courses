"use client"

import { extendTheme, theme } from "@chakra-ui/react";
import globalStyle from "./styles";
import ButtonComponents from "./components/button";
import InputComponents from "./components/input";

export const baseTheme = extendTheme(
  globalStyle,
  ButtonComponents, 
  InputComponents,
);
