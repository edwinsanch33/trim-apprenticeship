import React, { Fragment } from 'react'

class Form extends React.Component {
  render(){
    return(
      <Fragment>
        <h1>Hello World!</h1>
        <div>
          <form>
            <div>
              <input type="text" name="name" id="name" placeholder="FULL NAME"></input>
              <input type="email" name="email" id="email" placeholder="EMAIL"></input>
              <input type="text" name="repo" id="repo" placeholder="PROJECT REPO"></input>
              <input type="url" name="url" id="url" placeholder="URL"></input>
              <p>USING BEST PRACTICES FOR OOP: <input type="number" class="ratings"></input></p>
              <p>MODULAR DEVELOPMENT: <input type="number" class="ratings"></input></p>
              <p>FULL-STACK WORKFLOW UNDERSTANDING: <input type="number" class="ratings"></input></p>
              <p>TESTING: <input type="number" class="ratings"></input></p>
              <p>DATABASE KNOWLEDGE: <input type="number" class="ratings"></input></p>
              <p>DEBUGGING: <input type="number" class="ratings"></input></p>
              <p>PROBLEM SOLVING SKILLS: <input type="number" class="ratings"></input></p>
              <p>JAVASCRIPT: <input type="number" class="ratings"></input></p>
              <p>HTML: <input type="number" class="ratings"></input></p>
              <p>CSS: <input type="number" class="ratings"></input></p>
              <p>WORKING ON A TEAM: <input type="number" class="ratings"></input></p>
              <p>SELF MOTIVATION: <input type="number" class="ratings"></input></p>
              <p>COMMUNICATION SKILLS: <input type="number" class="ratings"></input></p>
              <p>YOUR OWN ENERGY LEVEL: <input type="number" class="ratings"></input></p>
              <p>INTELLIGENCE/APITUDE: <input type="number" class="ratings"></input></p>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
} 

export default Form
