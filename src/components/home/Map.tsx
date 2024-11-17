import { useState } from 'react';
import { Card } from '../ui';
import { Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader } from '@/hooks/useKakaoLoader';

interface StateProps {
  center: { lat: number; lng: number };
  isPanto: boolean;
}
function WeatherMap() {
  useKakaoLoader();
  const [state, setState] = useState<StateProps>({
    center: { lat: 37.5586746, lng: 126.831078 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: true,
  });
  return (
    <>
      <Card className="rounded-lg overflow-hidden relative">
        <Map
          id="map"
          center={state.center}
          isPanto={state.isPanto}
          style={{ width: '100%', height: '100%' }}
          level={3}
        ></Map>
      </Card>
      <button
        className="z-10 absolute w-[100px]  top-2 right-2 bg-white p-2 rounded-lg shadow-md"
        onClick={(event) => {
          event.stopPropagation();
          console.log('동작');

          setState((prev) => {
            console.log(prev);
            return {
              center: { lat: 37.5586746, lng: 126.831078 },
              isPanto: true,
            };
          });
        }}
      >
        원래 좌표로 이동
      </button>
    </>
  );
}

export { WeatherMap };
