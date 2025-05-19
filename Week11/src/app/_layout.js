import {Text} from 'react-native';
import {Tabs} from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name='hello'
                options={{
                    title: '인사',
                    tabBarIcon: ({color, size, focused}) => (
                        <Text style={{fontSize: 20}}>
                            {focused ? '🎈' : '🎆'}
                        </Text>
                    ),
                }}
            />
            <Tabs.Screen
            name='aouts'
            options={{
                title: '우리는요',
                tabBarIcon: ({color, size, focused}) => (
                    <Text style={{fontSize: 20}}>
                        {focused ? '👓' : '🕶'}
                    </Text>
                    ),
                }}
            />
        </Tabs>
    );
}