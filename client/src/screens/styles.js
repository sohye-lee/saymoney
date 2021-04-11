import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    formContainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formContent: {
        maxWidth: "80%",
        width: "400px",
        height: "400px",
        padding: "10px",
        display: "flex",
        flexDirection: "column"
    },
    formInput: {
        outline: "none",
        border: "none",
        borderBottom: "1px solid var(--White)",
        color: "var(--White)",
        height: "40px",
        marginBottom: "15px",
        fontSize: "1.3rem",
        background: "transparent",
        "&::placeholder": {
            color: "rgba(230,230,230,.6)",
        }
    },
    formButton: {
        width: "100%",
        minWidth: "100%",
        height: "50px",
        borderRadius: "3px",
        transition: "var(--Transition)",
        backgroundColor: "rgba(230,230,230,.5)",
        color: "var(--White)",
        outline: "none",
        border: "none",
        borderBottom: "1px solid rgba(230,230,230, .2)",
        borderRight: "1px solid rgba(230,230,230, .2)",
        boxShadow: "5px 5px 12px rgba(255,255,255,.3)",
        fontSize: "1.3rem",
        margin: "1rem 0 2rem 0",
        "&:hover": {
            backgroundColor: "rgba(230,230,230, .7)",
            color: "var(--Gray)",
            boxShadow: "3px 3px 7px rgba(255,255,255,.6)",
        }
    },
    link: {
        textDecoration: "none",
        color: "var(--White)",
        animation: "blink 2s linear infinite",
        fontSize: "1.3rem",
    }
}));