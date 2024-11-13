import { Widget } from '../common/Widget';

import { Card, CardTitle, CardDescription } from '@/components/ui';
function Highlights() {
  return (
    <Widget
      title="Today's Highlights"
      des="오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다."
      size="col-span-3 row-span-1"
    >
      <section className="w-full h-full  grid grid-cols-4  grid-rows-2 gap-5">
        {/* 해앵 및 조수 데이터 */}
        <WeatherInfo
          title="해양 및 조수 데이터"
          des="Marine and Sailing"
          style=" col-span-2 "
        >
          <div className="flex mt-6">
            <img
              className="w-11 mr-4"
              src="/src/assets/icons/Waves.png"
              alt="파도 사진"
            />
            <div className="wave-info flex gap-3">
              <div className="flex flex-col items-center ">
                <p className="text-sm color-red">1회 만조</p>
                <p className="text-[16px] "> 05:48am</p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-sm color-red">1회 만조</p>
                <p className="text-base "> 05:48am</p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-sm color-red">1회 만조</p>
                <p className="text-base "> 05:48am</p>
              </div>
            </div>
          </div>
        </WeatherInfo>
        {/* 일출/일몰*/}
        <WeatherInfo
          title="일출/일몰"
          des="Sunrise and Sunset"
          style="col-span-2"
        >
          <div className="flex gap-3 mt-6">
            <div className="sunrise flex">
              <img
                className="w-12 mr-3"
                src="/src/assets/icons/1000d.svg"
                alt="sunrise 사진"
              />
              <div className="">
                <p className="text-xs color-gray">Sunrise</p>
                <p className="text-2xl">07:00AM</p>
              </div>
            </div>
            <div className="Sunset flex">
              <img
                className="w-12 mr-3"
                src="/src/assets/icons/1000n.svg"
                alt="Sunset 사진"
              />
              <div className="">
                <p className="text-xs color-gray">Sunset</p>
                <p className="text-2xl">05:34PM</p>
              </div>
            </div>
          </div>
        </WeatherInfo>
        {/* 습도 */}
        <WeatherInfo
          title="습도"
          des="Humidity"
          style="col-span-1 flex flex-col justify-between"
        >
          <div className="flex justify-between ">
            <img
              className="w-[30px]"
              src="/src/assets/icons/Humidity.svg"
              alt="습도 이미지"
            />
            <p className="font-semibold text-2xl">
              64<span className="text-base"> %</span>
            </p>
          </div>
        </WeatherInfo>
        {/* 습도 */}
        <WeatherInfo
          title="습도"
          des="Humidity"
          style="col-span-1 flex flex-col justify-between"
        >
          <div className="flex justify-between ">
            <img
              className="w-[30px]"
              src="/src/assets/icons/Humidity.svg"
              alt="습도 이미지"
            />
            <p className="font-semibold text-2xl">
              64<span className="text-base"> %</span>
            </p>
          </div>
        </WeatherInfo>
        {/* 습도 */}
        <WeatherInfo
          title="습도"
          des="Humidity"
          style="col-span-1 flex flex-col justify-between"
        >
          <div className="flex justify-between ">
            <img
              className="w-[30px]"
              src="/src/assets/icons/Humidity.svg"
              alt="습도 이미지"
            />
            <p className="font-semibold text-2xl">
              64<span className="text-base"> %</span>
            </p>
          </div>
        </WeatherInfo>
        {/* 습도 */}
        <WeatherInfo
          title="습도"
          des="Humidity"
          style="col-span-1 flex flex-col justify-between"
        >
          <div className="flex justify-between ">
            <img
              className="w-[30px]"
              src="/src/assets/icons/Humidity.svg"
              alt="습도 이미지"
            />
            <p className="font-semibold text-2xl">
              64<span className="text-base"> %</span>
            </p>
          </div>
        </WeatherInfo>
      </section>
    </Widget>
  );
}

/**
 * 습도 Humidity
 * 기압  Pressure
 * 가시거리 Visibility
 */
function WeatherInfo({
  title,
  des,
  style,
  children,
}: {
  title: string;
  des: string;
  style: string;
  children: JSX.Element;
}) {
  return (
    <Card className={`p-5 ${style} `}>
      <div className="flex items-center gap-1">
        <CardTitle className="text-base ">{title}</CardTitle>
        <CardDescription className="text-s  color-gray-400">
          {des}
        </CardDescription>
      </div>
      {children}
    </Card>
  );
}

export { Highlights };
