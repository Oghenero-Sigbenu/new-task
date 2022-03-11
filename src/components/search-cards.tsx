
interface ErrorTypeProps {
    icon:any;
    title: string,
    rate: number;
    searchFigureYesterday: number,
    searchFigureLastFriday: number
}

function SearchCard({icon, rate, searchFigureLastFriday, searchFigureYesterday, title}: ErrorTypeProps) {
  return (
    <div className="search-section__card">
        <div className="search-section__card__flex">
        <div className="search-section__icon">
        <div className="search-section__icon__indicator"></div>
        {icon}
        </div>
        <div className="search-section__detail">
            <h4 className="search-section__title_p">{title} <span className="search-section__icon__rate">{rate}%</span></h4>
            <span className="search-section__title flex"><h3>{searchFigureYesterday} </h3><p>Yesterday</p></span>
            <span className="search-section__value flex"><h3>{searchFigureLastFriday} </h3><p>Last friday</p></span>
        </div>
        </div>
        <div className="search-section__traffic">
            <h4>Mobile traffic: 100%</h4>
            <h4>Web traffic: 100%</h4>
            <div className="search-section__value"><p>You get 100% traffic on mobile and desktop devices</p></div>
            <div>Help: <p>Searches, Presentation</p></div>
        </div>
    </div>
  );
}

export default SearchCard;
