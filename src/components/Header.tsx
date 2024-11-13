import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

function Header() {
  return (
    <header className="w-100">
      <div className="w-1/2 flex justify-start  items-start gap-4">
        <Link to={'/'}>
          <div className="flex">
            <img
              className="w-9 border-white mr-2"
              src="src/assets/icons/logo.svg"
              alt="로고"
            />
            <h1 className="text-gray-200 font-bold text-2xl">Weather.io</h1>
          </div>
        </Link>
        <Input className="flex-1 " />
      </div>
    </header>
  );
}

export default Header;
