import { clsx } from 'clsx';
import { ReactNode } from 'react';

type TLayoutProps = {
  header: ReactNode;
  children: ReactNode;
  className: string;
};

function MainLayout({ header, children, className }: TLayoutProps) {
  return (
    <div className={clsx('page', className)}>
      {header}
      {children}
    </div>
  );
}

export default MainLayout;
