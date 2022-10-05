import "./option.css";

const Option = () => {
    return (
        <div>
            <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton">+</button>
                </div>

                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">0</span>
                    <button className="optionCounterButton">+</button>
                </div>

                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <button className="optionCounterButton">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionCounterButton">+</button>
                </div>
            </div>
        </div>
    )
}

export default Option