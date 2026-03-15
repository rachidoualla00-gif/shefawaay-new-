import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { DailyDua, DailyHadith, HomeCategories } from '@/data/mockData';
import { Bell, Book, BookOpen, Compass, ShoppingBag } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const IconMap: any = {
  BookOpen: BookOpen,
  Book: Book,
  Compass: Compass,
  ShoppingBag: ShoppingBag,
};

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
          15 مارس 2026 • 25 رمضان 1447
        </Text>
      </View>

      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop' }}
        style={styles.heroContainer}
        imageStyle={{ borderRadius: 24 }}
      >
        <View style={[styles.heroOverlay, { backgroundColor: 'rgba(21, 45, 33, 0.7)' }]}>
          <View style={styles.heroHeader}>
            <Text style={styles.prayerTitle}>الصلاة القادمة</Text>
            <Bell color="#fff" size={20} />
          </View>
          <Text style={styles.prayerName}>الفجر</Text>
          <Text style={styles.prayerTime}>05:12</Text>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdown}>باقي 03:45:10</Text>
          </View>
        </View>
      </ImageBackground>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>وصول سريع</Text>
      <View style={styles.categoriesGrid}>
        {HomeCategories.map((cat) => {
          const Icon = IconMap[cat.icon];
          return (
            <TouchableOpacity key={cat.id} style={styles.categoryItem}>
              <View style={[styles.iconCircle, { backgroundColor: theme.cardBackground }]}>
                <Icon color={theme.success} size={28} />
              </View>
              <Text style={[styles.categoryLabel, { color: theme.text }]}>{cat.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

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

      <View style={{ height: 120 }} />
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
    fontWeight: '600',
  },
  heroContainer: {
    height: 220,
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 24,
  },
  heroOverlay: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 20,
    paddingHorizontal: 25,
  },
  prayerTitle: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
    fontWeight: '600',
  },
  prayerName: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  prayerTime: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
  },
  countdownContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  countdown: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'right',
  },
  categoriesGrid: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: '23%',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  contentCard: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 15,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 28,
    marginBottom: 12,
    textAlign: 'justify',
  },
  sourceText: {
    fontSize: 13,
    textAlign: 'left',
    opacity: 0.7,
  },
});
