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
        height: "95%%",
        overflow: 'auto',
        overflowY: "scroll"
    },
    snackbar: {
        position: "fixed",
        right: "1rem",
        top: "1rem",
        borderBottom: "3px solid var(--Black)"
    }
}));