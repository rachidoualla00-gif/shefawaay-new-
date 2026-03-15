import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { StoreData } from '@/data/mockData';
import { ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StoreScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>منتجات العافية</Text>

            <View style={styles.grid}>
                {StoreData.map((item) => (
                    <View key={item.id} style={[styles.productCard, { backgroundColor: theme.cardBackground, shadowColor: theme.border }]}>
                        <View style={[styles.imagePlaceholder, { backgroundColor: theme.border }]}>
                            <Text style={{ fontSize: 60 }}>{item.image}</Text>
                        </View>
                        <View style={styles.productInfo}>
                            <Text style={[styles.productTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
                            <Text style={[styles.productDesc, { color: theme.textSecondary }]} numberOfLines={2}>{item.description}</Text>
                            <View style={styles.purchaseRow}>
                                <Text style={[styles.price, { color: theme.success }]}>{item.price}</Text>
                                <TouchableOpacity style={[styles.buyBtn, { backgroundColor: theme.success }]}>
                                    <ShoppingCart color={Colors.light.cardBackground} size={16} />
                                    <Text style={styles.buyText}>شراء</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            <View style={{ height: 100 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    imagePlaceholder: {
        height: 140,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productInfo: {
        padding: 12,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productDesc: {
        fontSize: 12,
        marginBottom: 10,
    },
    purchaseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    buyBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    buyText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 4,
    },
});
