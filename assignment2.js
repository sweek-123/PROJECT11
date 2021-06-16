/functions 
function myFunction(p1, p2) {
  return p1 * p2;
}
document.write("Example for function</br>")
document.write(myFunction(2,3));


//Anonymous function 

let show = function () {
    document.write('</br>Anonymous function</br>');
};

show();

//constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  document.write("Constructors</br>");
  document.write(myFather.age);

  (function () {
    let x = "Self invoking!!";
    document.write("</br>"+x); 
  })();
