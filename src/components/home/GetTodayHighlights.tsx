import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui';
import { GetSunTime } from './GetSunTime';
function GetTodayHighlightsCard() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl">Today's Highlights</CardTitle>
        <CardDescription>
          오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          {/* 해양 및 조수 데이터 */}
          <Card className="w-full bg-neutral-100">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                해양 및 조수 데이터
                <span className="text-neutral-400 font-normal ml-1">
                  Marine and Sailing
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex items-center justify-between">
              <img src="/assets/icons/Waves.png" alt="" className="h-14" />
              <div className="w-fit grid grid-cols-4 gap-3">
                {tideTimesWithUnits.map((tide, index) => (
                  <div className="flex flex-col items-center" key={index}>
                    <p className="text-sm text-muted-foreground">
                      {index + 1}회 - {tide.type === 'HIGH' ? '만조' : '간조'}
                    </p>
                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                      {tide.displayTime}
                      <span className="ml-[1px]">{tide.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* 일출/일몰 */}
          <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                일출/일몰
                <span className="text-neutral-400 font-normal ml-1">
                  Sunrise & Sunset
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 items-center">
              <GetSunTime time="07:00AM" suntime="Sunrise" />
              <GetSunTime time="05:34PM" suntime="Sunset" />
            </CardContent>
          </Card>
        </div>
        {/* <div className="w-full grid grid-cols-4 gap-5">
          <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                습도
                <span className="text-neutral-400 font-normal ml-1">
                  Humidity
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <img
                src="/assets/icons/Humidity.svg"
                alt=""
                className="h-10 w-10"
              />
              <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                {currentData.current.humidity}
                <span className="text-lg ml-1">%</span>
              </p>
            </CardContent>
          </Card>
          <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                기압
                <span className="text-neutral-400 font-normal ml-1">
                  Pressure
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <img src="/assets/icons/Wind.svg" alt="" className="h-10 w-10" />
              <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                {currentData.current.pressure_mb}
                <span className="text-lg ml-1">hPa</span>
              </p>
            </CardContent>
          </Card>
          <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                가시거리
                <span className="text-neutral-400 font-normal ml-1">
                  Visibility
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <img src="/assets/icons/Fog.svg" alt="" className="h-10 w-10" />
              <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                {currentData.current.vis_km}
                <span className="text-lg ml-1">km</span>
              </p>
            </CardContent>
          </Card>
          <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                체감온도
                <span className="text-neutral-400 font-normal ml-1">
                  Feels Like
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <img src="/assets/icons/Hot.svg" alt="" className="h-10 w-10" />
              <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight flex items-start">
                {Math.round(currentData.current.feelslike_c)}
                <span className="text-lg ml-[2px] -mt-[2px]">&#8451;</span>
              </p>
            </CardContent>
          </Card>
        </div> */}
      </CardContent>
    </Card>
  );
}

export { GetTodayHighlightsCard };
