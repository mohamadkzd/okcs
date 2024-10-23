import React from "react";
import Slider from "../../Components/Slider/Slider";
import Banner from "../../Components/Banner/Banner";
// import ProductSlider from "../../Components/ProductSlider/ProductSlider";
// import ProductSlider2 from "../../Components/ProductSlider2/ProductSlider2";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import Banner2 from "../../Components/Banner/Banner2";
import Magazaine from "../../Components/Magazine/Magazaine";
import Footer from "../../Components/Footer/Footer";
import ProductSlider2 from "../../Components/ProductSlider2/ProductSlider2";
const Home = () => {
  
  return <div>
    <Slider/>
    <Banner/>
    {/* <ProductSlider/> */}
    <Banner2/>
    <ProductSlider2/>
    <Magazaine/>
    <Footer/>
  </div>;
};

export default Home;
