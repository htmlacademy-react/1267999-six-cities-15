import { Link } from 'react-router-dom';
import { AppRoute } from 'const/const';

type TLogoProps = {
  type: 'header' | 'footer';
};

const sizes = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

function Logo({ type }: TLogoProps) {
  const size = sizes[type];

  return (
    <Link to={AppRoute.Main} className={`${type}__logo-link`}>
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={size.width}
        height={size.height}
      />
    </Link>
  );
}

export default Logo;
