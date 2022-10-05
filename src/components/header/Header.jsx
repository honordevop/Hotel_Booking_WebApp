import "./header.css";
import { FaBed, FaCar, FaPlane, FaTaxi, FaCalendarAlt } from 'react-icons/fa';
import { ImMan } from 'react-icons/im';


const Header = () => {
  return (
    <div className="header">
          <div className="headerContainer">
              <div className="headerList">
                  <div className="headerListItem active">
                      <FaBed />
                      <span>Stays</span>
                  </div>

                  <div className="headerListItem">
                      <FaPlane />
                      <span>Flights</span>
                  </div>

                  <div className="headerListItem">
                      <FaCar />
                      <span>Car Rentals</span>
                  </div>

                  <div className="headerListItem">
                      <FaBed />
                      <span>Attractions</span>
                  </div>

                  <div className="headerListItem">
                      <FaTaxi />
                      <span>Airport taxis</span>
                  </div>
              </div>
              <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
              <p className="headerDesc">Get rewarded for your travels-unlock instant savings of 10% or more with a free UtraBooking account </p>
              <button className="headerBtn">Sign in / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                    <FaBed className="headerIcon"/>
                    <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                </div>

                <div className="headerSearchItem">
                <FaCalendarAlt className="headerIcon"/>
                    <span className="headerSearchText">date to date</span>
                </div>

                <div className="headerSearchItem">
                    <ImMan className="headerIcon"/>
                    <input type="text" placeholder="2 adults 2 children 1 room" className="headerSearchInput" />
                </div>

                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Header