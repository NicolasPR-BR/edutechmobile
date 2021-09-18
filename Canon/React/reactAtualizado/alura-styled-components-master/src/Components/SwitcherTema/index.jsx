import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

const claro = <Icone src={ThemeOn} alt="tema claro" />;
const escuro = <Icone src={ThemeOff} alt="tema escuro" />;

export default ({ tema }) => (tema ? escuro : claro);
