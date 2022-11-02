import './History.css'
import SpendingChart from './SpendingChart'


const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

export default function History() {
    return (
        <div className="history__card">
            <div className="spending__duration">
                <h2>Spending - Last 7 Days</h2>
            </div>
            <div className="spending__chart">
                <SpendingChart weekData={data}></SpendingChart>
            </div>
            <div className='separator'></div>
            <div className="month__stats">
                <div className="month__total">
                    <p style={{color: 'hsl(28, 10%, 53%)'}}>Total this month</p>
                    <p className='large__text bold'>$478.33</p>
                </div>
                <div className="month__previous">
                    <p className='bold'>+2.4%</p>
                    <p style={{color: 'hsl(28, 10%, 53%)'}}>from last month</p>
                </div>
            </div>
        </div>
    )
}