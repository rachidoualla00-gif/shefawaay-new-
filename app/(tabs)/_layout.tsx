import { Link, Tabs } from 'expo-router';
import { BookOpen, BookText, Compass, Home, Settings as SettingsIcon, ShoppingBag } from 'lucide-react-native';
// Removed React import to avoid React 19 default export issues
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopColor: Colors[colorScheme ?? 'light'].border,
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color }) => <Home color={color} size={28} />,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={{ marginRight: 15 }}>
                {({ pressed }) => (
                  <SettingsIcon
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="quran"
        options={{
          title: 'القرآن',
          tabBarIcon: ({ color }) => <BookOpen color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="doros"
        options={{
          title: 'الدروس',
          tabBarIcon: ({ color }) => <BookText color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="prayer"
        options={{
          title: 'الصلاة',
          tabBarIcon: ({ color }) => <Compass color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: 'المتجر',
          tabBarIcon: ({ color }) => <ShoppingBag color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
