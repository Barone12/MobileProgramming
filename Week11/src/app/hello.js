import {View, Text} from 'react-native';
import {Component} from "react";

export default function HelloScreen() {
    return(
        <View
            style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
            <Text>안녕 페이지</Text>
        </View>
    )
}