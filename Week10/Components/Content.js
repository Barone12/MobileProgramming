import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Title from "./Title";
import CustomText from "./CustomText";

export default function Content() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    
    return(
    <ScrollView>
        <View style={[styles.contentContainer,
        {backgroundColor: isDark ? '#222222' : 'cornsilk'},
        ]}>
            <View>
                <CustomText style={styles.bitTitle}>귀귀살전</CustomText>
            </View>);
            <View>
                <CustomText style={styles.text}>
                    귀귀살전은 한국의 전통적인 지옥 세계관을 배경으로 한 멀티플레이 추론 게임이다.
                    이 게임은 얼리 액세스로 2025년 2월 스팀과 스토브 플랫폼을 통해 출시되었으며, 독창적인 게임 플레이와 한국적인 요소를 결합한 점이 특징이다.
                </CustomText>
                <CustomText style={styles.title}>게임의 기본 룰</CustomText>
                <CustomText style={styles.text}>
                    귀귀살전은 최대 10명의 플레이어가 참가하는 멀티플레이 게임이다.
                    각 플레이어는 게임 시작 시 무작위로 처치해야 할 목표를 부여받는다.
                    하지만 처음에는 자신의 목표가 누구인지 정확히 알 수 없으며, 게임이 진행될수록 단서를 모아야 한다.
                </CustomText>
                <CustomText style={styles.title}>게임의 특징</CustomText>
                <CustomText style={styles.subtitle}>1. 한국 전통 배경과 독창적인 아트 스타일</CustomText>
                <CustomText style={styles.text}>
                    귀귀살전은 한국적인 미학을 적극 반영한 게임이다. 한옥을 비롯한 한국 전통 건축물, 전통 복식,
                    그리고 조선 시대를 연상시키는 무기들이 등장한다.
                </CustomText>
                <CustomText style={styles.subtitle}>2. 사회적 추론과 전략적 플레이</CustomText>
                <CustomText style={styles.text}>
                    이 게임은 단순한 서바이벌 게임이 아니라 심리전이 핵심이다. 플레이어는 자신의 목표를 찾기 위해
                    다른 플레이어와 대화하고 행동을 분석해야 한다.
                </CustomText>
                <CustomText style={styles.subtitle}>3. 빠른 템포와 긴장감 넘치는 플레이</CustomText>
                <CustomText stlye={styles.text}>
                    한 라운드가 짧게 진행되며, 플레이어들은 제한된 시간 내에 목표를 제거해야 한다. 게임이 진행될수록 생존자가 줄어들며 긴장감이 극대화된다. 이러한 빠른 템포는 반복적인 플레이를 유도하며, 여러 전략을 시도할 수 있는 기회를 제공한다.
                </CustomText>
                <CustomText style={styles.subtitle}>4. 멀티플레이 기반의 커뮤니케이션 요소</CustomText>
                <CustomText style={styles.text}>
                    귀귀살전은 다른 플레이어와의 소통이 매우 중요한 게임이다. 서로의 정체를 숨기면서도 상대의 정보를 캐내야 하며, 때로는 거짓 정보를 흘려 혼란을 유도할 수도 있다. 이러한 요소들은 마피아 게임이나 어몽어스 같은 소셜 디덕션(Social Deduction) 게임의 재미를 극대화한다.
                </CustomText>
                <CustomText style={styles.title}>게임의 전략과 팁</CustomText>
                <CustomText style={styles.subtitle}>1. 초반에는 신중하게 정보를 수집하라</CustomText>
                <CustomText style={styles.text}>
                    게임 시작 직후에는 자신의 목표를 알기 어렵다. 무작정 공격하기보다는 다른 플레이어들의 움직임을 살펴보고 대화에 참여하면서 정보를 수집하는 것이 중요하다.
                </CustomText>
                <CustomText style={styles.subtitle}>2. 추론을 통해 목표를 찾아라</CustomText>
                <CustomText style={styles.text}>
                    게임이 진행될수록 목표를 찾아야 하는 힌트가 많아진다. 주변에서 누가 누구를 공격하는지 관찰하고, 특정한 행동 패턴을 분석하면 자신의 목표를 찾는 데 도움이 된다.
                </CustomText>
                <CustomText style={styles.subtitle}>3. 신중하게 공격하라</CustomText>
                <CustomText style={styles.text}>
                    잘못된 대상을 공격하면 되려 자신이 게임에서 탈락할 수 있다. 목표를 확신하기 전까지는 최대한 신중하게 행동하는 것이 중요하다.
                </CustomText>
                <CustomText style={styles.subtitle}>4. 혼란을 이용하라</CustomText>
                <CustomText style={styles.text}>
                    때로는 다른 플레이어들에게 거짓 정보를 제공하거나, 다른 사람을 목표로 유도하는 심리전도 효과적일 수 있다. 이를 통해 자신의 정체를 감추면서도 상대를 조종할 수 있다.
                </CustomText>
                <CustomText style={styles.title}>귀귀살전의 전망</CustomText>
                <CustomText style={styles.text}>
                    귀귀살전은 얼리 액세스 출시 이후 꾸준한 업데이트를 통해 게임의 완성도를 높여 나가고 있다. 기존의 마피아 게임과 차별화된 꼬리잡기 형식의 개인전 방식이 유저들에게 신선한 재미를 제공하고 있으며, 한국적인 전통 요소를 게임에 녹여낸 점도 큰 강점이다.

                    특히, 귀귀살전은 스트리머나 유튜버들의 방송 콘텐츠로도 적합한 게임으로 평가받고 있으며, 향후 대회나 이벤트를 통해 더욱 많은 유저들의 관심을 받을 것으로 보인다.

                    한국 전통과 현대적인 게임 디자인이 조화를 이루며 독창적인 게임 플레이를 선보이는 귀귀살전은 앞으로 더욱 발전할 가능성이 크다.
                </CustomText>
            </View> 
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 20,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 8,
        paddingTop: 10,
    },
    text: {
        fontSize: 14,
        lineHeight: 22,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#F0EDCC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },    
    bitTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 20,
    },
    
});
