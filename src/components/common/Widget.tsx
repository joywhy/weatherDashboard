import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui';
function Widget({
  title,
  des,
  children,
  size,
}: {
  title: string;
  des: string;
  children: React.ReactNode;
  size?: string;
}) {
  // children  ReactNode 설명

  //테일윈드 색상 변수 설정 방법 그리고 글로벌 css 적용시 연동방법이 궁금합니다.
  return (
    <Card className={size}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{des}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export { Widget };
