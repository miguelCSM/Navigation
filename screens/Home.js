import React from 'react';
import {View, Text, Button} from 'react-native'

const Home = ({navigation}) =>{
    return(
        <View>
            <Text>Home Page (View)</Text>
            <Button onPress = {()=>navigation.navigate('Details')} title= "Next Screen"></Button>
        </View>
    )
}

export default Home