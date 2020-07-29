import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const ProfileImage = ({url, style}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: url}} style={[styles.image, style]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        height: 30,
        width: 30,
        overflow: 'hidden',
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
export default ProfileImage;
