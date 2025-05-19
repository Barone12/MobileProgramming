import { SectionList, StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function Category1() {
    const navigation = useNavigation();

    function menuRenderItem({item}){
        return (
            <View style={styles.itemContainer}>
                {item.image ?(
                    <Image style={styles.image}
                           source={item.image}
                           resizeMode={'contain'}/>
                ):null
                }

                <Text style={styles.itemName}>
                    {item.name}
                </Text>
                <Text style={styles.itemPrice}>
                    {item.price}
                </Text>
            </View>
        )
    }

    const menuKeyExtractor = function(item, index) {
        return (`${item.name}-${index}`);
    }
    const Header = ({ text = "메뉴판" }) => {
        return (
            <View style={styles.topBottomContainer}>
                <Text style={styles.headerFooterText}>
                    {text}
                </Text>
            </View>
        );
    };
    

    const menuSections = [
        {
            title: '식사류',
            data: [
                { name: '비빔밥', price: 9000, image: require('assets/images/bibimbab.jpg') },
                { name: '불고기비빔밥', price: 10000 },
                { name: '육회비빔밥', price: 11000 },
                { name: '김치볶음밥', price: 8500 },
                { name: '제육덮밥', price: 9500 },
                { name: '오징어덮밥', price: 9500 },
                { name: '돌솥비빔밥', price: 10000 },
                { name: '불고기덮밥', price: 10000 },
                { name: '된장찌개', price: 8000 },
                { name: '김치찌개', price: 8500 },
                { name: '순두부찌개', price: 8500 },
            ],
        },
    ];

    const sectionHeader = ({section}) => {
        return(
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
        )
    }



    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <SectionList
                    sections={menuSections}
                    renderItem={menuRenderItem}
                    renderSectionHeader={sectionHeader}
                    keyExtractor={menuKeyExtractor}
                    ListHeaderComponent={() => <Header/>}
                    ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#495E57',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#DEE0CA',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topBottomContainer: {
        backgroundColor: '#C1C977',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
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
    headerFooterText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sectionHeader: {
        backgroundColor: '#77C983',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
    }
});