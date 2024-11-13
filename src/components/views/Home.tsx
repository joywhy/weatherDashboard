import { Header } from '@/components/ui';
import {
  GetTodayWidget,
  GetKakaoMapWidget,
  GetHourlyWidget,
} from '@/components/home';
function HomePage() {
  return (
    <div className="page">
      <div className="page__container bg-stone-900">
        <Header />
        {/* w-full 과 h-full 이 왜 나머지로 꽉차는 거지?
         page 가 100vh  100vw 라서 그런가 ?
         h-full이 지워지는 거라고 알면 된다. 
        */}
        <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
          <div className="w-full flex items-flex justify-start gap-6">
            <GetTodayWidget />
            <GetHourlyWidget />
            <GetKakaoMapWidget />
          </div>
          <div className="w-full flex items-center gap-6"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
