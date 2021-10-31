import React, {useState} from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Modal, 
    FlatList, 
    StyleSheet, 
    SafeAreaView, 
    Dimensions} from 'react-native';
import Icon from '../node_modules/react-native-vector-icons/dist/MaterialCommunityIcons';
const {width} = Dimensions.get('window');

const Select = ({options, onChangeSelect, text, label}) => {
    const [txt, setTxt] = useState(text);
    const [selected, setSelected] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function renderOption(item){
        return (
            <TouchableOpacity style={[styles.optionContainer, {backgroundColor: item.id == selected ? '#d8bfd8' : '#eee'}]} 
            onPress={() => {
                onChangeSelect(item.id);
                setTxt(item.name);
                setModalVisible(false);
                setSelected(item.id);
            }}>
               <Text style={styles.optionTxt}>{item.name}</Text>
               {item.id == selected && (<Icon name={'check'} size={18} color={'green'} />)} 
            </TouchableOpacity>
        );       
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => setModalVisible(true)}>
                <Text style={styles.txt}>
                    {txt}
                </Text>
                <Icon name={"chevron-down"} size={26} color={'blue'} />
            </TouchableOpacity>
            <Modal 
                animationType="slide" 
                visible={modalVisible} 
                onRequestClose={() => setModalVisible(false)}>
                <SafeAreaView>
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Icon name="chevron-left" size={40} color={ 'blue' } />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{text}</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList 
                        data={options}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => renderOption(item)}
                    />
                </SafeAreaView>
            </Modal>
        </>
    );
};
    

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#d8bfd8',
        paddingHorizontal: 12,
        marginHorizontal: 20,
        borderRadius: 8,
        fontSize: 18,
        borderColor: '#CCC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    txt: {
        color: 'black',
        fontSize: 16,
        width: width -12 -12 - 20 - 20 - 26,
    },
    headerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 12,
    },
    modalTitle: {
        fontSize: 18,
        color: '#555',
    },
    modalCancel: {
        fontSize: 14,
        color: 'blue',
        fontWeight: '600',
    },
    optionContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
        padding: 10,
        //backgroundColor: '#d3d3d3',
    },
    optionTxt: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20,
    },
    label: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 20,
        paddingVertical: 10,
    },
});

export default Select;