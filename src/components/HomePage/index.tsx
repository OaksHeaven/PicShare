import StorageBox from "../StorageBox";
import Header from "../Header";

import "./index.scss";

//主页
function HomePage() {
  return (
    <div className="contBox homePage">
      <Header />
      <StorageBox />
      <div className="mainCont">
        <div className="find"></div>
        <div className="ground"></div>
      </div>
    </div>
  );
}

export default HomePage;
