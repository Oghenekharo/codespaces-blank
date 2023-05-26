import { Drawer } from "expo-router/drawer";

export default function DrawerNav() {
  return (
    <Drawer>
        <Drawer.Screen
            name="about"
            options={{
              headerShown: true,
              headerTitleAlign: 'center'
            }}
        />
        <Drawer.Screen
            name="index"
        />
    </Drawer>
  );
}