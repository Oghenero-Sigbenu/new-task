
interface ErrorTypeProps {
    type1:number;
    type2:number;
    error: number;
}

function ErrorType({type1, type2, error}: ErrorTypeProps) {
  return (
    <div className="section__tab__content__error-type__item">
        <div className="section__tab__content__error-type__status"></div>
        <p>Error {error}: {type1} {type2}</p>
    </div>
  );
}

export default ErrorType;
