import React from 'react'
import {Text, View} from 'react-native'
import {multiplyByTwo} from '@repo/utils'

export default function App() {
   return (
      <View className="flex-1 items-center justify-center bg-gray-100">
         <Text className="text-2xl font-bold text-red-500">
            w2wXD233
            {multiplyByTwo(21)}
         </Text>
      </View>
   )
}
