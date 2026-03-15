import { Card } from '@/components/ui/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { useAppStore } from '@/store/useAppStore';
import { Bell, Globe, Lock, Mail, MapPin, Moon, Phone, User, Volume2 } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function SettingsScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    const settings = useAppStore((state) => state.settings);
    const updateSettings = useAppStore((state) => state.updateSettings);

    const toggleDarkMode = () => updateSettings({ darkMode: !settings.darkMode });
    const toggleNotifications = () => updateSettings({ prayerNotifications: !settings.prayerNotifications });
    const toggleAdhan = () => updateSettings({ adhanAudio: !settings.adhanAudio });
    const toggleLanguage = () => updateSettings({ language: settings.language === 'ar' ? 'fr' : 'ar' });

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>

            <View style={styles.profileHeader}>
                <View style={[styles.avatar, { backgroundColor: theme.border }]}>
                    <User color={theme.textSecondary} size={40} />
                </View>
                <Text style={[styles.profileName, { color: theme.text }]}>عبد الله محمد</Text>
            </View>

            <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>المعلومات الشخصية</Text>
            <Card style={styles.card}>
                <View style={styles.inputGroup}>
                    <Mail color={theme.textSecondary} size={20} />
                    <TextInput style={[styles.input, { color: theme.text }]} placeholder="البريد الإلكتروني" placeholderTextColor={theme.textSecondary} defaultValue="abdullah@example.com" />
                </View>
                <View style={styles.divider} />
                <View style={styles.inputGroup}>
                    <Phone color={theme.textSecondary} size={20} />
                    <TextInput style={[styles.input, { color: theme.text }]} placeholder="رقم الهاتف" placeholderTextColor={theme.textSecondary} defaultValue="+212 600 000000" />
                </View>
                <View style={styles.divider} />
                <View style={styles.inputGroup}>
                    <Lock color={theme.textSecondary} size={20} />
                    <TextInput style={[styles.input, { color: theme.text }]} placeholder="كلمة المرور" placeholderTextColor={theme.textSecondary} secureTextEntry defaultValue="password123" />
                </View>
            </Card>

            <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>التفضيلات والتنبيهات</Text>
            <Card style={styles.card}>
                <View style={styles.settingRow}>
                    <View style={styles.settingLabelGroup}>
                        <Bell color={theme.textSecondary} size={20} />
                        <Text style={[styles.settingLabel, { color: theme.text }]}>تنبيهات الصلاة</Text>
                    </View>
                    <Switch value={settings.prayerNotifications} onValueChange={toggleNotifications} trackColor={{ true: theme.success }} />
                </View>
                <View style={styles.divider} />
                <View style={styles.settingRow}>
                    <View style={styles.settingLabelGroup}>
                        <Volume2 color={theme.textSecondary} size={20} />
                        <Text style={[styles.settingLabel, { color: theme.text }]}>صوت الأذان</Text>
                    </View>
                    <Switch value={settings.adhanAudio} onValueChange={toggleAdhan} trackColor={{ true: theme.success }} />
                </View>
                <View style={styles.divider} />
                <View style={styles.settingRow}>
                    <View style={styles.settingLabelGroup}>
                        <Moon color={theme.textSecondary} size={20} />
                        <Text style={[styles.settingLabel, { color: theme.text }]}>الوضع الليلي</Text>
                    </View>
                    <Switch value={settings.darkMode} onValueChange={toggleDarkMode} trackColor={{ true: theme.success }} />
                </View>
                <View style={styles.divider} />
                <View style={styles.settingRow}>
                    <View style={styles.settingLabelGroup}>
                        <Globe color={theme.textSecondary} size={20} />
                        <Text style={[styles.settingLabel, { color: theme.text }]}>اللغة (عربي / فرنسي)</Text>
                    </View>
                    <Switch value={settings.language === 'fr'} onValueChange={toggleLanguage} trackColor={{ true: theme.success }} />
                </View>
                <View style={styles.divider} />
                <View style={styles.settingRow}>
                    <View style={styles.settingLabelGroup}>
                        <MapPin color={theme.textSecondary} size={20} />
                        <Text style={[styles.settingLabel, { color: theme.text }]}>صلاحية الموقع الجغرافي</Text>
                    </View>
                    <Text style={{ color: theme.success, fontWeight: 'bold' }}>مُفعّل</Text>
                </View>
            </Card>

            <View style={{ height: 50 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    profileHeader: {
        alignItems: 'center',
        marginVertical: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 20,
    },
    card: {
        padding: 0,
        paddingVertical: 10,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
        textAlign: 'right', // Arabic alignment
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    settingLabelGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingLabel: {
        marginLeft: 15,
        fontSize: 16,
    },
});
