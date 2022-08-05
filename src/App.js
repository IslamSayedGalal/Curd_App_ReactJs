import React, {Component} from "react";
import CourseFrom from './components/CourseForm/CourseForm';
import CourseList from "./components/CourseList/CourseList";


class App extends Component {
  state = {
    courses:[
      {name : "HTML"},
      {name : "CSS"},
      {name : "jQuery"}
    ],
    current : ''
  }


  //UpdateCourse
  updateCourse = (e) =>{
    this.setState({
      current: e.target.value
    })
    console.log(e.target.value);
  }

  //addCourse
  addCourse =(e) =>{
    e.preventDefault();
    let current = this.state.current;
    if(current === '') {
      return false;
    }
    else{
      let courses = this.state.courses;
      courses.push({name: current})
      this.setState({
        courses,
        current: ''
      })
      console.log("Course Add");
    }
  }

    //deleteCourse
  deleteCourse = (index) =>{
      let courses = this.state.courses;
      courses.splice(index,1);
      this.setState({
        courses
      })
  }


  // editCourse 
  editCourse = (index, value) =>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render(){
    const {courses} = this.state;
    const courseList = courses.map((course,index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>;
    })
  
    let length = this.state.courses.length;
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseFrom current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul> {length? courseList : <h1 className="NoneCourse">There Is No Any Course</h1> }</ul>
      </section>
    );
  }
}

export default App;
