import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const ImageItem = ({url, style, onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.imageContainer, style]}
            activeOpacity={0.6}
            onPress={onPress}>
            <Image
                source={{uri: url}}
                style={styles.image}
                resizeMode="cover"
                loadingIndicatorSource={require('../assets/img/loading.png')}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        height: 250,
        width: '100%',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default ImageItem;
