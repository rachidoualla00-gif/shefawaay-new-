import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { DorosData } from '@/data/mockData';
import { Play } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DorosScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>أحدث الدروس</Text>

            {DorosData.map((dars) => (
                <TouchableOpacity key={dars.id} style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.border }]}>
                    <View style={[styles.thumbnail, { backgroundColor: theme.border }]}>
                        <Play color={Colors.light.success} size={40} opacity={0.8} />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{dars.category}</Text>
                        </View>
                        <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>{dars.title}</Text>
                        <Text style={[styles.imam, { color: theme.textSecondary }]}>{dars.imam}</Text>
                        <Text style={[styles.duration, { color: theme.textSecondary }]}>{dars.duration}</Text>
                    </View>
                </TouchableOpacity>
            ))}

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
    card: {
        flexDirection: 'row',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    thumbnail: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    badge: {
        backgroundColor: '#EBEBEB',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 12,
        marginBottom: 5,
    },
    badgeText: {
        fontSize: 10,
        color: '#555',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    imam: {
        fontSize: 14,
        marginBottom: 4,
    },
    duration: {
        fontSize: 12,
    },
});
