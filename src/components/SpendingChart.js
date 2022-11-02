import { useState } from "react";
import "./SpendingChart.css";

export default function SpendingChart(props) {
  const [highestAmount, setHighestAmount] = useState(
    Math.max(...props.weekData.map((day) => day.amount))
  );
  const [showMonAmount, setShowMonAmount] = useState(false);
  const [showTueAmount, setShowTueAmount] = useState(false);
  const [showWedAmount, setShowWedAmount] = useState(false);
  const [showThuAmount, setShowThuAmount] = useState(false);
  const [showFriAmount, setShowFriAmount] = useState(false);
  const [showSatAmount, setShowSatAmount] = useState(false);
  const [showSunAmount, setShowSunAmount] = useState(false);

    function setBackgroundColor(showDayAmount, dayNum) {  
        if (props.weekData[dayNum].amount === highestAmount) {
            return 'hsl(186, 34%, 60%)'
        }
        else {
            return showDayAmount ? 'hsla(10, 79%, 65%, 0.688)' : 'hsl(10, 79%, 65%)'
        }
    }

  return (
    <div className="chart__grid">
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showMonAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[0].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[0].amount / highestAmount) * 80 + "%",
            gridColumn: "1",
            // backgroundColor: showMonAmount ? 'hsl(33, 100%, 98%)' : 'hsl(10, 79%, 65%)'
            backgroundColor: (() => setBackgroundColor(showMonAmount, 0))(),
          }}
          onMouseEnter={() => {
            setShowMonAmount(true);
          }}
          onMouseLeave={() => {
            setShowMonAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "1" }}>
        <p>mon</p>
      </div>
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showTueAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[1].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[1].amount / highestAmount) * 80 + "%",
            gridColumn: "2",
            backgroundColor: (() => setBackgroundColor(showTueAmount, 1))()
          }}
          onMouseEnter={() => {
            setShowTueAmount(true);
          }}
          onMouseLeave={() => {
            setShowTueAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "2" }}>
        <p>tue</p>
      </div>
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showWedAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[2].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[2].amount / highestAmount) * 80 + "%",
            gridColumn: "3",
            backgroundColor: (() => setBackgroundColor(showWedAmount, 2))()
          }}
          onMouseEnter={() => {
            setShowWedAmount(true);
          }}
          onMouseLeave={() => {
            setShowWedAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "3" }}>
        <p>wed</p>
      </div>
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showThuAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[3].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[3].amount / highestAmount) * 80 + "%",
            gridColumn: "4",
            backgroundColor: (() => setBackgroundColor(showThuAmount, 3))()
          }}
          onMouseEnter={() => {
            setShowThuAmount(true);
          }}
          onMouseLeave={() => {
            setShowThuAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "4" }}>
        <p>thu</p>
      </div>
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showFriAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[4].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[4].amount / highestAmount) * 80 + "%",
            gridColumn: "5",
            backgroundColor: (() => setBackgroundColor(showFriAmount, 4))()
          }}
          onMouseEnter={() => {
            setShowFriAmount(true);
          }}
          onMouseLeave={() => {
            setShowFriAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "5" }}>
        <p>fri</p>
      </div>
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showSatAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[5].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[5].amount / highestAmount) * 80 + "%",
            gridColumn: "6",
            backgroundColor: (() => setBackgroundColor(showSatAmount, 5))()
          }}
          onMouseEnter={() => {
            setShowSatAmount(true);
          }}
          onMouseLeave={() => {
            setShowSatAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "6" }}>
        <p>sat</p>
      </div>
      <div className="col__bar__container">
        <div
          className="day__price"
          style={{
            display: showSunAmount ? "flex" : "none",
          }}
        >
          <p>{props.weekData[6].amount}</p>
        </div>
        <div
          className="bar"
          style={{
            height: (props.weekData[6].amount / highestAmount) * 80 + "%",
            gridColumn: "7",
            backgroundColor: (() => setBackgroundColor(showSunAmount, 6))()
          }}
          onMouseEnter={() => {
            setShowSunAmount(true);
          }}
          onMouseLeave={() => {
            setShowSunAmount(false);
          }}
        ></div>
      </div>
      <div className="col__day__container" style={{ gridColumn: "7" }}>
        <p>sun</p>
      </div>
    </div>
  );
}
