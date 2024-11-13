import Card from '../molecules/Card';
function Today() {
  /**
   * section 과 article
   *     section 은 좀더 포괄적으로 주제별 영역을 나누는 역할이고   article 은 좀더 구체적으로 블로그 글 포럼 뉴스 기사등을 나누는 역할이라고
   *    생각해서  오늘의 날씨를 today 는 article로 감쌌습니다.
   */
  const data = {
    temp: 19,
    weather: 'sunny',
    date: '2024-11-03',
    country: 'Seoul-South Korea',
  };
  return (
    <Card
      title="Today"
      des="오늘현재날씨를 조회하고 있습니다."
      size="col-start-1 col-span-1"
    >
      {/* h-4/5 가 아닌 최대한 늘어날 . 수있는 만큼 계산 */}
      <div className="flex flex-col justify-between h-4/5 ">
        <div className="flex my-8 gap-2 items-center ">
          <img
            src={`src/assets/${data.weather}.png`}
            alt="날씨 아이콘"
            className="mr-3"
          />
          <p className="color-black-300 font-semibold text-4xl">
            {data.temp}%c
          </p>
        </div>
        <hr className="border-b-2 border-gray" />
        <ul className="">
          <li className="flex mt-2">
            <img
              src={`src/assets/schedule.png`}
              alt="날짜 아이콘"
              className="mr-3 box-border w-5 "
            />
            <span className="color-gray-300">{data.date}</span>
          </li>
          <li className="flex mt-2">
            <img
              src={`src/assets/state.png`}
              alt="지역 아이콘"
              className="mr-3 box-border w-5"
            />
            <span className="color-gray-300">{data.country}</span>
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default Today;
