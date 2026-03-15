import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Compass, MapPin } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PrayersDay = [
    { name: 'الفجر', time: '05:15', active: false },
    { name: 'الشروق', time: '06:45', active: false },
    { name: 'الظهر', time: '13:30', active: false },
    { name: 'العصر', time: '16:45', active: false },
    { name: 'المغرب', time: '18:45', active: true },
    { name: 'العشاء', time: '20:00', active: false },
];

export default function PrayerScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

            <View style={styles.header}>
                <View style={styles.locationTag}>
                    <MapPin color={theme.success} size={16} />
                    <Text style={[styles.locationText, { color: theme.text }]}>الدار البيضاء، المغرب</Text>
                </View>
                <Text style={[styles.dateText, { color: theme.textSecondary }]}>14 مارس 2026</Text>
            </View>

            <Card style={[styles.qiblaCard, { backgroundColor: theme.cardBackground }]}>
                <View style={[styles.compassCircle, { backgroundColor: theme.border }]}>
                    <Compass color={theme.success} size={64} style={{ transform: [{ rotate: '45deg' }] }} />
                </View>
                <Text style={[styles.qiblaTitle, { color: theme.text }]}>اتجاه القبلة</Text>
                <Text style={[styles.qiblaSubtitle, { color: theme.textSecondary }]}>قم بتدوير الجهاز لضبط القبلة</Text>
            </Card>

            <Text style={[styles.sectionTitle, { color: theme.text }]}>مواقيت الصلاة اليوم</Text>

            <View style={styles.prayerList}>
                {PrayersDay.map((prayer) => (
                    <View
                        key={prayer.name}
                        style={[
                            styles.prayerRow,
                            { backgroundColor: prayer.active ? theme.success : theme.cardBackground },
                            prayer.active && { shadowColor: theme.success, shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 }
                        ]}
                    >
                        <Text style={[styles.prayerName, { color: prayer.active ? Colors.light.cardBackground : theme.text }]}>{prayer.name}</Text>
                        <Text style={[styles.prayerTime, { color: prayer.active ? Colors.light.cardBackground : theme.text }]}>{prayer.time}</Text>
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
    },
    header: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    locationTag: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: 'rgba(0,0,0,0.05)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    locationText: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 14,
    },
    qiblaCard: {
        alignItems: 'center',
        padding: 30,
        marginBottom: 20,
    },
    compassCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    qiblaTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    qiblaSubtitle: {
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    prayerList: {
        width: '100%',
    },
    prayerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        borderRadius: 12,
        marginBottom: 10,
    },
    prayerName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    prayerTime: {
        fontSize: 18,
        fontWeight: '600',
    },
});
