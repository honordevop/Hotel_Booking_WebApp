import "./header.css";
import { FaBed, FaCar, FaPlane, FaTaxi, FaCalendarAlt } from 'react-icons/fa';
import { ImMan } from 'react-icons/im';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// import Option from "./Option";


const Header = ({type}) => {

    const [showDate, setShowDate] = useState(false)
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    //Passenger Option setting
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate()

    /*
    const displayDate = ()=> {
        if (!showDate) {
            setShowDate(true)
        } else {
            setShowDate(false)
        }        
    }*/

    const handleOption = (name, operation)=>{
        setOptions((prev) => {
            return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
        })
    }

    const handleSearch = ()=> {
        navigate("/hotels", {state: { destination, date, options }})
    }


    return (
        <div className="header">
            <div className={type === "list"? "headerContainer listMode" : "headerContainer"}>
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
                {type !== "list" && 
                <> 
                <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels-unlock instant savings of 10% or more with a free UtraBooking account </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className="headerIcon" />
                        <input 
                        type="text" 
                        placeholder="Where are you going?" 
                        className="headerSearchInput" 
                        onChange={(e)=> setDestination(e.target.value)}
                        />
                    </div>

                    <div className="headerSearchItem">
                        <FaCalendarAlt className="headerIcon" />
                        <span className="headerSearchText" onClick={() => setShowDate(!showDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {showDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            minDate={new Date()}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <ImMan className="headerIcon" />
                        <span className="headerSearchText" onClick={()=> setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>

                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                <button disabled={options.adult <=0 } className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                <button disabled={options.children <=0 } className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                <button disabled={options.room <=0 } className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}

export default Header