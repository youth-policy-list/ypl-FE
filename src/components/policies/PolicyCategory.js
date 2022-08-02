import "./PolicyCategory.css";

const PolicyCategory = () => {
  return (
    <article className="category__container">
      <div className="category__img-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135726.png"
          alt="test"
        ></img>
      </div>
      <div className="category__title-container">
        <p>취업지원</p>
      </div>
    </article>
  );
};

export default PolicyCategory;
