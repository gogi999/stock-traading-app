import React from 'react';

import Autocomplete from '../components/Autocomplete';
import StockList from '../components/StockList';
import trading from '../images/trading.png';

const StockOverview = () => {
    return (
        <div>
            <div className="text-center">
                <img src={trading} alt="logo" />
            </div>
            <Autocomplete />
            <StockList />
        </div>
    );
}

export default StockOverview;
