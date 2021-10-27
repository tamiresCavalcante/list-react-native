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
        {id: 'W150X13', 
        kgm: '13', 
        d: '148', 
        tw: '4.3', 
        tf: '4.9', 
        h: '138'},
        {id: 'W150X18', 
        kgm: '18', 
        d: '153', 
        tw: '5.8', 
        tf: '6,6', 
        h: '139'},
        
      ]
    }
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>

        <FlatList
        //horizontal 
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