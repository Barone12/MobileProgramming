import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RestaurantHeader from "./RestaurantHeader/RestaurantHeader";
import RestaurantFooter from "./RestaurantFooter/RestaurantFooter";
import Title from "./components/Title";

//실행 npx expo start --localhost --android
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <RestaurantHeader />
      </View>
      <View style={styles.contentContainer}>
        <Title text="귀귀살전: 한국 전통을 살린 신개념 추론 서바이벌 게임" />
        <Text>
          귀귀살전은 한국의 전통적인 지옥 세계관을 배경으로 한 멀티플레이 추론 게임이다. 이 게임은 얼리 액세스로 2025년 2월 스팀과 스토브 플랫폼을 통해 출시되었으며, 독창적인 게임 플레이와 한국적인 요소를 결합한 점이 특징이다. 최대 10명의 플레이어가 참여하는 이 게임은 단순한 서바이벌이 아닌, 심리전과 전략이 중요한 ‘꼬리잡기’ 방식의 개인전으로 진행된다.
        </Text>
        <Text style={styles.titleContainer}>
          게임의 기본 룰
        </Text>
        <Text>
          귀귀살전은 최대 10명의 플레이어가 참가하는 멀티플레이 게임이다. 각 플레이어는 게임 시작 시 무작위로 처치해야 할 목표를 부여받는다. 하지만 처음에는 자신의 목표가 누구인지 정확히 알 수 없으며, 게임이 진행될수록 단서를 모아야 한다. 플레이어는 서로의 대화와 행동을 관찰하며 상대가 누군지를 추론해야 한다.

          한 명을 처치하면 다음 목표가 새롭게 설정되며, 목표를 계속해서 제거하면서 최후의 생존자가 되는 것이 목표다. 하지만 잘못된 상대를 공격하면 자신이 사망할 수도 있기 때문에 신중한 판단이 필요하다.
        </Text>
        <Text style={styles.titleContainer}>
          게임의 특징
        </Text>
        <Text style={styles.subtitleContainer}>
          한국 전통 배경과 독창적인 아트 스타일
        </Text>
        <Text>
          귀귀살전은 한국적인 미학을 적극 반영한 게임이다. 한옥을 비롯한 한국 전통 건축물, 전통 복식, 그리고 조선 시대를 연상시키는 무기들이 등장한다. 게임의 분위기는 전통적인 한국의 지옥관을 바탕으로 하며, 각 캐릭터는 독특한 한복 스타일의 의상을 착용하고 있다.
        </Text>
        <Text style={styles.subtitleContainer}>
          사회적 추론과 전략적 플레이
        </Text>
        <Text>
          이 게임은 단순한 서바이벌 게임이 아니라 심리전이 핵심이다. 플레이어는 자신의 목표를 찾기 위해 다른 플레이어와 대화하고 행동을 분석해야 한다. 누군가를 처치하면 즉시 새로운 목표가 주어지므로, 자신의 정체를 감추면서도 효과적으로 상대를 제거해야 한다.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  headerContainer: {
    backgroundColor: '#C9BA6B',
    paddingTop: 40,
  },
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  subtitleContainer: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#567EB3',
    alignItems: 'center',
    justifyContent: 'center',
    justify: 'auto',
  },
  footerConatainer: {
    flex: 1,
    justify: 'auto',
  }
});
