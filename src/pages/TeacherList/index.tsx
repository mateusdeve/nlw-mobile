import React, { useState } from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../service/api';

import  AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function LoadFavorites () {
    AsyncStorage.getItem('favorites').then(response => {
      if(response){

        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    })
  }

useFocusEffect(() => {
  LoadFavorites()
})

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit() {
    LoadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data)
  }

  return ( 
    <View style={styles.container} >

      <PageHeader title="Proffys Disponiveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Icon name="search" size={20} color="#fff"/>
        </BorderlessButton>
      )}>

        { isFiltersVisible &&  
        ( <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
          value={subject}
          onChangeText={text => setSubject(text)}
          placeholderTextColor="#c1bbcc" 
          style={styles.input}
          placeholder="Qual a matéria?"/>
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
              value={week_day}
              onChangeText={text => setWeekDay(text)}
              placeholderTextColor="#c1bbcc" 
                style={styles.input}
                placeholder="Qual o dia?"/>
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
              value={time}
              onChangeText={text => setTime(text)}
              placeholderTextColor="#c1bbcc" 
                style={styles.input}
                placeholder="Qual o horário?"/>
            </View>
          </View>
          <RectButton style={styles.submit} onPress={handleFilterSubmit} >
            <Text style={styles.submitText}>Filtrar</Text>
          </RectButton>
        </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
      >
        {teachers.map((teacher: Teacher ) => {
          
          return (
            <TeacherItem 
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}/>
          )
        } 
        )}
      </ScrollView>
    </View>
  )
}

export default TeacherList;