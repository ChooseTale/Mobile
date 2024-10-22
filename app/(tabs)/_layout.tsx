import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import BookOpenIcon from "@/assets/icons/book-open.svg";
import BookOpenIconActive from "@/assets/icons/book-open-active.svg";
import EditIcon from "@/assets/icons/edit.svg";
import EditIconActive from "@/assets/icons/edit-active.svg";
import UserIcon from "@/assets/icons/user.svg";
import UserIconActive from "@/assets/icons/user-active.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          height: 60,
          borderTopColor: Colors.grey[900],
          borderTopWidth: 1,
        },
        tabBarItemStyle: {
          flexDirection: "column",
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "게임",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <BookOpenIconActive
                  width={24}
                  height={24}
                  style={{ marginBottom: -4 }}
                />
              ) : (
                <BookOpenIcon
                  width={24}
                  height={24}
                  style={{ marginBottom: -4 }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tab_builder_list"
        options={{
          title: "빌더",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <EditIconActive
                  width={24}
                  height={24}
                  style={{ marginBottom: -4 }}
                />
              ) : (
                <EditIcon width={24} height={24} style={{ marginBottom: -4 }} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tab_my_page"
        options={{
          title: "마이",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <UserIconActive
                  width={24}
                  height={24}
                  style={{ marginBottom: -4 }}
                />
              ) : (
                <UserIcon width={24} height={24} style={{ marginBottom: -4 }} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
