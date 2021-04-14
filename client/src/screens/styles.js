import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    formContainer: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& *': {
            color: "var(--White)"
        }
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
        display: "flex",
        justifyContent: "space-between",
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
    },
    settingContainer: {
        height: "80vh",
        width: "500px",
        maxWidth: "80%",
        margin: "0 auto",
        background: "rgba( 209, 158, 255, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(1rem)",
        borderRadius: "var(--BorderRadius)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        transition: "all 350ms ease",
        '&:hover': {
            background: "rgba(230,230,230,0.6)",
            boxShadow: "5px 8px 32px 0 rgba(200,200,200,.4)",
        },
        '& *': {
            color: "var(--White)",
        }
    },
    settingContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    }
}));