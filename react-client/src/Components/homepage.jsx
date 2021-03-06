import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

const pStyle = {
  textAlign: 'center',
  paddingLeft: 50,
  paddingRight:50,
  paddingBottom:20
};
class HomePage extends Component {
  render() {
    return (

      <div>

      <div>
      <img class= "collage"  src={require('./Pics/1.0-Home/Collage.jpg')}/>
      <div class="positioning" style={pStyle} >
      <h1 >Life and Loss in Germany: The 80th Anniversary of Kristallnacht</h1>
      Over half a million Jews called Germany their home in 1933. Kristallnacht, the Night of the Broken Glass, a Nazi-organized pogrom of November 1938, marked a turning point for Germany's Jews. More than half of them had left the country by 1939. Up to 180,000 German Jews were murdered. Only a small number survived. Life and Loss in Germany: The 80th Anniversary of Kristallnacht explores the thriving Jewish life in German lands and commemorates the human and material destruction during the Holocaust.
      </div>
      <div class="menu_link">
          <table class="front_menu">
              <tr>
                <td>
                  < div class="polaroid">
                      <Link to="/beforethewar">
                      <div class="frame">
                          <img src={require('./Pics/1.0-Home/Before.jpg')}alt="Before the War" />
                      </div>
                      </Link>
                      <div class="container">
                        <p style={{textAlign: 'center', fontWeight:'bold'}}>Before the Holocaust</p>
                      </div>
                  </div>
                </td>
                <td>
                < div class="polaroid">
                    <Link to="/peter">
                    <div class="frame">
                        <img src={require('./Pics/1.0-Home/Peter.jpg')} alt=" The Peter Lederman Story" />
                    </div>
                    </Link>
                    <div class="container">
                      <p style={{textAlign: 'center', fontWeight:'bold'}}>The Peter Lederman Story</p>
                    </div>
                </div>
                </td>
                <td>
                  < div class="polaroid">
                    <Link to="/bea">
                    <div class="frame">
                        <img src={require('./Pics/1.0-Home/Bea.jpg')} alt="The Bea Muhlfelder Story" />
                    </div>
                    </Link>
                    <div class="container">
                      <p style={{textAlign: 'center', fontWeight:'bold'}}>The Bea Muhlfelder Story</p>
                    </div>
                </div>
                </td>
                <td>
                  < div class="polaroid">
                    <Link to="/timeline">
                    <div class="frame">
                        <img src={require('./Pics/1.0-Home/Timeline.jpg')} alt="Timeline" />
                    </div>
                    </Link>
                    <div class="container">
                      <p style={{textAlign: 'center', fontWeight:'bold'}}>Timeline</p>
                    </div>
                  </div>
                </td>
              </tr>
          </table>
          {this.props.children}
      </div>
      </div>
      </div>

    )
  }
}
export default HomePage;
