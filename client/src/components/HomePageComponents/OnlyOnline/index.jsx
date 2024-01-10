import "./index.scss";

const OnlyOnline = () => {
  return (
    <section id="only-online">
      <div className="only-online-content">
        <h3>Only Online</h3>
        <ul>
          <li>
            <span>00</span>
            Days
          </li>
          <li>
            <span>00</span>
            Hours
          </li>
          <li>
            <span>00</span>
            Mins
          </li>
          <li>
            <span>00</span>
            Sec
          </li>
        </ul>
        <p className="first-paragraph">
          Get 30% off your order of $100 or more
        </p>
        <p className="second-paragraph"> Use code “TOPBIKE30”</p>
        <button className="only-online-button" >SHOP NOW</button>
      </div>
    </section>
  );
};

export default OnlyOnline;
