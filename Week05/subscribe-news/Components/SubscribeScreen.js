import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function SubscribeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [opinion, setOpinion] = useState('');
  
    return (
        <ScrollView style={styles.container}>
          <Text numberOfLines={1} style={styles.textTitle}>
            귀귀살전은 어떠셨나요?
          </Text>
          <Text style={styles.text}>
            구독을 하시면 새로운 정보가 이메일로 전달됩니다.
          </Text>
          
          <Text style={styles.textSubtitle}>이름</Text>
          <TextInput
            style={styles.inputLine}
            placeholder="이름"
            value={name}
            onChangeText={setName}
            keyboardType={"default"}
            />
            
          <Text style={styles.textSubtitle}>이메일</Text>  
            <TextInput
            style={styles.inputLine}
            placeholder="이메일"
            value={email}
            onChangeText={setEmail}
            keyboardType={"email-address"}
            />
            
            <Text style={styles.textSubtitle}>전화번호</Text>  
        <TextInput
            style={styles.inputLine}
            placeholder="전화번호"
            value={phoneNum}
            onChangeText={setPhoneNum}
            keyboardType={"numeric"}
            />
        <Text style={styles.textSubtitle}>기타 의견</Text>
            <TextInput
                style={styles.inputMultiline}
                placeholder="기타 의견"
                value={opinion}
                onChangeText={setOpinion}
                keyboardType={"default"}
                multiline/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EBD8',
        padding: 10, 
    },
    textTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'justify',
        marginBottom: 10,
    },
    textSubtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    confirmContainer: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#D1E8E2',
      borderRadius: 8,
    },
    inputMultiline: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 5,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      fontSize: 16,
      marginBottom: 10,
      height: 200,
    },
    inputLine: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        fontSize: 16,
        marginBottom: 10,
        height: 45,
    }
});
