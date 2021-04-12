/*var apple1 = {};
console.log(typeof apple1);
//箭头函数
var apple2 = () => {
    console.log("this is arrow function");
}
apple2();
var apple3 = () => console.log("this is arrow function");
apple3();
apple2();
var apple15 = function() {
    console.log("hello");
    return 200;
}()
var suselt = apple15;*/
/*var nut = function() {
    console.log("this is nut-1");
    return "this is nut-2";
}
nut()
var lichee = function() {
    console.log("this is lichee-1");
    return "this is lichee-2";
}()
var watermelon = function() {
    console.log("this is watermelon-1")
    return function pear() {
        console.log("this is pear-1")
    }
}
watermelon()();

let banana = function banana() {
    console.log("this is banana-1")
    return () => function() { console.log("this is Anonymous function") }()
}
banana()();
var redPlum = () => {
    return 100;
}
var bluePlum = (blue) => {
    return 200 * blue();
}
var plum = (plum2, plum1) => {
    let result = plum1(plum2);
    console.log(result);
}
plum(redPlum, bluePlum);
(function(x) {
    x()
    console.log("this is yellow orange");
    console.log(function blueOrange() {
        console.log("this is blue orange")
    }())


})(function() {
    console.log("this is orange");
    return "this is red orange"
})
var blackOrange = () => function() {
    console.log("this is small orange");
    return function() {
        console.log("this is big orange")
    }()
}()
blackOrange();*/
let blackberry = function() {
    console.log("this is blackberry");
    return {
        smallBlackberry: () => {
            console.log("this is smallBlackberry");
            return () => {
                console.log("this is smallBlackberry nut ");
                return console.log("9999");
            }
        }
    }
}()
blackberry.smallBlackberry()();
/*var haw = (x, y) => {
    return () => {
        x(y)
    }
}

function lichee(li) {
    console.log(li())
}

function nut() {
    console.log("this is nut")
    return "this is lichee"
}
haw(lichee, nut)(); //this is nut
//this is lichee
function func1() {
    return function() {
        console.log("2")
    }

}
func1()();

function func2() {
    return console.log("1");
}
func2();*/
let grape = function redGrape() {
    return {
        name: "my name is red grape",
        printMyName: () => {
            return () => {
                return Object.create({
                    name: "my name is grape nut",
                    printMyGrapeNut: function() {
                        console.log("this is MyGrapNut")
                    }
                })
            }
        }
    }
}
grape().printMyName()().printMyGrapeNut();