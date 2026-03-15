import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Send } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AssistantScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.chatContainer}>
                <Card style={styles.assistantBubble}>
                    <Text style={[styles.chatText, { color: theme.text }]}>السلام عليكم ورحمة الله. أنا المساعد الذكي لتطبيق شفاء. كيف يمكنني مساعدتك اليوم؟</Text>
                </Card>
            </ScrollView>
            <View style={[styles.inputContainer, { backgroundColor: theme.cardBackground, borderTopColor: theme.border }]}>
                <TextInput
                    style={[styles.input, { color: theme.text, backgroundColor: theme.background }]}
                    placeholder="اكتب سؤالك هنا..."
                    placeholderTextColor={theme.textSecondary}
                />
                <View style={[styles.sendButton, { backgroundColor: theme.success }]}>
                    <Send color={Colors.light.cardBackground} size={20} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainer: {
        padding: 20,
    },
    assistantBubble: {
        alignSelf: 'flex-start',
        maxWidth: '85%',
        borderBottomRightRadius: 0,
    },
    chatText: {
        fontSize: 16,
        lineHeight: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 30, // for safe area
        borderTopWidth: 1,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        textAlign: 'right',
    },
    sendButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
});
