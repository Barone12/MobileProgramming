import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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

    const menuKeyExtractor = (item, index) => `${index}`
    const Header = (props) => {
        return (
            <View style={styles.topBottomContainer}>
                <Text style={styles.headerFooterText}>
                    {props.text}{' '}
                </Text>
            </View>
        );
    }
    const Footer = props => {
        return (
            <View style={styles.topBottomContainer}>
                <Text style={styles.headerFooterText}>
                    {props.text}{' '}
                </Text>
            </View>
        )
    }
    const menuItemsToDisplay = [
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
    ]


    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <FlatList
              data={menuItemsToDisplay}
              renderItem={menuRenderItem}
              keyExtractor={menuKeyExtractor}
              ListHeaderComponent={() => <Header text="📜 메뉴판" />}
              ListFooterComponent={() => <Footer text="🎉 단체 손님 환영" />}
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
});