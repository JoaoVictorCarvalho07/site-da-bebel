import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const [logoSrc, setLogoSrc] = useState('./logo/logo_isabel2.png');
  const location = useLocation();

  // Determine text color based on current page
  // SobreMim and Contato use inverse theme (dark text on light background)
  // Other pages use light text fixed
  const isDarkThemePage = ['/sobre', '/contato'].includes(location.pathname);
  const textColorClass = isDarkThemePage ? 'text-primary' : 'text-white';

  console.log(location.pathname);
  useEffect(() => {
    const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');

    const onChange = () => {
      console.log('sistema mudou para:', mediaDark.matches ? 'dark' : 'light');
      setLogoSrc(
        !isDarkThemePage
          ? '/logo/logo_isabel_branca.png'
          : mediaDark.matches
            ? '/logo/logo_isabel_branca.png'
            : '/logo/logo_isabel2.png',
      );
    };

    onChange(); // roda 1x no load
    mediaDark.addEventListener('change', onChange);
    return () => mediaDark.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const isDarkThemePage = ['/sobre', '/contato'].includes(location.pathname);

    const logoChange = () => {
      setLogoSrc(
        !isDarkThemePage
          ? '/logo/logo_isabel_branca.png'
          : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? '/logo/logo_isabel_branca.png'
            : '/logo/logo_isabel2.png',
      );
    };
    logoChange();
  }, [location.pathname]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // sempre aparece se estiver bem no topo
      if (y < 25) {
        setVisible(true);
        lastY.current = y;
        return;
      }

      // evita ficar tremendo com micro scroll
      if (Math.abs(delta) < 8) return;

      // desceu -> esconde | subiu -> mostra
      setVisible(delta < 0);

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        [
          `${textColorClass} sticky top-0 z-50 border-b w-full fixed top-0 left-0 right-0 z-50 justify-end px-5 py-3`,
          'transition-all duration-300 bg-transparent border-transparent',
          visible ? 'translate-y-0' : '-translate-y-full',
        ].join(' '),
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-bold max-w-50">
          <img src={logoSrc} alt="" />
        </Link>

        {/* links desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            to="/portfolio"
            className="transition-opacity hover:opacity-75 hover:scale-125"
          >
            Portfólio
          </Link>
          <Link
            to="/blog"
            className="transition-opacity hover:opacity-75 hover:scale-125"
          >
            Blog
          </Link>
          <Link
            to="/parceiros"
            className="transition-opacity hover:opacity-75 hover:scale-125"
          >
            Parceiros
          </Link>
          <Link
            to="/sobre"
            className="transition-opacity hover:opacity-75 hover:scale-125"
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="transition-opacity hover:opacity-75 hover:scale-125"
          >
            Contato
          </Link>
        </nav>

        {/* hamburger mobile */}
        <HamburgerMenu />
      </div>
    </header>
  );
}
