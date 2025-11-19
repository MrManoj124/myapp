import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Home()
{

    return(
        <View style={styles.container}>
            <Text style={styles.title}> WelCome</Text>
            <Text style={styles.subtitle}> Open for more details </Text>

        </View>
    )

}

const styles=StyleSheet.create(
{
    container:{
        flex: 1,
        backgroundColor: "#F5F7FF",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        marginTop: 20,
        color: "#111",
        textAlign: "center",
        letterSpacing: 0.5,
      },
      subtitle: {
        fontSize: 17,
        color: "#6a6a6a",
        textAlign: "center",
        paddingHorizontal: 25,
        marginTop: 10,
        lineHeight: 22,
      },
    
    
})
