import { Link } from 'react-router-dom';

import { SearchBar } from '@/components/ui';
function Header() {
  return (
    <header className="w-100">
      <div className="w-1/2 flex justify-start  items-start gap-4">
        <Link to={'/'}>
          <div className="flex ">
            <img
              className="w-9 border-white mr-2"
              src="src/assets/icons/logo.svg"
              alt="로고"
            />
            <h1 className="text-gray-200 font-bold text-2xl">Weather.io</h1>
          </div>
        </Link>
        <SearchBar
          className="flex-1 bg-white rounded"
          placeholder="검색할 지역의 이름을 입력하세요"
        />
      </div>
    </header>
  );
}

export default Header;
