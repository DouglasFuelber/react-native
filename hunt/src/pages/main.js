import React, { useEffect } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

const Main = () => {

    useEffect(() => {
        this.loadProducts();
    }, []);

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        console.log(docs);
    }

    return <View>
        <Text>Página Main</Text>
    </View>

}

Main.navigationOptions = {
    title: 'JSHunt',
};

export default Main