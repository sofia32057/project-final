import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./sections/Header";
import { Suspense } from "react";

export const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main className={navigation.state === "loading" ? "loading" : ""}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
