import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView,
} from 'react-native';


import Select from './Select';
import {callList} from './fakeapi';

const Home = () => {
  return ( 
    <SafeAreaView style={{flex: 1}}>
      <Select
        options={callList} 
        onChangeSelect={(id) => alert(id)} 
        text="Selecione uma seção de aço"
        label="Seção do Aço:"
      />
    </SafeAreaView>
  );
};

export default Home;