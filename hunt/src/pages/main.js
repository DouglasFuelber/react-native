import React, { useEffect, useState } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Main = () => {

    // Effect hook
    useEffect(() => {
        loadProducts();
    }, []);

    // States
    const [productInfo, setProductInfo] = useState({});
    const [docs, setDocs] = useState([]);
    const [page, setPage] = useState(1);

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docsList, ...productInfo } = response.data;

        setDocs(docsList);
        setProductInfo(productInfo);
    };

    const loadMore = () => {
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;
        loadProducts(pageNumber);
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity onPress={() => { }} style={styles.productButton}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    return <View style={styles.container}>
        <FlatList
            contentContainerStyle={styles.list}
            data={docs}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
        />
    </View>

}

Main.navigationOptions = {
    title: 'JSHunt',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: 'transparent',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
});

export default Main;