import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategory } from './actions/categoryActions';
import { listTransactions } from './actions/transactionActions';

const useTransactions = (title) => {
    const dispatch = useDispatch();
    const transactionList = useSelector(state => state.transactionList);
    const { transactions } = transactionList;
    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;

    const generateExpenseColor = () => {
        const r = Math.random() * 170 + 80;
        const g = Math.random() * 30;
        const b = Math.random() * 90;
        return `rgb(${r},${g},${b})`;
    };
    const generateIncomeColor = () => {
        const r = Math.random() * 50;
        const g = Math.random() * 100 + 150;
        const b = Math.random() * 100 + 150;
        return `rgb(${r},${g},${b})`;
    };

    // SORT INCOME or EXPENSE <-- title == type
    const transactionsPerType = transactions && transactions.filter(t => t.type === title);

    // GET TOTAL OF INCOME or EXPENSE 
    const total = transactionsPerType && transactionsPerType.reduce((a, b) => a + b.amount, 0);

    // SORT TRANSACTIONS ONLY OF THIS TYPE & ADD A RANDOM COLOR
    // Get category names 
    let arrangedCategories = [];
    categories && categories.forEach(c => {
        arrangedCategories.push({
            name: c.name,
            amount: 0,
            color: title === 'Income' ? generateIncomeColor() : generateExpenseColor()
        })

        
    })

    // Get amount of each category by adding amount of each transaction 
    // & also giving a random color

    transactionsPerType && transactionsPerType.forEach((t) => {
        arrangedCategories.forEach(c => {
            if (c.name === t.category.name) {
                c.amount += t.amount;
            }
        })
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
        dispatch(listCategory());
    }, [dispatch])

    return { total, chartData};
};

export default useTransactions;
