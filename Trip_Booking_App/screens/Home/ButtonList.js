import { View,Text,StyleSheet,TouchableOpacity,Image } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import images from "../../constants/images";
import LinearGradient from 'react-native-linear-gradient';


const ButtonList = (props) => {
    // const navigation = useNavigation(); 
    const {onPress,icon,lablel,bgColor} = props
    return(
        <TouchableOpacity
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={onPress}
    >
        <View style={[styles.shadow,{ width: 60, height: 60}]}>
            <LinearGradient
                style={styles.linearGradient}
                colors={bgColor} 
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor: COLORS.white,
                        width: 30,
                        height: 30,
                    }}
                />
            </LinearGradient>
        </View>
        <Text style={{ marginTop: SIZES.base, color: COLORS.gray }}>{lablel}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    icon:{
        width:25,
        height:25,
        tintColor:COLORS.white
    },
    linearGradient:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 15,
    },
    shadow:{
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default ButtonList;
