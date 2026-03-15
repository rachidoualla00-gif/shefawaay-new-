import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { BookOpen, Bookmark, PlayCircle } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Surahs = [
    { id: 1, name: 'الفاتحة', pages: '1', type: 'مكية' },
    { id: 2, name: 'البقرة', pages: '2-49', type: 'مدنية' },
    { id: 3, name: 'آل عمران', pages: '50-76', type: 'مدنية' },
    { id: 4, name: 'النساء', pages: '77-106', type: 'مدنية' },
    { id: 18, name: 'الكهف', pages: '293-304', type: 'مكية' },
    { id: 19, name: 'مريم', pages: '305-312', type: 'مكية' },
    { id: 20, name: 'طه', pages: '313-321', type: 'مكية' },
    { id: 36, name: 'يس', pages: '440-445', type: 'مكية' },
    { id: 55, name: 'الرحمن', pages: '531-534', type: 'مدنية' },
    { id: 56, name: 'الواقعة', pages: '534-537', type: 'مكية' },
    { id: 67, name: 'الملك', pages: '562-564', type: 'مكية' },
];

export default function QuranScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop' }}
                style={styles.resumeCardContainer}
                imageStyle={{ borderRadius: 20 }}
            >
                <View style={styles.resumeOverlay}>
                    <View style={styles.resumeInfo}>
                        <View style={styles.resumeLabelRow}>
                            <BookOpen color="#fff" size={16} />
                            <Text style={styles.resumeLabel}>آخر قراءة</Text>
                        </View>
                        <Text style={styles.resumeSurah}>سورة الكهف</Text>
                        <Text style={styles.resumePage}>صفحة رقم 295</Text>
                    </View>
                    <TouchableOpacity style={[styles.playBtn, { backgroundColor: '#fff' }]}>
                        <PlayCircle color={theme.success} size={20} />
                        <Text style={[styles.playText, { color: theme.success }]}>استكمال</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.searchBar}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>فهرس السور</Text>
            </View>

            <View style={styles.surahList}>
                {Surahs.map((surah) => (
                    <TouchableOpacity key={surah.id} activeOpacity={0.7}>
                        <Card style={styles.surahRow}>
                            <View style={styles.surahNumberCircle}>
                                <ImageBackground
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3133/3133160.png' }}
                                    style={styles.numberBg}
                                    imageStyle={{ opacity: 0.1 }}
                                >
                                    <Text style={[styles.surahNumber, { color: theme.textSecondary }]}>{surah.id}</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.surahDetails}>
                                <Text style={[styles.surahName, { color: theme.text }]}>سورة {surah.name}</Text>
                                <Text style={[styles.surahMeta, { color: theme.textSecondary }]}>{surah.type} • {surah.pages} صفحة</Text>
                            </View>
                            <View style={styles.bookmarkBtn}>
                                <Bookmark color={theme.textSecondary} size={22} />
                            </View>
                        </Card>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={{ height: 120 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    resumeCardContainer: {
        height: 160,
        marginBottom: 25,
        borderRadius: 20,
        overflow: 'hidden',
    },
    resumeOverlay: {
        flex: 1,
        backgroundColor: 'rgba(21, 45, 33, 0.75)',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    resumeInfo: {
        flex: 1,
    },
    resumeLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    resumeLabel: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        marginLeft: 6,
        fontWeight: '600',
    },
    resumeSurah: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    resumePage: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        marginTop: 2,
    },
    playBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    playText: {
        marginLeft: 6,
        fontWeight: 'bold',
        fontSize: 14,
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    surahList: {
        width: '100%',
    },
    surahRow: {
        flexDirection: 'row-reverse', // Arabic alignment
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        borderRadius: 16,
    },
    surahNumberCircle: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.03)',
        overflow: 'hidden',
    },
    numberBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    surahNumber: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    surahDetails: {
        flex: 1,
        marginRight: 15,
    },
    surahName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        textAlign: 'right',
    },
    surahMeta: {
        fontSize: 12,
        textAlign: 'right',
        opacity: 0.8,
    },
    bookmarkBtn: {
        padding: 5,
    },
});
