// This is a review of how to use loops
// in this project we are going to be doing some loops
// The loop bellow will loop through 0-9
// then print it out using console.log


// we are using a [for] loop 
// for loop goes through 3 steps 
// (a = n ; b [<>=] n ; a++)

// the first section [a = n] is our base number
// it's purpose is to keep count of the number of loops

// the second section {b [<>=] n } is for telling the loop command 
// how many times should the command go 
// it will check if the first stage is equal to the limit that the user promted in

// the third section [a++] will add 1 to the variable used in first stage
// in this example we used [a] and so it will add 1 to [a] making it [a = 1]

for (var i = 0; i < 10; i++) {

  console.log(i);
}

// this loop will continue until the criteria is met 