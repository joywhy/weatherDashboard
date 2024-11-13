import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '@/hooks/useKaKaoLoader';
import { Card } from '@/components/ui';

function GetKakaoMapWidget() {
  useKakaoLoader();

  return (
    <Card className="w-1/4 min-w-[25%]">
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.5683,
          lng: 126.9778,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100%',
          borderRadius: '8px',
        }}
        level={13} // 지도의 확대 레벨
      ></Map>
    </Card>
  );
}

export { GetKakaoMapWidget };
