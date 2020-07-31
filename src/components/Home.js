import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import deep from './deep.jpg'

export default function Home() {
 return (
  <div style={{ width: '100%', margin: 'auto' }}>
   <Grid className="grid">
    <Cell col={12}>
     <img src={deep} alt="deep" className="img"></img>
     <div className="banner-text">
      <h2>Front End Developer</h2>

      <hr />
      <p> HTML5 | CSS3 | Javascript| Bootstrap | ReactJS | VueJS |Typescript | MySQL/Database |</p>
      <div className="social-icons">
       <a href="https://github.com/">
        <i className="fa fa-github" aria-hidden="true"></i>
       </a>

       <a href="https://www.linkedin.com/in/kaurgurdeep/">
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
       </a>
       <a href="https://www.facebook.com/">
        <i class="fa fa-facebook" aria-hidden="true"></i>
       </a>

      </div>
     </div>

    </Cell>

   </Grid>


  </div>
 )
}
