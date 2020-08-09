import { View, Image, Text } from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png'
import LogoImg from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';


interface PageGeaderProps{
    title: String;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageGeaderProps> = ({ title, children, headerRight }) => {

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
      <View style={styles.header}>
        <Text style={styles.title}>
            {title}
        </Text> 
        {headerRight}

      </View>


        {children}
  </View>
  )
}

export default PageHeader;