import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { StoreData } from '@/data/mockData';
import { ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StoreScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>منتجات طبيعية وإسلامية</Text>

            <View style={styles.grid}>
                {StoreData.map((item) => (
                    <View key={item.id} style={[styles.productCard, { backgroundColor: theme.cardBackground, shadowColor: theme.border }]}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.imagePlaceholder}
                        />
                        {item.stock === 0 && (
                            <View style={styles.outOfStockBadge}>
                                <Text style={styles.outOfStockText}>نفذت الكمية</Text>
                            </View>
                        )}
                        <View style={styles.productInfo}>
                            <Text style={[styles.productTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
                            <Text style={[styles.productDesc, { color: theme.textSecondary }]} numberOfLines={2}>{item.description}</Text>
                            <View style={styles.purchaseRow}>
                                <Text style={[styles.price, { color: theme.success }]}>{item.price}</Text>
                                <TouchableOpacity
                                    disabled={item.stock === 0}
                                    style={[styles.buyBtn, { backgroundColor: item.stock === 0 ? theme.border : theme.success }]}
                                >
                                    <ShoppingCart color={item.stock === 0 ? theme.textSecondary : Colors.light.cardBackground} size={16} />
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
        height: 150,
        width: '100%',
        resizeMode: 'cover',
    },
    outOfStockBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    outOfStockText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
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
        minHeight: 35,
    },
    purchaseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    price: {
        fontWeight: '900',
        fontSize: 15,
    },
    buyBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        borderRadius: 8,
    },
});
