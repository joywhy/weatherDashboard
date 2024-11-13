import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

function Header() {
  return (
    <header className="w-100 flex justify-start">
      <Link to={'/'}>
        <div className="logo flex">
          <img className="w-35px h-31px border-white" src="" alt="로고" />
          <h1 className="text-white font-bold">Weather.io</h1>
        </div>
      </Link>
      <Input className="w-50 ml-3" />
    </header>
  );
}

export default Header;
