var choice = prompt("welcome \n 1.area of rectangle \n 2.area of triangle \n 3.area of cirlce \n 4. area of parallogram")

if (choice == "1") {
    var a = prompt("enter your height")
    var b = prompt("enter your base")
    var result= Number(a)*Number(b)
    alert("the result is "+ result)
}
if (choice == "2") {
    var c = prompt("enter your height")
    var d = prompt("enter your base")
    var result= Number(c)*Number(d)*0.5
    alert("the result is "+ result)
}
if (choice == "3") {
    var e = prompt("enter your radius")
    var result= 3.14*Number(e)*Number(e)
    alert("the result is "+ result)
}
if (choice == "4") {
    var f = prompt("enter your height")
    var g = prompt("enter your base")
    var result= Number(f)*Number(g)
    alert("the result is "+ result)
}
