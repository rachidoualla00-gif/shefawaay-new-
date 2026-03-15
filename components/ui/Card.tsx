import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
}

export function Card({ children, style }: CardProps) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.textSecondary }, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 20,
        marginVertical: 10,
        width: '100%',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
});
