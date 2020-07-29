import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, Image, Linking} from 'react-native';

import LikesCount from '../components/LikesCount';
import ImageItem from '../components/ImageItem';
import ProfileImage from '../components/ProfileImage';
import Layout from '../constants/Layout';

const SinglePhotoScreen = ({route, navigation}) => {
    const item = route.params.item;
    const [height, setHeight] = useState(Layout.window.height);

    useEffect(() => {
        Image.getSize(item.urls.full, (w, h) => {
            const scale = w / Layout.window.width;
            setHeight(h / scale);
        });
    }, []);

    return (
        <ScrollView>
            <View>
                <ImageItem
                    url={item.urls.full}
                    style={{
                        width: Layout.window.width,
                        height,
                    }}
                />
                <View style={styles.info}>
                    <View style={styles.profileInfo}>
                        <ProfileImage url={item.user.profile_image.small} />
                        <Text
                            onPress={() =>
                                Linking.openURL(
                                    item.user.links.html,
                                ).catch(() =>
                                    console.log('Something went wrong!'),
                                )
                            }
                            style={styles.profileInfoName}>
                            {item.user.name}
                        </Text>
                    </View>
                    <LikesCount count={item.likes} style={{marginRight: 15}} />
                </View>
                {item.description ? (
                    <Text style={styles.imageDescription}>
                        {item.description}
                    </Text>
                ) : null}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageDescription: {
        marginLeft: 10,
        fontSize: 14,
    },
    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10,
        marginLeft: 15,
        alignItems: 'center',
    },
    profileInfoName: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default SinglePhotoScreen;
