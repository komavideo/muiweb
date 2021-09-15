import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";

import AppleIcon from '@material-ui/icons/Apple';
import AdbIcon from '@material-ui/icons/Adb';
import { IconButton } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";


import { makeStyles } from '@material-ui/core/styles';
import React from "react";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    mycolor: {
        color: 'red',
    },
    mycontainer: {
        padding: '10px',
        border: '3px double blue',
    },
    mybody: {
        padding: '10px',
        backgroundColor: 'whitesmoke',
    },
    p10: {
        padding: '10px',
    },
    m10: {
        margin: '10px',
    },
    mybutton: {
        fontSize: 30,
        '&:hover': {
            backgroundColor: 'red',
        }
    },
    drawer: {
        width: 240
    },
    drawerroot: {
        display: 'flex'
    },
    appbar: {
        width: `calc(100% - 240px)`
    },
    toolbar: theme.mixins.toolbar
}));


function Home() {
    const classes = useStyles();

    const handlerForm = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <AppBar color="primary" className={classes.appbar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AdbIcon />
                    </IconButton>
                    <Typography>React + Material-UI</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.drawerroot}>

                <Drawer variant="permanent" anchor="left" className={classes.drawer} classes={{ paper: classes.drawer }}>
                    <List>
                        <ListItem>
                            AAAAA
                        </ListItem>
                        <ListItem>
                            BBBBB
                        </ListItem>
                        <ListItem>
                            CCCCC
                        </ListItem>
                    </List>
                </Drawer>

                <div>
                    <div className={classes.toolbar}></div>

                    <React.Fragment>
                        <Typography variant="h1" gutterBottom color="primary" align="center">
                            你好，MUI.
                        </Typography>
                        <Typography variant="h3" className={classes.mycolor}>
                            此版本延续了一些重要的性能和工具改进，以追踪你自己应用中的性能问题。同时还有一些新功能，包括...
                        </Typography>

                        <Container className={classes.mycontainer}>
                            <Button variant="contained" color="primary">AAA</Button>
                            <Button variant="contained" color="secondary">BBB</Button>
                            <Button variant="contained" color="default">CCCC</Button>
                            <Button variant="contained" color="primary" className={classes.mybutton + " " + classes.m10} startIcon={<KeyboardArrowRight />} endIcon={<AppleIcon></AppleIcon>}>Goto Apple</Button>
                        </Container>

                        <Container className={classes.p10}>
                            <ButtonGroup>
                                <Button variant="contained" color="primary">AAA</Button>
                                <Button variant="contained" color="secondary">BBB</Button>
                                <Button variant="contained" color="default">CCCC</Button>
                            </ButtonGroup>
                        </Container>

                        <Container className={classes.p10}>
                            <AppleIcon fontSize="large" color="primary"></AppleIcon>
                            <AppleIcon fontSize="large" color="secondary"></AppleIcon>
                            <AppleIcon fontSize="large" color="action"></AppleIcon>
                            <AppleIcon fontSize="large" color="error"></AppleIcon>
                            <AppleIcon fontSize="large" color="disabled"></AppleIcon>
                        </Container>

                        <Container className={classes.p10}>

                        </Container>
                        <Container className={classes.p10}>
                            <form className={classes.root} noValidate autoComplete="off" onSubmit={handlerForm}>
                                <TextField id="standard-basic" label="Standard" color="primary" required />
                                <TextField id="filled-basic" label="Filled" variant="filled" />
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                <Button type="submit" variant="contained" color="primary" size="large">提交</Button>
                            </form>
                        </Container>
                        <Container className={classes.p10}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth multiline minRows={5} maxRows={10} />
                        </Container>
                        <Container className={classes.mybody}>
                            <Grid container>
                                <Grid item lg={3} md={6} xs={12}>
                                    <Paper>1</Paper>
                                </Grid>
                                <Grid item lg={3} md={6} xs={12}>
                                    <Paper>2</Paper>
                                </Grid>
                                <Grid item lg={3} md={6} xs={12}>
                                    <Paper>3</Paper>
                                </Grid>
                                <Grid item lg={3} md={6} xs={12}>
                                    <Paper>4</Paper>
                                </Grid>
                                <Grid item lg={3} md={6} xs={12}>
                                    <Paper>5</Paper>
                                </Grid>


                            </Grid>
                        </Container>
                        <Container className={classes.p10}></Container>
                    </React.Fragment>

                </div>
            </div>
        </div>
    );
}

export default Home;
