import { Widget } from '../common/Widget';
function Weekly() {
  const data: props[] = [
    {
      img: '1003d',
      temp: 22,
      temp2: 14,
      date: '03 Nov',
      week: '일요일',
    },
    {
      img: '1003d',
      temp: 22,
      temp2: 14,
      date: '03 Nov',
      week: '일요일',
    },
    {
      img: '1006d',
      temp: 18,
      temp2: 14,
      date: '03 Nov',
      week: '일요일',
    },
    {
      img: '1006d',
      temp: 22,
      temp2: 14,
      date: '03 Nov',
      week: '화요일',
    },
    {
      img: '1006d',
      temp: 22,
      temp2: 14,
      date: '03 Nov',
      week: '월요일',
    },
    {
      img: '1006d',
      temp: 22,
      temp2: 14,
      date: '03 Nov',
      week: '수요일',
    },
  ];
  return (
    <Widget
      title="7 Days"
      des="이번주 날시를 조회하고 있습니다."
      size="col-span-1"
    >
      <ul className="mt-6 ">
        {data.map((item, idx) => (
          <DayInfoLi
            key={idx + 'd'}
            img={item.img}
            temp={item.temp}
            temp2={item.temp2}
            date={item.date}
            week={item.week}
          />
        ))}
      </ul>
    </Widget>
  );
}
interface props {
  img: string;
  temp: number;
  temp2: number;
  date: string;
  week:
    | '월요일'
    | '화요일'
    | '수요일'
    | '목요일'
    | '금요일'
    | '토요일'
    | '일요일';
}
function DayInfoLi({ img, temp, temp2, date, week }: props) {
  return (
    <li className="flex justify-between rounded bg-gray-50 p-2 mb-1">
      <div className="flex gap-3">
        <img
          className="w-6"
          src={`/src/assets/icons/${img}.svg`}
          alt="날씨 사진"
        />
        <p className="color-red">
          {temp}
          <span className="color-gray"> C</span>
        </p>
        <p className="color-blue-500">
          {temp2}
          <span className="color-gray"> C</span>
        </p>
      </div>

      <div className="flex gap-3">
        <p>{date}</p>
        <p>{week}</p>
      </div>
    </li>
  );
}
export { Weekly };
