import { View,Text,StyleSheet,TouchableOpacity,Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import images from "../../constants/images";
import LinearGradient from 'react-native-linear-gradient';
import ButtonList from "./ButtonList";


const HomeView = (props) => {
    const navigation = useNavigation(); 
    // const navigate = useNavigation();
    const {data} = props
    return(
        <View style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={{flex:1,paddingHorizontal:SIZES.padding,marginTop:SIZES.base}}>
                <Image
                    source={images.homeBanner}
                    resizeMode='cover'
                    style={{
                        width:'100%',
                        height:'100%',
                        borderRadius:15
                    }}
                />
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding,marginVertical:35}}>
                    <ButtonList
                        bgColor={['#46aeff', '#5884ff']}
                        lablel={'Flight'}
                        icon={icons.airplane}
                        onPres={() => console.log('hi')}
                    />
                    <ButtonList
                        bgColor={['#fbdf75', '#f1d35f']}
                        lablel={'Train'}
                        icon={icons.train}
                        onPres={() => console.log('hi')}
                    />
                    <ButtonList
                        bgColor={['#e370b6', '#fb1aa3']}
                        lablel={'Bus'}
                        icon={icons.bus}
                        onPres={() => console.log('hi')}
                    />
                    <ButtonList
                        bgColor={['#ea9aae', '#e266bb']}
                        lablel={'Taxi'}
                        icon={icons.taxi}
                        onPres={() => console.log('hi')}
                    />
                </View>
                <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding}}>
                    <ButtonList
                        bgColor={['#f3c066', '#ed9e5f']}
                        lablel={'Hotel'}
                        icon={icons.bed}
                        onPres={() => console.log('hi')}
                    />
                    <ButtonList
                        bgColor={['#7cebfd', '#61c5fe']}
                        lablel={'Eats'}
                        icon={icons.eat}
                        onPres={() => console.log('hi')}
                    />
                    <ButtonList
                        bgColor={['#81e49a', '#72ceaf']}
                        lablel={'Adventure'}
                        icon={icons.compass}
                        onPres={() => console.log('hi')}
                    />
                    <ButtonList
                        bgColor={['#eb9e94', '#e77c71']}
                        lablel={'Event'}
                        icon={icons.event}
                        onPres={() => console.log('hi')}
                    />
                </View>
            </View>
            <View style={{flex:1}}>
                <View style={{paddingHorizontal:SIZES.padding,marginTop:30}}>
                    <Text
                        style={{
                            color:COLORS.black,
                            fontSize:SIZES.body3,
                            fontWeight:'700'
                        }}
                    >Destination</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem = {({item, index}) => (
                            <View style={{
                                paddingRight:SIZES.padding/2
                                }}>
                                <TouchableOpacity style={{justifyContent:'center'}}
                                    onPress={() => navigation.navigate('DestinationDetail',{item})}
                                >
                                    <Image
                                    resizeMode='cover'
                                    source={item.img}
                                    style={styles.img}
                                    />
                                </TouchableOpacity>
                                <Text style={{
                                    color:COLORS.black,
                                    fontSize:SIZES.body4,
                                    fontWeight:'600'
                                }}>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    icon:{
        width:25,
        height:25,
        tintColor:COLORS.white
    },
    linearGradient:{
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    img:{
        height:'83%',
        width:SIZES.width*0.25,
        borderRadius:10,
    }
})

export default HomeView;
