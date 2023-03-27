import { FC, ReactNode } from 'react';

interface IDashboardLayout {
  children: ReactNode;
}

const Layout: FC<IDashboardLayout> = ({ children }) => {
  return (
    <main className="grid grid-cols-12 p-4">
      <aside className=" col-span-2 ">Aside</aside>
      <main className="w-full col-span-10">{children}</main>
    </main>
  );
};

export default Layout;
