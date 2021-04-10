import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    card: {
        background: "rgba( 209, 158, 255, 0.40)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(1rem)",
        borderRadius: "var(--BorderRadius)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        margin: "1.5rem",
    }
}));