import React, {Component} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView,
} from 'react-native';

import Filme from './src/Filme';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      filmes: [
        {id: '1', nome: 'Homem Aranha'},
        {id: '2', nome: 'As panteras'},
        {id: '3', nome: 'Os Vingadores'},
        {id: '4', nome: 'Homem de Ferro'},
        {id: '5', nome: 'Halloween'},
        {id: '6', nome: 'Os Eternos'},
        {id: '7', nome: 'Viuva negra'},
        {id: '8', nome: 'Thor'},
        {id: '9', nome: 'Amnésia'},
        {id: '10', nome: 'Homem Formiga'},
        {id: '11', nome: 'Coringa'},
        {id: '12', nome: 'Ultimato'},
      ]
    }
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>

        <FlatList 
          data={this.state.filmes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
          <Filme data={item}/>
        }
        />

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});