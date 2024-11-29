import React from 'react';
import { Text, View } from 'react-native';
import { multiplyByTwo } from "@repo/utils";

export default function App() {

    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <Text className="text-red-500 text-2xl font-bold">
                wwXD{multiplyByTwo(21)}
            </Text>
        </View>
    );
}
