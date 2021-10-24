import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Filme extends Component{
    render(){
        return(
            <View style={styles.containerFilmes}>
                <Text style={styles.titleFilmes}>{this.props.data.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerFilmes: {
        backgroundColor: 'orange',
        height: 80,
        margin: 10,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    titleFilmes: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});