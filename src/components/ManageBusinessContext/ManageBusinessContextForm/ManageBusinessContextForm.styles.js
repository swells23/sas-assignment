const styles = {
    root: {
        position: 'relative'
    },
    form: {
        paddingTop: '3rem',
        paddingBottom: '3rem',
        '& > *': {
            paddingTop: '1rem',
            paddingBottom: '1rem'
        }
    },
    closeBtn: {
        marginTop: '.25rem',
        marginRight: '.25rem',
        position: 'absolute',
        right: 0,
        '&:hover': {
            cursor: 'pointer',
            fontSize: '2rem',
            marginTop: 0,
            marginRight: 0
        }
    }
}

export default styles;