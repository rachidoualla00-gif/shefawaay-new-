import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { MessageCircle } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export function AssistantFAB() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <Link href="/assistant" asChild>
            <Pressable style={styles.fabContainer}>
                <View style={[styles.fab, { backgroundColor: theme.success }]}>
                    <MessageCircle color={Colors.light.cardBackground} size={28} />
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 999,
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
});
