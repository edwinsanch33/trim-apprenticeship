import React, { Fragment } from 'react'

class Form extends React.Component {
  state = { name: "", email: "", repo: "", url: "", rating: 0, ratingToggle: false, ratingArray: []}

  handleChange = event => {
    let value = event.target.value
    this.setState({
      [event.target.name]: value,
    });
  }
  handleRating = event => {
    event.target.value =+ event.target.value
    this.setState({ratingToggle: true})
  }
  getTotal = () => {
    let ratingArray = []
    for (let i=0; i<15; i++){
    ratingArray.push(Number(document.getElementById(`${i}`).value))
    }
    let sum = ratingArray.reduce(function(a,b){
      return a + b
    }, 0)
    this.setState({ rating: sum, ratingToggle: false, ratingArray: ratingArray })
}

handleSubmit = () => {

}
  render(){
    const { name, email, repo, url, rating } = this.state
    return(
      <Fragment>
        <h1>Hello World!</h1>
        <div className="form-box">
          <form>
            <div>
              <input type="text" name="name" id="name" placeholder="FULL NAME" value={name} onChange={this.handleChange}></input>
              <input type="email" name="email" id="email" placeholder="EMAIL" value={email} onChange={this.handleChange}></input>
              <input type="text" name="repo" id="repo" placeholder="PROJECT REPO" value={repo} onChange={this.handleChange}></input>
              <input type="url" name="url" id="url" placeholder="URL" value={url} onChange={this.handleChange}></input>
              { rating > 50 ? <p>Reached Rating Limit (Reduce Rating)</p> : null }
              <p>USING BEST PRACTICES FOR OOP: <input type="number" id="0" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>MODULAR DEVELOPMENT: <input type="number" id="1" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>FULL-STACK WORKFLOW UNDERSTANDING: <input type="number" id="2" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>TESTING: <input type="number" id="3" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>DATABASE KNOWLEDGE: <input type="number" id="4" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>DEBUGGING: <input type="number" id="5" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>PROBLEM SOLVING SKILLS: <input type="number" id="6" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>"JAVASCRIPT": <input type="number" id="7" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>HTML: <input type="number" id="8" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>CSS: <input type="number" id="9" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>WORKING ON A TEAM: <input type="number" id="10" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>SELF MOTIVATION: <input type="number" id="11" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>COMMUNICATION SKILLS: <input type="number" id="12" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>YOUR OWN ENERGY LEVEL: <input type="number" id="13" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              <p>INTELLIGENCE/APITUDE: <input type="number" id="14" className="ratings" placeholder="0" min="0" max="50" value={this.value} onChange={this.handleRating}></input></p>
              {this.state.ratingToggle ? this.getTotal() : null }
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
} 

export default Form
