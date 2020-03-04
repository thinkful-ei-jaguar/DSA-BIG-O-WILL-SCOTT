//1
//No matter the input, there is still a constant amt of operations 
constant O(1)
//complexity is proportional to it's input size
linear O(n)

//2
//No matter the input, there is still a constant amt of operations 
constant O(1)

//3
//The runtime for this algorithm is n to the power of two or O(n^2).
// Our output will grow with a linear relationship to the input that runs through
//if you double the data, you double the amount of calculation
polynomial/quadratic O(n^2)


//4 
// the running time is directly proportional to the size (n) of the input.
linear O(n)

//5
//the running time is directly proportional to the size (n) of the input.
linear time O(n)

//6
// Our output will grow with a linear relationship to the input that runs through
//if you double the data, you double the amount of calculation
polynomial/quadratic O(n^2)

// 7. generateFib has linear run time complexity 
//the running time is directly proportional to the size (n) of the input.
  (O(n))linear time
  
// 8. efficientSearch has logarithmic run time complexity 
  (O(log n)) logarithmic time

// 9. findRandomElement has constant run time complexity 
//No matter the input, there is still a constant amt of operations 
  (O(1))constant time

// 10. isPrime has linear run time complexity 
  ////the running time is directly proportional to the size (n) of the input.
  (O(n))linear time


//11

    // A --> C
    // A --> B
    // C --> B
    // A --> C
    // B --> A
    // B --> C
    // A --> C


function TOH(n, source, dest, temp) {
  if(n === 1) {
    print(source, dest);
  }

  TOH(n-1, source, temp, dest) //TOH(1, A, B, C)
}

function print(a, b) {
  console.log(`moving ${a} to ${b}`)
}

TOH(3, A, C, B)

