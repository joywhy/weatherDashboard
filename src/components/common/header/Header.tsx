import { SearchBar } from '@/components/ui';

function Header() {
  {
    /* page__container 네이밍 규칙 sass 할때 좋음 
       h-20 이라면 20*4 = 80px 이라는 뜻
       시멘틱태그는 원칙적으로 꽉차게 잡는게 좋으므로 header는 full 내부 영역은 50% 로 잡기
      */
  }
  return (
    <header className="w-full h-20 flex items-center p-6 gap-6">
      <div className="w-1/2 flex items-center justify-start gap-6">
        <div className="h-full flex items-center justify-center gap-2">
          <img src="src/assets/icons/logo.svg" alt="로고" className="h-10" />
          <h3 className="poppins-bold scroll-m-20 text-2xl font-semibold tracking-tight text-white">
            Weather.io
          </h3>
        </div>
        {/* flex-1 나머지 영역 꽉차게!!! 해결  */}
        <SearchBar
          placeholder="검색할 지역 이름을 영어로 입력하세요."
          className="flex-1"
        />
      </div>
    </header>
  );
}

export { Header };
