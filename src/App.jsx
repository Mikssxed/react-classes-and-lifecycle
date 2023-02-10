import "./App.css";
import React from "react";

/* class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Wojtek" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
} */

/* class App extends React.Component {
  state = {
    goOut: "Yes",
  };

  toggleGoOut = () => {
    this.setState((prevState) => {
      return {
        goOut: prevState.goOut === "Yes" ? "No" : "Yes",
      };
    });
  };

  render() {
    return (
      <div className="state">
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={this.toggleGoOut}>
          <h1>{this.state.goOut}</h1>
        </div>
      </div>
    );
  }
} */

// export default class App extends React.Component {
/**
 * If you can't use class fields in your class components
 * for some reason, then you'll need to make use of the
 * class' `constructor` method to initialize your state object.
 * The first line of the constructor method should be a call
 * to `super()` like you see below, and then you can add your
 * state variable as a property attached to `this`
 */
// constructor(props) {
//     super(props)
//     this.state = {
//         goOut: "Yes"
//     }
//     this.toggleGoOut = this.toggleGoOut.bind(this)
// }

/**
 * If you can't use arrow functions for your class methods,
 * you'll need to make sure to `bind` them inside the
 * constructor above.
 */

// toggleGoOut() {
//     this.setState(prevState => {
//         return {
//             goOut: prevState.goOut === "Yes" ? "No" : "Yes"
//         }
//     })
// }

//   render() {
//       return (
//           <div className="state">
//               <h1 className="state--title">Should I go out tonight?</h1>
//               <div className="state--value" onClick={this.toggleGoOut}>
//                   <h1>{this.state.goOut}</h1>
//               </div>
//           </div>
//       )
//   }
// }

/* class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((prevCount) => {
      return {
        count: ++prevCount.count,
      };
    });
  };

  substract = () => {
    this.setState((prevCount) => {
      return {
        count: --prevCount.count,
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.substract}>
          –
        </button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
} */

/* class App extends React.Component {
  state = {
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  };

  toggleFavorite = () => {
    this.setState((prevContact) => ({
      isFavorite: !prevContact.isFavorite,
    }));
  };

  render() {
    let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png";
    return (
      <main>
        <article className="card">
          <img src="./images/user.png" className="card--image" />
          <div className="card--info">
            <img
              src={`../images/${starIcon}`}
              className="card--favorite"
              onClick={this.toggleFavorite}
            />
            <h2 className="card--name">
              {this.state.firstName} {this.state.lastName}
            </h2>
            <p className="card--contact">{this.state.phone}</p>
            <p className="card--contact">{this.state.email}</p>
          </div>
        </article>
      </main>
    );
  }
} */

/* class App extends React.Component {
  state = {
    character: {},
  };

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => this.setState({ character: data }));
  }

  render() {
    console.log("render");
    return <h1>Hello, {this.state.character.name}</h1>;
  }
} */

/* class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  componentDidUpdate() {
    localStorage.setItem("inputs", JSON.stringify(this.state));
  }

  componentDidMount() {
    localStorage.getItem("inputs") &&
      this.setState(JSON.parse(localStorage.getItem("inputs")));
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
          name="firstName"
          value={this.state.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleChange}
          name="lastName"
          value={this.state.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <textarea
          value={this.state.comments}
          placeholder="Comments"
          onChange={this.handleChange}
          name="comments"
        />
        <input
          type="checkbox"
          id="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />

        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={this.state.employment === "unemployed"}
            onChange={this.handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={this.state.employment === "part-time"}
            onChange={this.handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={this.state.employment === "full-time"}
            onChange={this.handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <br />

        <label className="favColor" htmlFor="favColor">
          What is your favorite color?
        </label>
        <br />
        <select
          id="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </form>
    );
  }
} */

/* class App extends React.Component {
  state = {
    count: 1,
    character: {},
  };

  add = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  subtract = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  getStarWarsCharacter = (id) => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ character: data }));
  };

  componentDidMount() {
    this.getStarWarsCharacter(this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.getStarWarsCharacter(this.state.count);
    }
  }

  render() {
    return (
      <>
        <div className="counter">
          <button className="counter--minus" onClick={this.subtract}>
            –
          </button>
          <div className="counter--count">
            <h1>{this.state.count}</h1>
          </div>
          <button className="counter--plus" onClick={this.add}>
            +
          </button>
        </div>
        <h1>{this.state.character.name || "Loading..."}</h1>
      </>
    );
  }
} */

class WindowTracker extends React.Component {
  state = {
    windowWidth: window.innerWidth,
  };

  watchWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.watchWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.watchWidth);
  }

  render() {
    return <h1>Window width: {this.state.windowWidth}</h1>;
  }
}

class App extends React.Component {
  state = {
    show: true,
  };

  toggle = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.toggle}>Toggle WindowTracker</button>
        {this.state.show && <WindowTracker />}
      </div>
    );
  }
}

export default App;
