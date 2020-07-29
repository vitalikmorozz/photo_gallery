import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchImages, clearGallery} from '../redux/actions/images';

import GalleryItem from './GalleryItem';
import ErrorMessage from './ErrorMessage';

const GalleryList = ({navigation}) => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const {images, loading, error} = useSelector((state) => state.images);

    useEffect(() => {
        dispatch(fetchImages(10, page));
    }, [dispatch, page]);

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const refresh = () => {
        dispatch(fetchImages(10, page));
    };

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                        navigation={navigation}
                    />
                )}
                onEndReached={nextPage}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                numColumns={2}
                horizontal={false}
                onRefresh={() => {
                    dispatch(clearGallery());
                    refresh();
                    setPage(1);
                }}
                refreshing={false}
                ListHeaderComponent={<View style={{marginTop: 10}} />}
                ListFooterComponent={
                    error ? (
                        <ErrorMessage refresh={refresh} />
                    ) : loading ? (
                        <ActivityIndicator size="large" color="blue" />
                    ) : null
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 5,
    },
});

export default GalleryList;
