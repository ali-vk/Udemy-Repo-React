import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventNavigation";

export default function RootLayout() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
}
