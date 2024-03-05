import HeaderNav from 'components/header-nav';
import Logo from 'components/logo/logo.tsx';

type THeaderNavProps = {
  isNav: boolean;
};

function Header({ isNav }: THeaderNavProps) {
  return (
    <div className="header__wrapper">
      <div className="header__left">
        <Logo type="header" />
      </div>
      {isNav && <HeaderNav />}
    </div>
  );
}

export default Header;
