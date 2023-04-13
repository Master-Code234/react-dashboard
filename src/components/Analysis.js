const Analysis = () => {
  const data = [
    { id: 1, reviewCount: 960, name: "Positive Reviews" },
    { id: 2, likeCount: 500, name: "Likes" },
    { id: 3, badReview: 10, name: "Negative Reviews" },
  ];

  return (
    <div className="analysis">
      <h1 className="analysis-title">Analysis</h1>
      <ul className="data-items">
        {data.map((item, index) => (
          <li key={index}>
            {item.name + " : "}
            {item.likeCount}
            {item.reviewCount}
            {item.badReview}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Analysis;
