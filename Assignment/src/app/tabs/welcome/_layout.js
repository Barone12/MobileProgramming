import {Slot} from 'expo-router';

export default function welcomeLayout() {
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
                name='aoutus'
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