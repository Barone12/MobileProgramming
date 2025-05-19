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
            title: '찜/구이류',
            data: [
                { name: '불고기', price: 15000 },
                { name: '갈비', price: 20000 },
                { name: '삼겹살', price: 12000 },
                { name: '돼지갈비', price: 17000 },
                { name: '한우불고기', price: 25000 },
                { name: '불닭', price: 14000 },
                { name: '오리불고기', price: 18000 },
                { name: '고등어구이', price: 12000 },
                { name: '황태구이', price: 15000 },
                { name: '갈치구이', price: 16000 },
            ],
        }
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