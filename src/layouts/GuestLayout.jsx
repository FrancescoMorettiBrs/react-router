import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const GuestLayout = () => {
  return (
    <>
      <AppHeader />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default GuestLayout;
