import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    buttonLong: {
        backgroundColor: "var(--Gray)",
        transition: "var(--Transition)",
        marginTop: "1rem",
        '&:hover': {
            backgroundColor: "rgba(230,230,230,.4)"
        },
        '&:hover *': {
            color: "var(--Black)",
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