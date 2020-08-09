import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
  return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image
            style={styles.avatar}
            source={{uri: 'https://avatars1.githubusercontent.com/u/55514882?s=460&u=ac70d538b04ca284b2d68148accac97849f1a488&v=4'}}
            />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Mateus Pires</Text>
                <Text style={styles.subject}>Matemática</Text>
            </View>
        </View>
        <Text style={styles.bio}>
            Entusiasta das melhores tecnologias de front end
        </Text>
        <View style={styles.footer} >
            <Text style={styles.price}>
                Preço / hora {'   '}
                <Text style={styles.priceValue}>R$ 20,00</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    {/* <Image source={heartOutlineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    </View>
  );
};

export default TeacherItem;

