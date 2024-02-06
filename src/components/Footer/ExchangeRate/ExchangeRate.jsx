import React from 'react';
import style from './ExchangeRate.module.css';
import CurrencyConverter from 'react-currency-conv';

const ExchangeRate = (props) =>  {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const x = () => {
      return (<CurrencyConverter from='USD' to='CAD' value={1}/>)
    }
    React.useEffect(() => {
        console.log(x());
    }, []);

    return (
        <div className={style.exchangeRate}>

            Курс € на {date} EUR/UAH
        </div>
    );
}

export default ExchangeRate;
