import { Link, Tabs } from 'expo-router';
import { BookOpen, BookText, Compass, Home, Settings as SettingsIcon, ShoppingBag } from 'lucide-react-native';
// Removed React import to avoid React 19 default export issues
import { Pressable, View } from 'react-native';

import { AssistantFAB } from '@/components/AssistantFAB';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          tabBarStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            borderTopColor: Colors[colorScheme ?? 'light'].border,
            borderTopWidth: 1,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
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
                <Pressable style={{ marginRight: 20 }}>
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
      <AssistantFAB />
    </View>
  );
}
