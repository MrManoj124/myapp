import { router } from "expo-router";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SpalshScreen()
{
  const [step,setStep]=useState(0);
  const screens =[
    {     
       animation:require("../assets/Welcome Animation.json"),
       title:"Fast & Reliavle Rides",
       subtitle:"Book taxis instanstly with trusted drivers anytime.",
    },    
    {     
       animation:require("../assets/Location Lottie Animation.json"),
       title:"Track Your Trip",
       subtitle:"Live GPS tracking and scure navigation every ride."
    },
    {     
       animation:require("../assets/Pay Now.json"),
       title:"Easy Payments",
       subtitle:"Pay securely using multiple payment options"
    },
  ];

  const gotoHome=()=>router.replace("/Home");

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(step<screens.length-1) setStep(step+1);
      else gotoHome();
    },3000);
        return()=>clearTimeout(timer) ;
  },[step]);

  const next=()=>step<screens.length-1 ? setStep(step+1) : gotoHome();
  const prev=()=>step>0 && setStep(step-1);

  return(
    <View style={styles.container}>

        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skipText}> Skip </Text>
        </TouchableOpacity>

      <Lottie animationData={screens[step].animation}
               loop autoplay style={styles.animation} />
        <Text style={styles.title}>{screens[step].title} </Text>       
        <Text style={styles.subtitle}>{screens[step].subtitle} </Text>     

      <View style={styles.btnRow}>
        { step >0 ? (
                <TouchableOpacity style={styles.navBtn} onPress={prev}>
                  <Text style={styles.navTxt}> Previous </Text>
                </TouchableOpacity>
        ):(
          <View style={{ width:60}}  />
        )
      } ;
        {step === screens.length-1 ? (
            <TouchableOpacity style={styles.getBtn}>
              <Text style={styles.getTxt}> GetStarted </Text>
            </TouchableOpacity>
        ):(
          <TouchableOpacity style={styles.navBtn}>
          <Text style={styles.navTxt}> Next </Text>
        </TouchableOpacity>
        )}

      </View>


    </View>

  )
}