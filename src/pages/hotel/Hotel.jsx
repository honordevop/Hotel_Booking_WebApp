import "./hotel.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { MdLocationPin } from 'react-icons/md';
import { RiCloseCircleFill } from 'react-icons/ri';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false)
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/37323917.jpg?k=23b62679d7704961fecfe4093ef9fb6e21b17013c746c40ec3e345dda2806df0&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/113278944.jpg?k=cf1f995dc24a373798bb57eb6b8140168a9c71f5665e61082fa2bb017b762308&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/230265141.jpg?k=e093088e84d0873a16ec1f8674f82e4be143b04765043232704707278c55e940&o=&hp=1"
    },
    {
      src: "https://media.istockphoto.com/photos/large-blue-house-with-white-trim-and-a-nice-lawn-picture-id484348010?k=20&m=484348010&s=612x612&w=0&h=dsM2EQ-8Gm8c5DcIdYRsvMtnHlcrYYTwdrQ8oEGoivI="
    },
    {
      src: "https://media.istockphoto.com/photos/spring-exterior-house-with-brown-siding-picture-id493921261?k=20&m=493921261&s=612x612&w=0&h=MRqXbFw3M6a_J6umx47FKt3X-he44PWFcXr3TbMfrTU="
    },
    {
      src: "https://media.istockphoto.com/photos/browns-point-lighthouse-cottage-3-picture-id1426281074?k=20&m=1426281074&s=612x612&w=0&h=mhBo80Nsz9bkeSEpvw_stIJhxebC8nPavs1AiKxq7Pg=                                      "
    }
  ]
  

  const handleSlideSwipe = (slideNumber, operation) => {
    let newSlideNumber
    if (operation === "prev") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber) 
  }

  const handleOpenSlider = (i) => {
    setSlideNumber(i)
    setOpenSlider(true)
    // console.log(i)
    return slideNumber
  }



return (
  <div>
    <Navbar />
    <Header type="list" />

    <div className="hotelContainer">
      {openSlider &&
        <div className="slider">
          <RiCloseCircleFill className="close" onClick={() => setOpenSlider(!openSlider)} />
          <FaArrowCircleLeft className="arrow" onClick={() => handleSlideSwipe(slideNumber, "prev")}  />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FaArrowCircleRight className="arrow" onClick={() => handleSlideSwipe(slideNumber, "next")} />

        </div>
      }

      <div className="hotelWrapper">
        <button className="bookNow">
          Reserve or Book Now!
        </button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <MdLocationPin />
          <span>Elton St. 125 New york</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photos, i) => (
            <div key={photos.src} className="hotelImgWrapper">
              <img onClick={() => handleOpenSlider(i)} src={photos.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>

        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">
              Each room here will provide you with a TV with satellite channels, air conditioning and a mini-bar. Complete with a refrigerator, the dining area also has an electric kettle. Featuring a shower, private bathroom also comes with a bath and a hairdryer.

              At Nobila Airport Hotel you will find an airport shuttle, a 24-hour front desk and a terrace. Other facilities offered at the property include luggage storage and laundry facilities. The property offers free parking.

              Couples in particular like the location – they rated it 8.8 for a two-person trip.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this has
              an excellent location score of 9.8
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now</button>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>


  </div>
)
}

export default Hotel