const Exponent = ({ count, exponent }) => {
  const result = Math.pow(count, exponent);
  const multiplicationExpression = Array(exponent)
    .fill(count)
    .map((value, index) => (
      <span key={index}>
        {value}
        {index < exponent - 1 ? " * " : ""}
      </span>
    ));

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}^{exponent}
      </p>
      <p className="exponent-result">
        {multiplicationExpression} =<span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
