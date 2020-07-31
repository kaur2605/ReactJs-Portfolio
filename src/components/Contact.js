import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import deep from './deep.jpg';

export default function Contact() {
 return (
  <div className="contact-div">
   <Grid className="contact-grid">
    <Cell col={6} className="contact">
     <h2>Gurdeep Kaur</h2>
     <img src={deep} alt="deep" style={{ height: "250px" }}></img>
     <p style={{ width: "80%", margin: "auto", paddingTop: "1rem" }}>A team player with excellent communication skills and academic qualifications, who has been completed her Master’s in computer science and informatics.
     Possessing a comprehensive knowledge of Front-End Development Technologies.
</p>
    </Cell>
    <Cell col={6} className="contact">
     <h2>Contact Me</h2>
     <hr />
     <List className="contactitem">
      <ListItem >
       <ListItemContent><i class="fa fa-mobile" aria-hidden="true"></i> (+45)91725410</ListItemContent>
      </ListItem>
      <ListItem>
       <ListItemContent><i class="fa fa-envelope" aria-hidden="true"></i>
        Kaur12@outlook.com</ListItemContent>
      </ListItem>
      <ListItem>
       <ListItemContent><i class="fa fa-skype" aria-hidden="true"></i> kaur12@outlook.com

       </ListItemContent>
      </ListItem>
     </List>
    </Cell>

   </Grid>

  </div >
 )
}
