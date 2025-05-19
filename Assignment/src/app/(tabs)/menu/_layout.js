import {Drawer} from 'expo-router/drawer';

export default function menuLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{title: '전체메뉴'}}
            />
            <Drawer.Screen
                name="category1"
                options={{title: '설렁탕'}}
            />
            <Drawer.Screen
                name="category2"
                options={{title: '식사류'}}
            />
            <Drawer.Screen
                name="category3"
                options={{title: '찜/구이류'}}
            />
            <Drawer.Screen
                name="category4"
                options={{title: '해물류'}}
            />
            <Drawer.Screen
                name="category5"
                options={{title: '음료/디저트'}}
            />
        </Drawer>   
        );
        
}