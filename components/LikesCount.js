import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const LikesCount = ({count, style}) => {
    return (
        <View style={[styles.socialInfo, style]}>
            <Text style={{marginRight: 5}}>{count}</Text>
            <Icon name="hearto" size={20} color="black" />
        </View>
    );
};

const styles = StyleSheet.create({
    socialInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default LikesCount;
