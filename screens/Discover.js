import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { Avatar } from "../assets";
export default function Discover() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
  return (
      <SafeAreaView style={styles.droidSafeArea}>
          <View className='flex-row items-center justify-between px-6'>
              <View>
                  <Text className='text-4xl text-[#0B646B] font-bold'>Discover</Text>
                  <Text className='text-[#527283] text-3xl'>the beauty today</Text>
              </View>
              <View className='w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg'>
                  <Image
                       className='w-full h-full rounded-md object-cover'
                      source={Avatar} />
              </View>
          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'android' ? 45 : 0
    },
});