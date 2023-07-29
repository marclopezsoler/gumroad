import "./LandingContainer.scss";
import mainImage from "../assets/img/landing_1.png";
import floatImage1 from "../assets/img/landing_1_icon_1.svg";
import floatImage2 from "../assets/img/landing_1_icon_2.svg";
import floatImage3 from "../assets/img/logo.png";

function LandingContainer() {
  return (
    <div className="landing">
      <section className="landing_left">
        <div>
          <h2>
            Go from
            <br />
            zero to $1
          </h2>
          <h4>
            With Gumroad, anyone can earn their first dollar online. Just start with what you know, see what sticks, and get paid. It’s that easy.
          </h4>
          <div className="sell_btn">
            <a>Start Selling</a>
            <a className="shadow_1">Start Selling</a>
            <a className="shadow_2">Start Selling</a>
          </div>
        </div>
      </section>
      <section className="landing_right">
        <img src={mainImage} className="main_image" />
        <div className="floatImage1_parent">
          <img src={floatImage1} className="floatImage1" />
        </div>
        <div className="floatImage2_parent">
          <img src={floatImage2} className="floatImage2" />
        </div>
        <div className="floatImage3_parent">
          <a className="floatImage3_div floatImage3_div_original" href="https://byvegalia.gumroad.com/?recommended_by=search" target="_blank">
            <img src={floatImage3} className="floatImage3" />
            <p>Vegalia</p>
          </a>
          <div className="floatImage3_div floatImage3_shadow">
            <img src={floatImage3} className="floatImage3" />
            <p>Vegalia</p>
          </div>
        </div>
        <div className="text_parent">
          <p>Vegalia sells Procreate brushes</p>
        </div>
      </section>
    </div>
  );
}

export default LandingContainer;
