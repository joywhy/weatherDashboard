import { useState } from 'react';
// import { Card } from '../ui';
import { Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader } from '@/hooks/useKakaoLoader';

interface StateProps {
  center: { lat: number; lng: number };
  isPanto: boolean;
}
function WeatherMap() {
  //작동작 하지 않았을때를 감지하는 코드 그래서
  // 스켈레톤 보여주기
  useKakaoLoader();
  const [state, setState] = useState<StateProps>({
    center: { lat: 33.450701, lng: 126.570667 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: true,
  });
  return (
    <>
      <Map
        // id="map
        center={state.center}
        isPanto={state.isPanto}
        style={{ width: '100%', height: '100%' }}
        level={3}
      ></Map>

      <button
        className="z-10 absolute w-[100px]  top-2 right-2 bg-white p-2 rounded-lg shadow-md"
        onClick={() => {
          // event.stopPropagation();
          console.log('동작');

          setState({
            center: { lat: 33.450701, lng: 126.570667 },
            isPanto: true,
          });
        }}
      >
        원래 좌표로 이동
      </button>
    </>
  );
}

export { WeatherMap };
