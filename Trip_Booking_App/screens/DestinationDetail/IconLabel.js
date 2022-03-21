import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { images, icons, COLORS, SIZES } from '../../constants';

const IconLabel = (props) => {
    const {text,img} = props
    return (
        <View style={{ flex:1,alignItems:'center'}}>
            <Image
            source={img}
            style={{
                width:50,
                height:50,
                marginBottom:SIZES.padding
            }}
            />
            <Text style={styles.txtName}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txtName:{
        color:COLORS.black,
        fontSize:SIZES.body3,
        fontWeight:'400'
    },
});

export default IconLabel;