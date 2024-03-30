import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../styles/slider.module.scss";
import slide1 from "../images/sliders/slide-1.jpg";
import slide2 from "../images/sliders/slide-2.jpg";
import slide3 from "../images/sliders/slide-3.jpg";

const images = [
    {
        imgPath: slide1,
        imgText: "С нами ты не остановишься на победе, ты будешь её создавать!",
        key: 0
    },
    {
        imgPath: slide2,
        imgText: "Играй вместе с нами и достигай вершин!",
        key: 1
    },
    {
        imgPath: slide3,
        imgText: "Присоединяйся к нам и стань победителем!",
        key: 2
    },
];



export default function UiSlider() {
    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <Slider {...settings} className={Style.slider}>
            {images.map(item => {
                return (
                    <div className={Style.slide} key={item.key}>
                          <img  src={item.imgPath} alt="" />
                          <p>{item.imgText}</p>
                    </div>
                )
            })}
        </Slider>
    );
}
