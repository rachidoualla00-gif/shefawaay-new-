import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Bookmark, PlayCircle } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Surahs = [
    { id: 1, name: 'الفاتحة', pages: '1', type: 'مكية' },
    { id: 2, name: 'البقرة', pages: '2-49', type: 'مدنية' },
    { id: 3, name: 'آل عمران', pages: '50-76', type: 'مدنية' },
    { id: 4, name: 'النساء', pages: '77-106', type: 'مدنية' },
    { id: 18, name: 'الكهف', pages: '293-304', type: 'مكية' },
    { id: 36, name: 'يس', pages: '440-445', type: 'مكية' },
    { id: 55, name: 'الرحمن', pages: '531-534', type: 'مدنية' },
];

export default function QuranScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

            <Card style={[styles.resumeCard, { backgroundColor: theme.tint }]}>
                <View style={styles.resumeInfo}>
                    <Text style={styles.resumeLabel}>الاستكمال من حيث توقفت</Text>
                    <Text style={styles.resumeSurah}>سورة الكهف - صفحة 295</Text>
                </View>
                <TouchableOpacity style={[styles.playBtn, { backgroundColor: theme.cardBackground }]}>
                    <PlayCircle color={theme.success} size={24} />
                    <Text style={[styles.playText, { color: theme.success }]}>متابعة القراءة</Text>
                </TouchableOpacity>
            </Card>

            <Text style={[styles.sectionTitle, { color: theme.text }]}>الفهرس</Text>

            {Surahs.map((surah) => (
                <Card key={surah.id} style={styles.surahRow}>
                    <View style={styles.surahNumberCircle}>
                        <Text style={[styles.surahNumber, { color: theme.textSecondary }]}>{surah.id}</Text>
                    </View>
                    <View style={styles.surahDetails}>
                        <Text style={[styles.surahName, { color: theme.text }]}>سورة {surah.name}</Text>
                        <Text style={[styles.surahMeta, { color: theme.textSecondary }]}>{surah.type} • ص {surah.pages}</Text>
                    </View>
                    <TouchableOpacity style={styles.bookmarkBtn}>
                        <Bookmark color={theme.textSecondary} size={24} />
                    </TouchableOpacity>
                </Card>
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
    resumeCard: {
        padding: 24,
        borderRadius: 20,
        marginBottom: 20,
    },
    resumeInfo: {
        marginBottom: 20,
    },
    resumeLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
        marginBottom: 5,
    },
    resumeSurah: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    playBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 30,
        width: 160,
    },
    playText: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    surahRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 10,
    },
    surahNumberCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    surahNumber: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    surahDetails: {
        flex: 1,
    },
    surahName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    surahMeta: {
        fontSize: 13,
    },
    bookmarkBtn: {
        padding: 10,
    },
});
