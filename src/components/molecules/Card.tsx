function Card({
  title,
  des,
  children,
  size,
}: {
  title: string;
  des: string;
  children: React.ReactNode;
  size: string;
}) {
  // children  ReactNode 설명
  //article / section  둘중 선택할 수 있도록
  //테일윈드 색상 변수 설정 방법 그리고 글로벌 css 적용시 연동방법이 궁금합니다.
  return (
    <article className={`rounded-md p-8 ${size} bg-white`}>
      <h2 className="font-semibold text-base text-black-200">{title}</h2>
      <p className="text-sm text-gray-200 mt-2">{des}</p>
      {children}
    </article>
  );
}

export default Card;
