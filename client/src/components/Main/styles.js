import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        height: "100%",
        background: "rgba(209, 158, 255, 0.3)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(1rem)",
        borderRadius: "var(--BorderRadius)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        transition: "all 350ms ease",
        '&:hover': {
            background: "rgba(10,10,40,.4)",
            boxShadow: "5px 8px 32px 0 rgba(200,200,200,.4)",
        },
        '& *': {
            color: "var(--White)",
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    bottomContent: {
        paddingTop: 0,
        height: "45%",
        overflowY: "scroll"
    },
    divider: {
        margin: '20px 0',
    },
    subtitle: {
        lineHeight: '1.5rem',
        marginTop: '20px',
    }
}));