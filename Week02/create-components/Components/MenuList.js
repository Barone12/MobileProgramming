import {StatusBar} from 'expo-status-bar';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

export default function MenuList() {

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

    const Footer = ({ text = "단체 손님 환영" }) => {
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
            title: '설렁탕류',
            data: [
                { name: '설렁탕', price: 10000 },
                { name: '특설렁탕', price: 12000 },
                { name: '곰탕', price: 10000 },
                { name: '도가니탕', price: 15000 },
                { name: '특도가니탕', price: 17000 },
                { name: '우족탕', price: 15000 },
                { name: '꼬리곰탕', price: 18000 },
                { name: '갈비탕', price: 13000 },
                { name: '한우설렁탕', price: 14000 },
                { name: '한우도가니탕', price: 18000 },
            ],
        },
        {
            title: '식사류',
            data: [
                { name: '비빔밥', price: 9000 },
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
        },
        {
            title: '해물류',
            data: [
                { name: '회', price: 20000 },
                { name: '연어회', price: 25000 },
                { name: '광어회', price: 22000 },
                { name: '오징어회', price: 17000 },
                { name: '새우튀김', price: 13000 },
                { name: '새우회', price: 18000 },
                { name: '굴', price: 15000 },
                { name: '조개구이', price: 17000 },
                { name: '가리비구이', price: 18000 },
                { name: '문어숙회', price: 20000 },
            ],
        },
        {
            title: '음료/디저트',
            data: [
                { name: '식혜', price: 3000 },
                { name: '수정과', price: 3500 },
                { name: '유자차', price: 4000 },
                { name: '녹차', price: 2000 },
                { name: '레몬차', price: 3000 },
                { name: '식사후 커피', price: 5000 },
                { name: '밀크티', price: 4500 },
                { name: '전통차', price: 3500 },
                { name: '흑임자빙수', price: 8000 },
                { name: '팥빙수', price: 7000 },
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
                    ListFooterComponent={() => <Footer/>}
                    ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});