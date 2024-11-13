import Card from '../molecules/Card';
function Weekly() {
  /**
   * section 과 article
   *     section 은 좀더 포괄적으로 주제별 영역을 나누는 역할이고   article 은 좀더 구체적으로 블로그 글 포럼 뉴스 기사등을 나누는 역할이라고
   *    생각해서  오늘의 날씨를 today 는 article로 감쌌습니다.
   */
  return (
    <Card
      title="7 Days"
      des="이번주 날시를 조회하고 있습니다."
      size="col-span-1"
    >
      <div></div>
    </Card>
  );
}

export default Weekly;
