import { Widget } from '../molecules/Widget';
import { Card } from '@/components/ui';
function Hourly() {
  /**
   * section 과 article
   *     section 은 좀더 포괄적으로 주제별 영역을 나누는 역할이고   article 은 좀더 구체적으로 블로그 글 포럼 뉴스 기사등을 나누는 역할이라고
   *    생각해서  오늘의 날씨를 today 는 article로 감쌌습니다.
   */

  const data = [
    { time: '오전0시', weather: 17, isSunset: false },
    { time: '오전1시', weather: 16, isSunset: false },
    { time: '오전2시', weather: 16, isSunset: false },
    { time: '오전3시', weather: 15, isSunset: false },
    { time: '오전4시', weather: 17, isSunset: false },
  ];
  return (
    <Widget
      title="Hourly"
      des="오늘의 시간대별 날씨를 조회하고 있습니다."
      size="col-span-2"
    >
      <div className="flex gap-3">
        {data.map((item, index) => (
          <HourlyCard
            key={index}
            time={item.time}
            weather={item.weather}
            isSunset={item.isSunset}
          />
        ))}
      </div>
    </Widget>
  );
}
function HourlyCard({
  time,
  weather,
  isSunset,
}: {
  time: string;
  weather: number;
  isSunset: boolean;
}) {
  return (
    <Card className="bg-[--gray-color-200] p-2 h-[125px] w-[97px] flex flex-col items-center justify-between">
      <p className="text-[--gray-color-300]">{time}</p>
      {isSunset ? (
        <img src="src/assets/icons/1000d.svg" alt="sunset" className="w-10" />
      ) : (
        <img src="src/assets/icons/1000n.svg" alt="sunset" className="w-10" />
      )}
      <span className="text-2xl">{weather}</span>
    </Card>
  );
}

export { Hourly };
