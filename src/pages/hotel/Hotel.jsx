import "./hotel.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { MdLocationPin } from 'react-icons/md';

const Hotel = () => {


  const photos = [
    {
      src: "https://media.istockphoto.com/photos/gables-by-the-sea-picture-id181879824?k=20&m=181879824&s=612x612&w=0&h=V4Vm9i2r7pOv9HTAk1PEMJI4etOUR_XiUSDdn8WE7sA="
    },
    {
      src: "https://media.istockphoto.com/photos/kids-playground-in-the-backyard-of-blue-craftsman-home-picture-id876245686?k=20&m=876245686&s=612x612&w=0&h=4OXVKFXpW2wjEXwAHm07TzyEYqoMlXxCvfDL50hPJ_0="
    },
    {
      src: "https://media.istockphoto.com/photos/modern-small-colored-houses-built-in-the-countryside-picture-id1206722162?k=20&m=1206722162&s=612x612&w=0&h=KdWkpWkUkWKi34xqhkE8bnT1VPJGsgQW-xmHebMdv58="
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

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
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
            {photos.map(photos => (
              <div key={photos.src} className="hotelImgWrapper">
                <img src={photos.src} alt="" className="hotelImg" />
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
        <MailList/>
        <Footer/>
      </div>


    </div>
  )
}

export default Hotel