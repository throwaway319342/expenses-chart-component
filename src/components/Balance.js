import './Balance.css'

export default function Balance() {
    return (
        <div className="balance__grid">
            <div className="left__col">
                <p>My Balance</p>
                <p className='medium__text bold'>921.48</p>
            </div>
            <div className="right__col">
                <img src="./logo.svg"></img>
            </div>
        </div>
    )
}