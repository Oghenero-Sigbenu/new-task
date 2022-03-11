
interface ErrorTypeProps {
    icon:any;
    title: string,
    rate: number;
    searchFigureYesterday: number,
    searchFigureLastFriday: number,
    dataTitle: string,
    dataValue: number,
    secDataTitle: string,
    secDataValue: number,
    dataDetail: string,
    features: any
}

function SearchCard({icon, rate, dataTitle,features, dataDetail, secDataTitle, secDataValue, dataValue, searchFigureLastFriday, searchFigureYesterday, title}: ErrorTypeProps) {
  return (
    <div className="search-section__card">
        <div className="search-section__card__flex">
        <div className="search-section__icon">
        <div className="search-section__icon__indicator"></div>
        {icon}
        </div>
        <div className="search-section__detail">
            <h4 className="search-section__title_p">{title} {rate === 0 ? " " :<span className="search-section__icon__rate">{rate}%</span>}</h4>
            <span className="search-section__title flex"><h3>{searchFigureYesterday} </h3><p>Yesterday</p></span>
            <span className="search-section__value flex"><h3>{searchFigureLastFriday} </h3><p>Last friday</p></span>
        </div>
        </div>
        <div className="search-section__traffic">
            <h4>{dataTitle}: {dataValue}%</h4>
            <h4>{secDataTitle}: {secDataValue}%</h4>
            <div className="search-section__value">
              <p>{dataDetail}</p>
              </div>
            <div>Help: <p>{features}</p></div>
            {/* <div>Help: <p>Searches, Presentation</p></div> */}
        </div>
    </div>
  );
}

export default SearchCard;
