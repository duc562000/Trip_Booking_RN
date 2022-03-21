import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import React from "react";
import images from "../../constants/images";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import icons from "../../constants/icons";
import StarReview from "./StarReview";
import IconLabel from "./IconLabel";
import LinearGradient from "react-native-linear-gradient";

const DestinationDetailView = (props) => {
    const navigation = useNavigation()
    const {title,description,home,paking,cloud,about,price,rate,country,img} = props
    return(
        <View style={{flex:1,}}>
            <View style={{flex:1.2,alignItems:'center'}}>
                <Image
                    source={img}
                    style={styles.img}
                />
                <View style={{
                position:'absolute',
                width:'90%',
                backgroundColor:COLORS.white,
                top:250,
                borderRadius:15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                }}>
                    <View style={{flexDirection:'column',margin:SIZES.padding}}>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                source={img}
                                style={{
                                    width:70,
                                    height:70,
                                    marginRight:SIZES.padding,
                                    borderRadius:15
                                }}
                            />
                            <View style={{justifyContent:'space-between'}}>
                                <Text style={styles.txtName}>{title}</Text>
                                <Text style={styles.txtGray}>{country}</Text>
                                <StarReview
                                    rate={rate}
                                />
                            </View>
                        </View>
                        <Text style={[styles.txtGray,{
                            fontWeight:'600',
                            fontSize:SIZES.h3,
                            lineHeight:24,
                            paddingTop:SIZES.padding/2
                        }]}>{description}</Text>
                    </View>
                </View>

            </View>
            <View style={{position:'absolute',top:30,flexDirection:'row'}}>
                    <TouchableOpacity
                        style={{padding:SIZES.padding,flex:1}}
                        onPress={navigation.goBack}
                    >
                        <Image
                            style={{
                            width:23,
                            height:23
                            }}
                            source={icons.back}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{padding:SIZES.padding,alignItems:'flex-end'}}
                        // onPress={}
                    >
                        <Image
                            style={{
                            width:23,
                            height:23
                            }}
                            source={icons.menu}
                        />
                    </TouchableOpacity> 
            </View>
            <View style={{flex:1/4,marginTop:SIZES.padding*3,paddingHorizontal:SIZES.padding/2,flexDirection:'row'}}>
                <IconLabel
                    img={icons.villa}
                    text={home}
                />
                <IconLabel
                    img={icons.parking}
                    text={paking}
                />
                <IconLabel
                    img={icons.wind}
                    text={cloud}
                />
            </View>
            <View style={{flex:1/5,padding:SIZES.padding}}>
                <Text style={styles.txtName}>About</Text>
                <Text style={[styles.txtGray,{
                            height:150,
                            fontWeight:'600',
                            fontSize:SIZES.h3,
                            lineHeight:24,
                            paddingTop:SIZES.padding/2
                        }]}>{about}</Text>
            </View>
            <View style={{flex:1/4,marginTop:100,paddingHorizontal:SIZES.padding}}>
                <LinearGradient
                        style={[{ height: 60, width: '100%', borderRadius: 15 }]}
                        colors={['#edf0fc', '#d6dfff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                                <Text style={styles.txtName}>${price}</Text>
                            </View>

                            <TouchableOpacity
                                style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                                onPress={() => { console.log("Booking on pressed") }}
                            >
                                <LinearGradient
                                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                    colors={['#46aeff', '#5884ff']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                >
                                    <Text style={{ color: COLORS.white,fontWeight:'800' }}>BOOKING</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
            </View>
            
    </View>
    );
}

const styles = StyleSheet.create ({
    img:{
        width:SIZES.width,
        height:"90%"
    },
    txtName:{
        color:COLORS.black,
        fontSize:SIZES.body3,
        fontWeight:'600'
    },
    txtGray:{
        color:COLORS.gray,
        fontSize:SIZES.body4,
        fontWeight:'500'
    }
})

export default DestinationDetailView;
