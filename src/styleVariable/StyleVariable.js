// very common styles will be stored here

import { Dimensions } from "react-native";

let widthWindow = Dimensions.get("window").width;
let heightWindow = Dimensions.get("window").height;

//IMPORTANT NOTE! Never use numbers in styling. for examples for paddings and margins use width/40 or '2%'
export const StyleVariables = {
    // logo is not so common but try to define common styles here
    width: widthWindow,
    height: heightWindow,
};
