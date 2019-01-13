//for webpack
import React from 'react';
import ReactDOM from 'react-dom';

//009
var template1 = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById('app');



//010
var template2=(
    <div>
        <h1>Hello There</h1>
        <p>How you doing.</p>
    </div>
);

//011
var userName='Ishan';
var template3=(
    <div>
        <h1>Hello There</h1>
        <p>How you doing.</p>
        <p>{'Hello '+userName}</p>
        <p>Hello {userName}</p>
    </div>
);

var obj={
  name:'Ishan',
  age:20,
};
var template4=(
    <div>
        <p>{'Hello '+obj.name}</p>
        <p>{obj.age}</p>
    </div>
);

//012
function fun(x){
    if(x){
        return <p>{x}</p>;
    }
    else{
        return undefined;
    }
}
var template5=(
    <div>
        {fun('Hello')}
        {(obj.age && obj.age>=18) && <p>Age: {obj.age}</p>}
    </div>
);

let template6=(
    <div>
        <p>Hello</p>
    </div>
);

//016
let count=0;
const cadd=()=>{
  count=count+1;
  console.log(count);
};
const csub=()=>{
    count=count-1;
    console.log(count);
};
const template7=(
    <div>
        <h1>Count: {count}</h1>
        <button id="add1" onClick={cadd}>+1</button>
        <button id="sub1" onClick={csub}>-1</button>
    </div>
);

//017
const cadd1=()=>{
    count=count+1;
    console.log(count);
    renderCounter();
};
const csub2=()=>{
    count=count-1;
    console.log(count);
    renderCounter();
};
const renderCounter=()=>{
    const template8=(
        <div>
            <h1>Count: {count}</h1>
            <button id="add1" onClick={cadd1}>+1</button>
            <button id="sub1" onClick={csub2}>-1</button>
        </div>

    );
    // ReactDOM.render(template8, appRoot);
};
// renderCounter();

//018
const arr=[1,2,3,4];
const submitform=(e)=>{
    e.preventDefault();
    const option=e.target.elements.textf.value;
    arr.push(option);
    console.log(option);
    e.target.elements.textf.value='';
};
const template9=(
    <div>
        <form onSubmit={submitform}>
            <input type="text" name="textf"/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
);

//019
const template10=(
    <div>
        {
            arr.map((i)=>{
                return <p key={i}>Number: {i}</p>;
        })
        }
    </div>
);
//024
class Person{
    constructor(name){
        this.name=name;
    }
    getPerson(){
        return this.name;
    }
}
const obj1=new Person('Ishan');
console.log(obj1.getPerson());
//025
class Student extends Person{
    constructor(name,age){
        super(name);
        this.age=age;
    }
}
const obj2=new Student('Ishan',26);
console.log(obj2);
//026
class Header extends React.Component{
    render(){
        return (
          <div>
              <h1>{this.props.title}</h1>
              <p>Hello World</p>
          </div>
        );
    }
}
const template11=(
  <div>
      <Header/>
  </div>
);
//027
class ABC extends React.Component{
    render(){
        return(
            <div>
                <Header/>
            </div>
        );
    }
}
// ReactDOM.render(<ABC/>, appRoot);
//028
const title="Title";
const template12=(
    <div>
        <Header title={title}/>
    </div>
);
//029
class Option extends React.Component{
    printit(){
        console.log("Button clicked");
    }
    render(){
        return (
          <div>
              <button onClick={this.printit}>Click here</button>
          </div>
        );
    }
}
const template13=(
    <div>
        <Option/>
    </div>
);

//033
class C1 extends React.Component{
    constructor(props){
        super(props);
        this.addone=this.addone.bind(this);
        this.subone=this.subone.bind(this);
        this.state={
            countval:0,
        }
    }
    addone(){
        // this.state.countval++;   this will not render the site so we do this
        this.setState((prevState)=>{
           return{
             countval: prevState.countval+1,
           };
        });
        console.log(this.state.countval);
    }
    subone(){
        // this.state.countval--;
        this.setState((prevState)=>{
            return{
                countval: prevState.countval-1,
            };
        });
        console.log(this.state.countval);
    }
    render(){
        return(
          <div>
              <h1>Counter: {this.state.countval}</h1>
              <button onClick={this.addone}>+1</button>
              <button onClick={this.subone}>-1</button>

          </div>
        );
    }
}
const template14=(
    <div>
        <C1/>
    </div>
);

//040
const Stateless=(props)=>{
    return (
      <div>
          <h1>Name: {props.name}</h1>
      </div>
    );
};
const template15=(
    <div>
        <Stateless name={'Ishan'}/>
    </div>
);
//042
// const f1=()=>{
//     return 'Arrow function';
// };
const f1=()=>'Arrow function';

console.log(f1());
//044
class Lifecycle extends React.Component{
    componentDidMount(){
        console.log("Component Mounted");
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    render(){
        return (
            <div>
                <p>Hello</p>
            </div>
        );
    }
}
const template16=(
    <div>
        <Lifecycle/>
    </div>
);

//055
import {ABC1} from "./app_wp";
const template17=(
    <div>
        <ABC1/>
    </div>
);

//058
class OldSyntax{
    constructor(){
        this.name='Ishan';
    }
}

class NewSyntax{
    name='Ishan';
}

ReactDOM.render(template17, appRoot);