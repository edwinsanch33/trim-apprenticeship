import React, { Fragment } from 'react'
import localStorage from 'local-storage'

class Form extends React.Component {
  state = { name: this.props || "", email: "", repo: "", url: "", rating: 0, ratingToggle: false, ratingArray: []}
  componentDidMount() {
    this.setState({
      name: localStorage.get('name') || "",
      email: localStorage.get('email') || "",
      repo: localStorage.get('repo') || "",
      url: localStorage.get('url') || "",
      rating: localStorage.get('rating') || [],
      ratingArray: localStorage.get('ratingArray') || []
    }) 
  }
  handleChange = event => {
    let value = event.target.value
    this.setState({
      [event.target.name]: value,
    });
    localStorage.set([event.target.name], value)
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
    localStorage.set('rating', sum)
    localStorage.set('ratingArray', ratingArray)
}

handleSubmit = () => {
  let name = this.state.name
  let email = this.state.email 
  let repo = this.state.repo
  let url = this.state.url
  let rating = this.state.rating
  let body = `name:${name}&email:${email}&repo:${repo}&url:${url}&rating:${rating}`
  // let para = document.getElementsByTagName("P")
  // for (let i=0;i<para.length;i++){
  //   if(document.getElementById(`${i}`).value > 0){
  //     body =+ `${para[i]}`
  //   }
  // }
  console.log(body)
}
  render(){
    const { name, email, repo, url, rating, ratingArray } = this.state
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
              <p>USING BEST PRACTICES FOR OOP: <input type="number" id="0" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[0] || this.value} onChange={this.handleRating}></input></p>
              <p>MODULAR DEVELOPMENT: <input type="number" id="1" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[1] || this.value} onChange={this.handleRating}></input></p>
              <p>FULL-STACK WORKFLOW UNDERSTANDING: <input type="number" id="2" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[2] || this.value} onChange={this.handleRating}></input></p>
              <p>TESTING: <input type="number" id="3" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[3] || this.value} onChange={this.handleRating}></input></p>
              <p>DATABASE KNOWLEDGE: <input type="number" id="4" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[4] || this.value} onChange={this.handleRating}></input></p>
              <p>DEBUGGING: <input type="number" id="5" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[5] || this.value} onChange={this.handleRating}></input></p>
              <p>PROBLEM SOLVING SKILLS: <input type="number" id="6" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[6] || this.value} onChange={this.handleRating}></input></p>
              <p>"JAVASCRIPT": <input type="number" id="7" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[7] || this.value} onChange={this.handleRating}></input></p>
              <p>HTML: <input type="number" id="8" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[8] || this.value} onChange={this.handleRating}></input></p>
              <p>CSS: <input type="number" id="9" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[9] || this.value} onChange={this.handleRating}></input></p>
              <p>WORKING ON A TEAM: <input type="number" id="10" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[10] || this.value} onChange={this.handleRating}></input></p>
              <p>SELF MOTIVATION: <input type="number" id="11" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[11] || this.value} onChange={this.handleRating}></input></p>
              <p>COMMUNICATION SKILLS: <input type="number" id="12" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[12] || this.value} onChange={this.handleRating}></input></p>
              <p>YOUR OWN ENERGY LEVEL: <input type="number" id="13" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[13] || this.value} onChange={this.handleRating}></input></p>
              <p>INTELLIGENCE/APITUDE: <input type="number" id="14" className="ratings" placeholder="0" min="0" max="50" value={ratingArray[14] || this.value} onChange={this.handleRating}></input></p>
              {this.state.ratingToggle ? this.getTotal() : null }
              <button type="submit" id="submit" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
} 

export default Form
