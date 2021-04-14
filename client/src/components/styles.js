import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    buttonLong: {
        backgroundColor: "var(--Gray)",
        transition: "var(--Trnasition)",
        marginTop: "1rem",
        '&:hover': {
            backgroundColor: "var(--Black)",
        }
    },
    avatarIncome: {
        color: 'var(--White)',
        backgroundColor: "var(--Green)",
    },
    avatarExpense: {
        color: "var(--White)",
        backgroundColor: "var(--Red)",
    },
    mainList: {
        height: "85%",
        overflow: 'auto',
    },
    
}));