import React from 'react';
import PageTitle from '../Page Title/PageTitle';

const Inventory = () => {
    return (
        <div>
            {/* Page TItle  */}
            <PageTitle title='Inventory'></PageTitle>

            <h2 className='error-msg'>This is Inventory page.</h2>
        </div>
    );
};

export default Inventory;