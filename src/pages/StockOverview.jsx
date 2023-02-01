import React from 'react';

import Autocomplete from '../components/Autocomplete';
import StockList from '../components/StockList';

const StockOverview = () => {
    return (
        <div>
            <Autocomplete />
            <StockList />
        </div>
    );
}

export default StockOverview;
