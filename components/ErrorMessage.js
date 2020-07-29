import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ErrorMessage = ({refresh}) => {
    return (
        <View>
            <Text style={styles.errorMsg}>Whoops. Something went wrong</Text>
            <Button title="Refresh" onPress={refresh} />
        </View>
    );
};

const styles = StyleSheet.create({
    errorMsg: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

export default ErrorMessage;
