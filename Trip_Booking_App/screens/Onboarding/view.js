import { View,Text,StyleSheet, Touchable, TouchableOpacity,Image } from "react-native";
import React from "react";
import images from '../../constants/images'
import { COLORS, SIZES } from "../../constants/theme";
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabBottomNavigtor from "../../routers/TabBottomNavigtor";
import { useNavigation } from '@react-navigation/native';

const OnboardingView = () => {
    const navigation = useNavigation(); 
    return(
        <View style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image
                    source={images.onboardingImage}
                    resizeMode='contain'
                    style={{
                        width:SIZES.width,
                        height:SIZES.height
                    }}
                />
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.title}>Digital Ticket</Text>
                    <Text style={styles.txtContent}>This event is fired when the swipe gesture is cancelled for the current screen.</Text>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <LinearGradient 
                            colors={['#4eaefe', '#5397fe', '#5786fe']} 
                            style={styles.linearGradient}
                            start={{x:1,y:1}}
                            start={{x:0,y:0}}
                        >
                            <Text style={styles.txt}>Start !</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:SIZES.h2,
        fontWeight:'600',
        paddingVertical:15
    },
    txtContent : {
        fontSize:SIZES.h3,
        lineHeight:25,
        color:COLORS.gray,
        fontWeight:'500',
        paddingHorizontal:50
    },
    btn:{
        height:50,
        width:250,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:SIZES.padding*5,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    linearGradient:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    txt:{
        color:COLORS.white,
        fontSize:SIZES.body3,
        fontWeight:'700'
    }
})
export default OnboardingView;
