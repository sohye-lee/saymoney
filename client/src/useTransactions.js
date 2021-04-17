import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTransactions } from './actions/transactionActions';

const useTransactions = (title) => {
    const dispatch = useDispatch();
    const transactionList = useSelector(state => state.transactionList);
    const { transactions } = transactionList;

    const generateColor = () => {
        const r = Math.random() * 140;
        const g = Math.random() * 140;
        const b = Math.random() * 140;
        return `rgb(${r},${g},${b})`;
    };

    // SORT INCOME or EXPENSE <-- title == type
    const transactionsPerType = transactions && transactions.filter(t => t.type === title);

    // GET TOTAL OF INCOME or EXPENSE 
    const total = transactionsPerType && transactionsPerType.reduce((a, b) => a + b.amount, 0);

    // SORT TRANSACTIONS ONLY OF THIS TYPE & ADD A RANDOM COLOR
    // Get category names 
    let arrangedCategories = [];
    // Get amount of each category by adding amount of each transaction 
    // & also giving a random color
    transactionsPerType && transactionsPerType.forEach((t) => {
        const categoryNames = [];
        if (!categoryNames.includes(t.category.name)) {
            categoryNames.push(t.category.name);
            arrangedCategories.push({
                name: t.category.name,
                amount: t.amount,
                color: generateColor()
            });
        } else {
            arrangedCategories.foreEach((c) => {
                if (c.name === t.category.name) {
                    c.amount += t.amount;
                }
            })
        };
    });

    const filteredCategories = arrangedCategories && arrangedCategories.filter(c => c.amount > 0);
    const chartData = {
        datasets: [{
            data: filteredCategories && filteredCategories.map(c => c.amount),
            backgroundColor: filteredCategories && filteredCategories.map(c => c.color),
            
        }],
        labels: filteredCategories && filteredCategories.map(c => c.name)
    }

    useEffect(() => {
        dispatch(listTransactions());
    }, [dispatch])

    return { total, chartData};
};

export default useTransactions;
