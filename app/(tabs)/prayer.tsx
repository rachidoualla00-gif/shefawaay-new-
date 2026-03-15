import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Clock, Compass, MapPin } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const PrayersDay = [
    { name: 'الفجر', time: '05:12', active: false },
    { name: 'الشروق', time: '06:42', active: false },
    { name: 'الظهر', time: '13:28', active: false },
    { name: 'العصر', time: '16:55', active: false },
    { name: 'المغرب', time: '19:15', active: true },
    { name: 'العشاء', time: '20:30', active: false },
];

export default function PrayerScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1590075865003-e48277faf551?q=80&w=800&auto=format&fit=crop' }}
                style={styles.locationBanner}
                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
            >
                <View style={styles.bannerOverlay}>
                    <View style={styles.locationTag}>
                        <MapPin color="#fff" size={16} />
                        <Text style={styles.locationText}>الدار البيضاء، المغرب</Text>
                    </View>
                    <Text style={styles.dateText}>الأحد، 15 مارس 2026</Text>
                    <Text style={styles.hijriText}>25 رمضان 1447</Text>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <Card style={styles.qiblaCard}>
                    <View style={styles.qiblaInfo}>
                        <Text style={[styles.qiblaTitle, { color: theme.text }]}>بوصلة القبلة</Text>
                        <Text style={[styles.qiblaSubtitle, { color: theme.textSecondary }]}>مكة المكرمة: 95.4° شرقاً</Text>
                    </View>
                    <View style={[styles.compassCircle, { backgroundColor: theme.border }]}>
                        <Compass color={theme.success} size={40} style={{ transform: [{ rotate: '45deg' }] }} />
                    </View>
                </Card>

                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, { color: theme.text }]}>مواقيت الصلاة</Text>
                    <Clock color={theme.textSecondary} size={20} />
                </View>

                <View style={styles.prayerList}>
                    {PrayersDay.map((prayer) => (
                        <View
                            key={prayer.name}
                            style={[
                                styles.prayerRow,
                                { backgroundColor: prayer.active ? theme.success : theme.cardBackground },
                                prayer.active && { shadowColor: theme.success, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 }
                            ]}
                        >
                            <View style={styles.prayerMain}>
                                <Text style={[styles.prayerName, { color: prayer.active ? '#fff' : theme.text }]}>{prayer.name}</Text>
                                {prayer.active && <View style={styles.activeDot} />}
                            </View>
                            <Text style={[styles.prayerTime, { color: prayer.active ? '#fff' : theme.text }]}>{prayer.time}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={{ height: 120 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    locationBanner: {
        height: 200,
        width: '100%',
    },
    bannerOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingTop: 40,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    locationTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 10,
    },
    locationText: {
        color: '#fff',
        marginLeft: 6,
        fontSize: 14,
        fontWeight: 'bold',
    },
    dateText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    hijriText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16,
        marginTop: 4,
    },
    content: {
        paddingHorizontal: 16,
        marginTop: -30,
    },
    qiblaCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 20,
        marginBottom: 25,
    },
    qiblaInfo: {
        flex: 1,
    },
    qiblaTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'right',
    },
    qiblaSubtitle: {
        fontSize: 13,
        textAlign: 'right',
    },
    compassCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
    sectionHeader: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    prayerList: {
        width: '100%',
    },
    prayerRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 16,
        marginBottom: 12,
    },
    prayerMain: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    prayerName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    activeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#fff',
        marginRight: 10,
    },
    prayerTime: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
