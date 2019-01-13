'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//009
var template1 = React.createElement(
    'p',
    null,
    'This is JSX from app.js!'
);
var appRoot = document.getElementById('app');

//010
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello There'
    ),
    React.createElement(
        'p',
        null,
        'How you doing.'
    )
);

//011
var userName = 'Ishan';
var template3 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello There'
    ),
    React.createElement(
        'p',
        null,
        'How you doing.'
    ),
    React.createElement(
        'p',
        null,
        'Hello ' + userName
    ),
    React.createElement(
        'p',
        null,
        'Hello ',
        userName
    )
);

var obj = {
    name: 'Ishan',
    age: 20
};
var template4 = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Hello ' + obj.name
    ),
    React.createElement(
        'p',
        null,
        obj.age
    )
);

//012
function fun(x) {
    if (x) {
        return React.createElement(
            'p',
            null,
            x
        );
    } else {
        return undefined;
    }
}
var template5 = React.createElement(
    'div',
    null,
    fun('Hello'),
    obj.age && obj.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        obj.age
    )
);

var template6 = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Hello'
    )
);

//016
var count = 0;
var cadd = function cadd() {
    count = count + 1;
    console.log(count);
};
var csub = function csub() {
    count = count - 1;
    console.log(count);
};
var template7 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'add1', onClick: cadd },
        '+1'
    ),
    React.createElement(
        'button',
        { id: 'sub1', onClick: csub },
        '-1'
    )
);

//017
var cadd1 = function cadd1() {
    count = count + 1;
    console.log(count);
    renderCounter();
};
var csub2 = function csub2() {
    count = count - 1;
    console.log(count);
    renderCounter();
};
var renderCounter = function renderCounter() {
    var template8 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { id: 'add1', onClick: cadd1 },
            '+1'
        ),
        React.createElement(
            'button',
            { id: 'sub1', onClick: csub2 },
            '-1'
        )
    );
    // ReactDOM.render(template8, appRoot);
};
// renderCounter();

//018
var arr = [1, 2, 3, 4];
var submitform = function submitform(e) {
    e.preventDefault();
    var option = e.target.elements.textf.value;
    arr.push(option);
    console.log(option);
    e.target.elements.textf.value = '';
};
var template9 = React.createElement(
    'div',
    null,
    React.createElement(
        'form',
        { onSubmit: submitform },
        React.createElement('input', { type: 'text', name: 'textf' }),
        React.createElement('input', { type: 'submit', value: 'Submit' })
    )
);

//019
var template10 = React.createElement(
    'div',
    null,
    arr.map(function (i) {
        return React.createElement(
            'p',
            { key: i },
            'Number: ',
            i
        );
    })
);
//024

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'getPerson',
        value: function getPerson() {
            return this.name;
        }
    }]);

    return Person;
}();

var obj1 = new Person('Ishan');
console.log(obj1.getPerson());
//025

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name));

        _this.age = age;
        return _this;
    }

    return Student;
}(Person);

var obj2 = new Student('Ishan', 26);
console.log(obj2);
//026

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'p',
                    null,
                    'Hello World'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var template11 = React.createElement(
    'div',
    null,
    React.createElement(Header, null)
);
//027

var ABC = function (_React$Component2) {
    _inherits(ABC, _React$Component2);

    function ABC() {
        _classCallCheck(this, ABC);

        return _possibleConstructorReturn(this, (ABC.__proto__ || Object.getPrototypeOf(ABC)).apply(this, arguments));
    }

    _createClass(ABC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null)
            );
        }
    }]);

    return ABC;
}(React.Component);
// ReactDOM.render(<ABC/>, appRoot);
//028


var title = "Title";
var template12 = React.createElement(
    'div',
    null,
    React.createElement(Header, { title: title })
);
//029

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'printit',
        value: function printit() {
            console.log("Button clicked");
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.printit },
                    'Click here'
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var template13 = React.createElement(
    'div',
    null,
    React.createElement(Option, null)
);

//033

var C1 = function (_React$Component4) {
    _inherits(C1, _React$Component4);

    function C1(props) {
        _classCallCheck(this, C1);

        var _this5 = _possibleConstructorReturn(this, (C1.__proto__ || Object.getPrototypeOf(C1)).call(this, props));

        _this5.addone = _this5.addone.bind(_this5);
        _this5.subone = _this5.subone.bind(_this5);
        _this5.state = {
            countval: 0
        };
        return _this5;
    }

    _createClass(C1, [{
        key: 'addone',
        value: function addone() {
            // this.state.countval++;   this will not render the site so we do this
            this.setState(function (prevState) {
                return {
                    countval: prevState.countval + 1
                };
            });
            console.log(this.state.countval);
        }
    }, {
        key: 'subone',
        value: function subone() {
            // this.state.countval--;
            this.setState(function (prevState) {
                return {
                    countval: prevState.countval - 1
                };
            });
            console.log(this.state.countval);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter: ',
                    this.state.countval
                ),
                React.createElement(
                    'button',
                    { onClick: this.addone },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.subone },
                    '-1'
                )
            );
        }
    }]);

    return C1;
}(React.Component);

var template14 = React.createElement(
    'div',
    null,
    React.createElement(C1, null)
);

//040
var Stateless = function Stateless(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Name: ',
            props.name
        )
    );
};
var template15 = React.createElement(
    'div',
    null,
    React.createElement(Stateless, { name: 'Ishan' })
);
//042
// const f1=()=>{
//     return 'Arrow function';
// };
var f1 = function f1() {
    return 'Arrow function';
};

console.log(f1());
//044

var Lifecycle = function (_React$Component5) {
    _inherits(Lifecycle, _React$Component5);

    function Lifecycle() {
        _classCallCheck(this, Lifecycle);

        return _possibleConstructorReturn(this, (Lifecycle.__proto__ || Object.getPrototypeOf(Lifecycle)).apply(this, arguments));
    }

    _createClass(Lifecycle, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Component Mounted");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("Component Updated");
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Hello'
                )
            );
        }
    }]);

    return Lifecycle;
}(React.Component);

var template16 = React.createElement(
    'div',
    null,
    React.createElement(Lifecycle, null)
);

ReactDOM.render(template15, appRoot);
