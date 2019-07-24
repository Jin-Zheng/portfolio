import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Home extends Component{
    // state = {
    // }
    // constructor(){
    //     super();
    // }
    render(){
        return(
            <Grid container spacing={3}>
                <Grid item lg={12}>
                    <Card>
                        <CardContent>Hello World</CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default Home;