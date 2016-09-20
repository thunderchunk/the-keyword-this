//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer It's an adverb.  It takes the place of he, she, or it when applied to an object. 
      //Usually applied by invocation.  Based on Context of use.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer Context:  Implicit, Explicit, Default(window), New
      // Explicit:  intentionally set by the author (call(), bind(), apply() overwrite implicit)
      // Implicit:  not said, but assumed (left of the dot) 
      // Default:   window is global object in the browser, usually bad
      // New:       when the "new" keyword is applied in Javascript

  // 3) What is the difference between call and apply?

      //Answer  Call:   Calls a function, provides context for "this"  enter context, then parameters in the order they're applied.

//       function sayHi(clothing, adjective){
//   console.log("Hi " + this.name + ".  I like your" + clothing + ".  I think you're" + adjective + ".");
// }

// sayHi.call({name: "Dave"}, "hat", "barely tolerable");

      //        Apply:  takes in context, then parameters as an array in the order they're defined.
                          //better for unknown values

//sayHi.apply({name: "Dave"}, ["hat", "barely tolerable"]);

  // 4) What does .bind do? 

      //Answer:  allows tou to set up context without an instant invocation.  binds a context.

// var sayHiFn = sayHi.bind({name: "Dave"})

// sayHiFn(" super suit", " sporty")

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

var user = {
  username: "Alice",
  email: "jediSexPanther69@midwest_knitters.com",
  getUsername:  function(){
    return (this.username);
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

// getUsername.apply(user);
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car (a, b, c) {
  this.make = a;
  this.model = b;
  this.year = c;
  this.move = 0;
  this.moveCar = function(){return this.move += 10;}
}


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object 
//that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order 
//to make sure you're invoking moveCar on the right object (prius vs mustang).

function moveCar(){
  return this.move += 10;
}

moveCar.call(prius);
moveCar.call(mustang);

//Continuation of previous problem

var getYear = function(){
  return this.year;
};


//Above you're given the getYear function. Using your prius and mustang objects from above, 
//use the proper syntax that will allow for you to call the getYear function with the prius then the 
//mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here: Undefined?

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here: the doc?

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
