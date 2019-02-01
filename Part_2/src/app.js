//for webpack
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./styles/styles.scss";

// 077
const DashBoard = () => (
  <div>
    This is text
    <Link to="/other">Go to Another Page</Link>
  </div>
);

const AnotherPage = () => <div>Another Page Reached</div>;

const Error404 = () => <div>404 Page Not Found</div>;

const routes_1 = (
  <BrowserRouter>
    <div>
      <Route path="/" component={DashBoard} exact={true} />
      <Route path="/other" component={AnotherPage} />
      <Route component={Error404} />
      {/* Route is used to create a route to another page */}
    </div>
  </BrowserRouter>
);

// 078
const routes_2 = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashBoard} exact={true} />
      <Route path="/other" component={AnotherPage} />
      <Route component={Error404} />
      {/* Route is used to create a route to another page */}
    </Switch>
  </BrowserRouter>
);

// 079
const Header = () => (
  <div>
    <h1>This is a header</h1>
    <NavLink to="/" exact={true}>
      Home
    </NavLink>
    <NavLink to="/other">Another Page</NavLink>
  </div>
);

const routes_3 = (
  <BrowserRouter>
    <div>
      <Header />
      {/* This will show on every page */}
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/other" component={AnotherPage} />
        <Route component={Error404} />
        {/* Route is used to create a route to another page */}
      </Switch>
    </div>
  </BrowserRouter>
);

// 080
import AppRouter from "./routers/AppRouter";
const template_1 = <AppRouter />;

// 085
import { createStore, combineReducers } from "redux";
// const store1 = createStore((state = { count: 0 }) => {
//   return state;
// });
// console.log(store1.getState());

// 086
const store2 = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (action.incrementby) {
        return {
          count: state.count + action.incrementby
        };
      } else {
        return {
          count: state.count + 1
        };
      }

    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
  console.log("Running");
  return state;
});

console.log(store2.getState());

store2.dispatch({
  type: "INCREMENT"
});
// We call dispatch when we need to change the state

console.log(store2.getState());

store2.dispatch({
  type: "DECREMENT"
});

console.log(store2.getState());

// 087
// instead of writing c.l multiple times we can call it in store.subscribe
const unsubscribe = store2.subscribe(() => {
  console.log(store2.getState());
});

store2.dispatch({
  type: "DECREMENT"
});

// unsubscribe();
// To stop subscribing ie no function call after this line
// Uncomment when to use

store2.dispatch({
  type: "INCREMENT",
  incrementby: 5
  //We can pass the values
});

// 088
const person = {
  name: "Ishan",
  age: 20
};

// const { name, age } = person;
// This is same as writing
// const name = person.name;
// const age = person.age;

const { name: firstName = "Anonymous", age } = person;
// we use firstName instead of name and if no attribute name in person then default value is 'Anonymous'

// 089
const arr1 = ["504", "Bommarillu Apt", "Alwal"];
const [flatno, apt, street] = arr1;
// This is similar to
// const flatno = arr1[0];
// const apt = arr[1];

const [fl1, ,] = arr1;
// Skip others

// 090
const inccount = (payload = {}) => ({
  type: "INCREMENT",
  incrementby: typeof payload.incrementby === "number" ? payload.incrementby : 1
});

// We can destructure the payload in incount
const inccount1 = ({ incrementby = 1 } = {}) => ({
  type: "INCREMENT",
  incrementby: incrementby
});

store2.dispatch(inccount({ incrementby: 5 }));
// We can do this

// 092
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // return state.concat(action.expense);
      return [...state, action.expense]; //same as concat
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id; //return true or false weather id there or not
      });
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "desc"
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const store3 = createStore(expensesReducer);
const store3 = createStore(
  combineReducers({
    expenses: expensesReducer, //This means that expenses is managed by expensesReducer
    filters: filterReducer
  })
);

console.log("091", store3.getState());

// This is just a demostate i.e. our template pattern of the state i.e. how our state would look like
const demoState = {
  expenses: [
    {
      id: "abcd",
      desc: "xyz",
      amount: 100
    },
    {
      id: "xyzq",
      desc: "fdg",
      amount: 234
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount"
  }
};

// 093
import uuid from "uuid";
// Add expense action generator
const addExpense = ({ desc = "", amount = 0 }) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(), //Autogenerate
    desc,
    amount
  }
});

// Remove expense action generator
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

store3.subscribe(() => {
  console.log(store3.getState());
});

store3.dispatch(addExpense({ desc: "Rent", amount: 100 }));
const exp = store3.dispatch(addExpense({ desc: "Coffee", amount: 200 }));
// By doing this expense gets added in the array

console.log(exp);
store3.dispatch(removeExpense({ id: exp.expense.id }));
// We get addExpense object back

// 094
const spreadobj = {
  name: "Ishan",
  age: 20
};

// This is spreading objects
const spreadedobj = {
  ...spreadobj,
  location: "Patiala",
  age: 19 //Overrides
};
console.log(spreadedobj);

//========================================================//
ReactDOM.render(template_1, document.getElementById("app"));
