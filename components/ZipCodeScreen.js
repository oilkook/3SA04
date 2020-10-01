import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const availableZipItems = [
    { place: '1.Phuket', code: '83000'},
    { place: '2.Suratthani', code:'84000'},
    { place: '3.Hatyai', code: '90110' },
    { place: '4.Trang', code: '92000' },
    { place: '5.Chiangmai', code: '50000' },
    { place: '6.Bangkok', code: '10000'},
    { place: '7.Chiangrai', code: '57000' },
    { place: '8.Chonburi', code: '20000' },
    { place: '9.Khonkaen', code: '40000'},
    { place: '10.Chaiyaphum', code: '36000'},

    

]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code } )}underlayColor="#9370DB">
        <View style={styles.item}>
            <Text style={styles.backdrop}>{place}</Text>
            <Text style={styles.backdrop}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('../bg2.jpg')} style={styles.item}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            </ImageBackground> 
            <StatusBar style="auto" />
            
        
       </View>
    );
}
const styles = StyleSheet.create({
    
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 55,
        
   
    },
    
    backdrop: {
        alignItems: 'center',
        backgroundColor: '#9370DB',
        borderBottomWidth: 20,
        width: '40%',
        height: '70%',
        fontSize: 20,
        color: '#FFF',
    },
     backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',  
    },
})