import React, {useState} from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Modal, 
    FlatList, 
    StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Select = ({options, onChangeSelect}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} />
        </View>
    )    
};
    

const styles = StyleSheet.create({
    container: {
        height: 50,
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingLeft: 40,
        marginHorizontal: 20,
        borderRadius: 8,
        fontSize: 18,
        borderWidth: 1,
    },
});

export default Select;