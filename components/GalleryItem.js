import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

import ImageItem from './ImageItem';
import ProfileImage from './ProfileImage';

const GalleryItem = ({item, navigation}) => {
    return (
        <View style={styles.container}>
            <ImageItem
                url={item.urls.regular}
                style={{
                    borderRadius: 10,
                    overflow: 'hidden',
                }}
                onPress={() =>
                    navigation.navigate('Photo', {
                        item,
                    })
                }
            />
            <View style={styles.profileInfo}>
                <ProfileImage url={item.user.profile_image.small} />
                <Text
                    onPress={() =>
                        Linking.openURL(item.user.links.html).catch(() =>
                            console.log('Something went wrong!'),
                        )
                    }
                    style={styles.profileInfoName}>
                    {item.user.name}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '50%',
        paddingHorizontal: 5,
    },
    profileInfo: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileInfoName: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default GalleryItem;
