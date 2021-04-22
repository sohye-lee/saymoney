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
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: 'var(--White)',
        backgroundColor: "var(--Green)",
        marginRight: '10px',
    },
    avatarExpense: {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: "var(--White)",
        backgroundColor: "var(--Red)",
        marginRight: '10px',
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
    },
    inputLabel: {
        color: 'var(--White)',
    },
    input: {
        '&:placeholder': {
            color: 'var(--White)',
        },
        '& *': {
            color: 'var(--White)',
        },
        borderBottom: '1px solid var(--White)',
    }
}));