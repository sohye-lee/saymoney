import React from 'react';

const Info = () => {

    const data = [
        {
            isIncome: 'Income ',
            amount: '1000 ',
            category: 'Salary ',
            day: 'Monday '
        },
        {
            isIncome: 'Expense ',
            amount: '100 ',
            category: 'Food ',
            day: 'Today '
        },
        {
            isIncome: 'Income ',
            amount: '500 ',
            category: 'Business ',
            day: 'Last Friday '
        },
        {
            isIncome: 'Expense ',
            amount: '190 ',
            category: 'Travel ',
            day: 'Sunday '
        },
    ]
    
    const index =  Math.round(Math.random() * 4); 
    const selectedData =  index && data[index];

    return (

            <div >
                {selectedData ?
                <div>
                    <div className="row center">Try Saying :</div>
                    <div className="row center">
                        Add {selectedData.isIncome}  
                        for {selectedData.amount} dollars 
                        in Category {selectedData.category} 
                        for {selectedData.day}
                    </div>
                </div>
                : 
                <div>
                    <div className="row center">Try Saying :</div>
                    <div className="row center">
                        Add expense for 100 dollars in category travel for today
                    </div>
                </div>
                }
            </div>
   

    )
}

export default Info;
