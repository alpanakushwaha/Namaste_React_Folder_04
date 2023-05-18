import { LOGO_URL } from "../utils/constants";

const title = (
  <h3 className="header3" key="keyOne">
    {" "}
    <a href="#anythingLikeClose">
      <img
        src={LOGO_URL}
        className="image_fooVilla"
        alt="image_foodVilla"
      ></img>
    </a>
  </h3>
);

const NavigationBar = () => {
  return (
    <>
      <div className="nav-itms ">
        <ul>
          <li>Nav-itemOne </li>
          <li>Nav-itemTwo </li>
          <li>Nav-itemThree </li>
          <li>Nav-Cart </li>
        </ul>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        {title}
        <NavigationBar />
      </div>
    </>
  );
};

export default Header;
