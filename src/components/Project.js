import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'

export default class Project extends Component {

 constructor(props) {
  super(props)
  this.state = { activeTab: 0 };
 }

 toggleCategory() {

  if (this.state.activeTab === 0) {
   return <div className="project">
    <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
     <CardTitle style={{
      color: 'black', height: '176px', background:
       'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/600px-Unofficial_JavaScript_logo_2.svg.png) center / cover'
     }}>Project #1</CardTitle>
     <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
     <CardActions border>
      <Button colored>GITHUB</Button>
      <Button colored>LIVE DEMO</Button>
     </CardActions>
    </Card>
    <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
     <CardTitle style={{
      color: 'black', height: '176px', background:
       'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/600px-Unofficial_JavaScript_logo_2.svg.png) center / cover'
     }}>Project #1</CardTitle>
     <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
     <CardActions border>
      <Button colored>GITHUB</Button>
      <Button colored>LIVE DEMO</Button>
     </CardActions>
    </Card>

    <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
     <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/600px-Unofficial_JavaScript_logo_2.svg.png) center / cover' }}>Welcome</CardTitle>
     <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
     <CardActions border>
      <Button colored>GITHUB</Button>
      <Button colored>LIVE DEMO</Button>
     </CardActions>
    </Card>
   </div>

  }
  else if (this.state.activeTab === 1) {
   return <div className="project">
    <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
     <CardTitle style={{
      color: 'black', height: '176px',
      background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'
     }}>Project #1 </CardTitle>
     <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
     <CardActions border>
      <Button colored>GITHUB</Button>
      <Button colored>LIVE DEMO</Button>
     </CardActions>
    </Card>

    <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
     <CardTitle style={{
      color: 'black', height: '176px',
      background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'
     }}>Project #1 </CardTitle>
     <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
     <CardActions border>
      <Button colored>GITHUB</Button>
      <Button colored>LIVE DEMO</Button>
     </CardActions>
    </Card>

    <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
     <CardTitle style={{
      color: 'black', height: '176px',
      background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'
     }}>Project #1 </CardTitle>
     <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
     <CardActions border>
      <Button colored>GITHUB</Button>
      <Button colored>LIVE DEMO</Button>
     </CardActions>
    </Card>
   </div>

  }
  else if (this.state.activeTab === 2) {
   return <div>vuejs projects</div>
  }
  else {
   return <div>laravel projects</div>
  }
 }

 render() {
  return (
   <div className="cateogy-tabs">
    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
     <Tab>JavaScript</Tab>
     <Tab>React</Tab>
     <Tab>VueJS</Tab>
     <Tab>Laravel</Tab>
    </Tabs>
    <section>
     <Grid className="project-grid">
      <Cell col={12}>
       <div className="project">
        {this.toggleCategory}
       </div>
      </Cell>
     </Grid>
     {this.toggleCategory()}
    </section>
   </div>
  );
 }
}


