import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png'
import LogoImg from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';


interface PageGeaderProps{
    title: String,
}

const PageHeader: React.FC<PageGeaderProps> = ({ title }) => {

    const { navigate } = useNavigation();
    function heandleGoBack() {
        navigate("Landing");
    }

  return (

  <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={heandleGoBack}>
            <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={LogoImg} resizeMode="contain" />

      </View>
        <Text style={styles.title}>
            {title}
        </Text>
  </View>
  )
}

export default PageHeader;