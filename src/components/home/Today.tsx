import { Widget } from '../common/Widget';
import { Separator } from '@/components/ui';
function Today() {
  const data = {
    temp: 19,
    weather: 'sunny',
    date: '2024-11-03',
    country: 'Seoul-South Korea',
  };
  return (
    <Widget title="Today" des="오늘현재날씨를 조회하고 있습니다.">
      {/* h-4/5 가 아닌 최대한 늘어날 . 수있는 만큼 계산 */}
      <div className="flex flex-col justify-between  ">
        <div className="flex  items-center ">
          <img
            src={`src/assets/icons/1000d.svg`}
            alt="날씨 아이콘"
            className="mr-3 w-11"
          />
          <p className="color-black-300 font-semibold text-4xl">
            {data.temp}%c
          </p>
        </div>
        <Separator className="my-4 " />
        <ul className="">
          <li className="flex mt-2">
            <img
              src={`src/assets/icons/1000d.svg`}
              alt="날짜 아이콘"
              className="mr-3 box-border w-5 "
            />
            <span className="color-gray-300 text-base">{data.date}</span>
          </li>
          <li className="flex mt-2">
            <img
              src={`src/assets/icons/1000d.svg`}
              alt="지역 아이콘"
              className="mr-3 box-border w-5"
            />
            <span className="color-gray-300 text-base">{data.country}</span>
          </li>
        </ul>
      </div>
    </Widget>
  );
}

export { Today };
