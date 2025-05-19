import {Tabs} from 'expo-router';
import {Text} from 'react-native';

export default function tabLayout() {
    return (
        <Tabs ScreenOptions={{headerShown: false}}>
            <Tabs.Screen
                name='welcome'
                options={{
                    title: '소개',
                    tabBarIcon: ({color, size}) => <Text style={{fontSize: 18}}>🏠</Text>
                }}/>
            <Tabs.Screen
                name='menu'
                options={{
                    title: '메뉴',
                    tabBarIcon: ({color, size}) => <Text style={{fontSize: 18}}>🍗</Text>
                }}/>
        </Tabs>
            );
}