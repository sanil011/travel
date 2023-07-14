import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {HeroImage} from "../assets"
import * as Animatable from 'react-native-animatable';


export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    },[])
  return (
      <SafeAreaView style = {styles.droidSafeArea}>
          {/* first section */}
          
          <View className='flex-row px-4 mt-4 items-center space-x-2'>
              <View className='w-16 h-16 bg-black rounded-full items-center justify-center'>
                  <Text className='text-green text-3xl font-semibold'>Go</Text>
              </View>
              <Text className='text-[#2A2B4B] text-3xl font-semibold'>Travel</Text>
          </View>

          {/* Second Section */}

          <View className='px-4 mt-4 space-y-2'>
              <Text className='text-[#3C6072] text-[40px] '>Enjoy the trip with</Text>
              <Text className='text-green text-[38px] font-bold' >Good Moments</Text>

              <Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum.
              </Text>
          </View>

          {/* Circle Section */}

          <View className='w-96 h-96 bg-green rounded-full absolute bottom-16 -right-40'></View>
          <View className='w-80 h-80 bg-[#E99265] rounded-full absolute -bottom-28 -left-36'></View>

          {/* Image */}

          <View className='flex-1 relative items-center justify-center'>
              <Animatable.Image
                  animation='fadeIn'
                  easing='ease-in-out'
                  source={HeroImage}
                  className='w-full h-full object-cover'
              />
          <View className='absolute w-24 h-24 bottom-20 rounded-full  items-center justify-center border-l-2 border-r-2 border-t-4 border-green'>
                  <TouchableOpacity onPress={()=> navigation.navigate("Discover")}>
                      <Animatable.View
                          animation={'pulse'}
                          easing='ease-in-out'
                          iterationCount={'infinite'}
                          className='w-20 h-20 items-center justify-center rounded-full bg-green'>
                          <Text className='text-gray-50 text-[32px] font-semibold'>Go</Text>
                      </Animatable.View>
              </TouchableOpacity>
          </View>
          </View>

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
});