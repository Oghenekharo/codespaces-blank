import { Drawer } from "expo-router/drawer";

export default function DrawerNav() {
  return (
    <Drawer>
        <Drawer.Screen
            name="about"
        />
    </Drawer>
  );
}