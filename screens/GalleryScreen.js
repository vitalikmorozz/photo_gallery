import React from 'react';
import {View, StyleSheet} from 'react-native';

import GalleryList from '../components/GalleryList';

const GalleryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <GalleryList navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default GalleryScreen;
