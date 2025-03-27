import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function MenuList() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <FlatList
                    data={menuItemsToDisplay}
                    renderItem={menuRenderItem}
                    keyExtractor={menuKeyExtractor}
                    ItemSeparatorComponent={Header}
                    ListFooterComponent={Footer}
                    />
            </View>
        </View>
    );
}

function menuRenderItem({item}){
            return (
                <View style={styles.itemContainer}>
                    <Text style={styles.itemName}>
                        {item.name}
                    </Text>
                    <Text style={styles.itemPrice}>
                        {item.price}
                    </Text>
                </View>
            )
}

const menuKeyExtractor = (item, index) => `${index}`
const Header = (props) => {
    return (
        <View style={styles.topBottomContainer}>
            <Text style={styles.headerFooterText}>
                {props.text}{' '}메뉴판
            </Text>
        </View>
    );
}
const Footer = props => {
    return (
        <View style={styles.topBottomContainer}>
            <Text style={styles.headerFooterText}>
                {props.text}{' '}단체 손님 환영
            </Text>
        </View>
    )
}
const menuItemsToDisplay = [
    {name: '설렁탕', price: 10000}
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    contentContainer: {
        flex: 0.7,
         backgroundColor: '#DEE0CA',
    },
    topBottomContainer: {
        backgroundColor: '#C1C977',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    headerFooterText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemSeperator: {
        borderBottomWidth: 1,
        borderColor: '#5C5655'
    },
    itemName: {
        fontSize: 18,
    },
    itemPrice: {
        fontSize: 14,
    },
});
