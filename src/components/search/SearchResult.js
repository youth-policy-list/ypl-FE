import "./SearchResult.css";

const SearchResult = ({ date }) => {
  let is_imminent = date < 7 ? "imminent" : null;

  return (
    <div className="result-container">
      <div className="result__title-container">
        <span>국민내일배움카드</span>
        {is_imminent ? (
          <div className="result__title__date imminent">{`D-${date}`}</div>
        ) : (
          <div className="result__title__date">{`D-${date}`}</div>
        )}
      </div>
      <div className="result__desc-container">
        <div className="result__desc__specific">
          <div>주관 기관 : 고용노동부</div>
          <div>지원 대상 : 만 19세 ~ 34세</div>
        </div>
        <div className="result__desc__tag"># 주거·금융</div>
      </div>
    </div>
  );
};

export default SearchResult;
