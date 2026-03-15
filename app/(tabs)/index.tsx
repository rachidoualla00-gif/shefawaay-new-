import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { DailyDua, DailyHadith } from '@/data/mockData';
import { Bell } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }));
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.dateText, { color: theme.textSecondary }]}>
          14 مارس 2026 • 24 رمضان 1447
        </Text>
      </View>

      <Card style={[styles.heroCard, { backgroundColor: theme.success }]}>
        <View style={styles.heroHeader}>
          <Text style={styles.prayerTitle}>الصلاة القادمة</Text>
          <Bell color={Colors.light.cardBackground} size={20} />
        </View>
        <Text style={styles.prayerName}>المغرب</Text>
        <Text style={styles.prayerTime}>18:45</Text>
        <Text style={styles.countdown}>باقي 01:23:10</Text>
      </Card>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>حديث اليوم</Text>
      <Card style={styles.contentCard}>
        <Text style={[styles.contentText, { color: theme.text }]}>{DailyHadith.text}</Text>
        <Text style={[styles.sourceText, { color: theme.textSecondary }]}>- {DailyHadith.source}</Text>
      </Card>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>دعاء اليوم</Text>
      <Card style={styles.contentCard}>
        <Text style={[styles.contentText, { color: theme.text, fontSize: 18, textAlign: 'center' }]}>{DailyDua.text}</Text>
        <Text style={[styles.sourceText, { color: theme.textSecondary, textAlign: 'center' }]}>- {DailyDua.source}</Text>
      </Card>

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
    marginBottom: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
  },
  heroCard: {
    padding: 30,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  prayerTitle: {
    color: '#fff',
    fontSize: 18,
    opacity: 0.9,
  },
  prayerName: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  prayerTime: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  countdown: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'left',
  },
  contentCard: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 28,
    marginBottom: 10,
    textAlign: 'justify',
  },
  sourceText: {
    fontSize: 14,
    textAlign: 'right',
  },
});
