import {router} from "expo-router";
import { use, useEffect, useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Lottie from "lottie-react-native";

export default function SpalshScreen() {\
  const [step,setStep]=useState(0);
  const screens = 
  {
    animation: require("../assets/Welcome Animation.json"),
    title: "Fast & Reliavle Rides",
    subtitle:"Book taxis instantly with trusted drivers anytime.",
  },
  {
    animation: require("../assets/Location Lottie Animation.json"),
    title:"Track Your Trip",
    subtitle:"Live GPS tracking and secure navigation every ride"
  },
  {
    animation: require("../assets/Pay Now.json"),
    title:"Easy Payments",
    subtitle:"Pay securely using multiple payment option."
  };
];

const gotoHome=()=>{router.replace("/Home");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(step<screens.length-1){
        setStep(step+1);
      }else{
        gotoHome();
      }
    },3000);
    return()=>clearTimeout(timer);
  },[step]);


  const next=()=>step<screens.length-1?setStep(step+1):gotoHome();
  const prev=()=>step>0&&setStep(step-1);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} >
        <Text style={styles.skipButtonText} onPress={gotoHome}>Skip</Text>
      </TouchableOpacity>
      <Lottie
        animationData={screens[step].animation}
        autoPlay loop style={styles.animation} />
      <Text style={styles.title}>{screens[step].title}</Text>
      <Text style={styles.subtitle}>{screens[step].subtitle}</Text>
      
      <View style={styles.btnRow}>
        {step > 0 ? (
          <TouchableOpacity onPress={prev} style={styles.navBtn}>
            <Text style={styles.navBtn}>Previous</Text>
          </TouchableOpacity>
        ) : (<View style={{width:60}}/>  
   )};
      {step === screens.length - 1 ? (
        <TouchableOpacity style={StyleSheet.getBtn}>
          <Text style={StyleSheet.getTxt}></Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.navBtn
          <Text style={styles.navTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}