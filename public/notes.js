/*
Declarative render example

var navigateAnts = (signal) => {
  console.log("fire");
  return {
    page: "ants"
  }
}

var navigateHome = (signal) => {
  console.log("fire");
  return {
    page: "home"
  }
}

class NavBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: "home"
    }
  }

  render() {

    var handlePageChanges = () => {
      this.setState(
        navigateAnts
      );
    }

    var handlePageChanges2 = () => {
      this.setState(
        navigateHome
      );
    }

    return(
      <div className = "mainNavBar">
        <button className = "Home" onClick = {navigateHome}>Home</button>
        <button className = "Projects" onClick = {navigateAnts}>Projects</button>
      </div>

      */
