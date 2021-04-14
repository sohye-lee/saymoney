import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    income: {
        height: "100%",
        background: "rgba( 209, 158, 255, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(1rem)",
        borderRadius: "var(--BorderRadius)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        // marginBottom: "5vh",
        // margin: "1.5rem",
        borderLeft: "5px solid rgba(0, 255, 100, 0.5)",
        transition: "all 350ms ease",
        overflowY: "scroll",
        '&:hover': {
            background: "rgba(230,230,230,0.6)",
            boxShadow: "5px 8px 32px 0 rgba(200,200,200,.4)",
            borderLeft: "10px solid rgba(0, 255, 100, 0.5)",
        },
        '& *': {
            color: "var(--White)",
        }
    },
    expense: {
        height: "100%",
        background: "rgba( 209, 158, 255, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(1rem)",
        borderRadius: "var(--BorderRadius)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        // margin: "0 1.5rem 1.5rem 1.5rem",
        borderLeft: "5px solid rgba(255, 0, 0, 0.5)",
        overflowY: "scroll",
        '&:hover': {
            background: "rgba(230,230,230,0.6)",
            boxShadow: "5px 8px 32px 0 rgba(200,200,200,.4)",
            borderLeft: "10px solid rgba(255, 0, 0, 0.5)",
        },
        '& *': {
            color: "var(--White)",
        }
    },
}));