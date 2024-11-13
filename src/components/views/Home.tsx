import Header from '../Header';
import Today from '@/components/organisms/Today';
import Hourly from '@/components/organisms/Hourly';
import Highlights from '@/components/organisms/Highlights';
import Weekly from '@/components/organisms/Weekly';
function HomePage() {
  return (
    <div className="page">
      {/* page__container 네이밍 규칙 scss 할때 좋음  */}
      <Header />
      <main className="page__container ">
        <Today />
        <Hourly />
        <div className=" col-span-1 bg-white rounded-md">지도</div>
        <Highlights />
        <Weekly />
      </main>
    </div>
  );
}

export default HomePage;
