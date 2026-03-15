import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { DorosData } from '@/data/mockData';
import { PlayCircle } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DorosScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>الدروس والمحاضرات</Text>

            {DorosData.map((dars) => (
                <TouchableOpacity key={dars.id} style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.border }]}>
                    <ImageBackground
                        source={{ uri: dars.image }}
                        style={styles.thumbnail}
                        imageStyle={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                    >
                        <View style={styles.thumbnailOverlay}>
                            <PlayCircle color="#FFFFFF" size={32} opacity={0.9} />
                            <View style={styles.durationBadge}>
                                <Text style={styles.durationText}>{dars.duration}</Text>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.content}>
                        <View style={styles.contentTop}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{dars.category}</Text>
                            </View>
                            <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>{dars.title}</Text>
                        </View>
                        <View style={styles.contentBottom}>
                            <Text style={[styles.imam, { color: theme.textSecondary }]} numberOfLines={1}>{dars.imam}</Text>
                        </View>
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
        height: 120, // fixed height for uniform look
    },
    thumbnail: {
        width: 130,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnailOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    durationBadge: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    durationText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    contentTop: {
        flex: 1,
    },
    contentBottom: {
        marginTop: 5,
    },
    badge: {
        backgroundColor: '#EBEBEB',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 12,
        marginBottom: 6,
    },
    badgeText: {
        fontSize: 10,
        color: '#333',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    imam: {
        fontSize: 12,
        fontWeight: '600',
    },
});
