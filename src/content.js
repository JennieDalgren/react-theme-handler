import React, { Component } from 'react'

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import { Badge, Button, Card, CardContent, CardMedia, Divider, Drawer, Grid, IconButton, Switch, Typography, FormControl, TextField } from '@material-ui/core';

class Content extends Component {

  state = {
    open: false,
    checked: true
  }

  text = 'Lorem ipsum dolor amet mlkshk mumblecore vaporware, sriracha iPhone readymade hoodie. Brunch typewriter meggings organic church-key pork belly glossier coloring book distillery butcher. Taxidermy mumblecore fashion axe, asymmetrical jean shorts distillery brooklyn. 3 wolf moon kombucha celiac keffiyeh cornhole franzen tattooed pinterest poke. PBR&B aesthetic bitters wolf swag readymade locavore portland iPhone.'  
  
  toggleDrawer = () => {
    this.setState(state => ({ open: !state.open }));
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render () {
    let bg = this.props.theme.palette.background.default
    return (
      <div style={{ background: bg, padding: 32, height: '100%', position: 'absolute'}}>
        <Typography
          variant="headline"
          gutterBottom
          children="The Title goes here"
        />
        <Typography
          variant="subheading"
          gutterBottom
          children="This is the subheading. Pretty cool."
        />
        <Typography
          gutterBottom
          children={this.text}
        />
        <Grid container spacing={16}>
          <Grid item>
            <Switch />
          </Grid>  
          <Grid item>
            <Button variant='contained'>button</Button>
          </Grid>  
          <Grid item>
            <Badge badgeContent={4}>
              <MailIcon />
            </Badge>
          </Grid>
          <Grid item>
            <Badge badgeContent={11} color="secondary" >
              <CallIcon />
            </Badge>
          </Grid> 
        </Grid>
        
       
        
       
        <Divider />
        <Card margin="normal">
          <div>
            <CardContent>
              <Typography variant="headline">Art vs Science</Typography>
              <Typography variant="subheading" color="textSecondary">
                Off The Edge Of The Earth
              </Typography>
              </CardContent>
            <div style={{ justifyContent: 'space-around', display: 'flex', padding: '8px' }}>
              <IconButton aria-label="Previous">
                <SkipPreviousIcon />   
              </IconButton>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon />
              </IconButton>
              <IconButton aria-label="Next">
                <SkipNextIcon />
              </IconButton>
            </div>
          </div>
          <CardMedia
            image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg"
            title="Live from space album cover"
          />
        </Card>
      
        <Button variant='outlined' onClick={this.toggleDrawer}>click</Button>
        <Drawer 
          open={this.state.open}
          onClose={this.toggleDrawer}
          anchor={'right'} 
        >
          <TextField
            label="What's your name?"
            margin="normal"
          />
          <TextField
            label="And age?"
            margin="normal"
          />
          <FormControl>
            <Button
              onClick={this.toggleDrawer}
              variant="text"
              children="okay"
            />
          </FormControl>
        </Drawer>
      </div>
    )
  }
}

export default Content