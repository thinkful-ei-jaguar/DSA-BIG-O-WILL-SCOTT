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


    function TOH (n, source, dest, temp) {
      if (n === 1) {
        print(source, dest);
      } else {
        TOH(n-1, source, temp, dest); // TOH(1, A, B, C)
        TOH(1, source, dest, temp);
        TOH(n-1, temp, dest, source);
      }
    
    }
    
    function print(a, b) {
      console.log(`moving ${a} to ${b}`);
    }
    
    const A = [1, 2, 3];
    const B = [1, 2, 3, 4, 5];
    const C = [1, 2, 3, 4, 5, 6, 7];
    
    TOH(2, A, C, B);

//what is the runtime?
// O(2^n), the moves get exponentially larger the more rings there are


//ITERATIVE versions of recursive drills

/////////////1 Counting Sheep

    //recursive 
    function countSheep(num){
      //stopping condition of base case
      if(num === 0){
          console.log(`All sheep jumped over the fence`);
      } 
      //this is the recursive case
      //this will be executed until it reaches base case
      else{
          console.log(`${num}: Another sheep jump over the fence`);
          countSheep(num-1);
      }
    }


    //iterative
    function countSheep(num){
      for(let i=num; i > 0; i--) {
        console.log(`${i} sheep jumping`)
      }
      console.log("all sheep jumping")
    }

    countSheep(5)
    //O(n)- returning the same amount of numbers


//////////2 Power Calculator

    //recursive

    const pow = (x, n) => n === 1 ? x : x * pow(x, n - 1);

    console.log(pow(2, 10))


    //iterative 

    function pow(x, n){
      for(let i = n; i > 1; i--) {
        console.log(x *= x);
      }
      console.log(x)
    }

    pow(10, 2)
    // Constant O(1) - there is afixed number of operations being run 


////////// 3 Reverse String

    //recursive
    
    const reverseString = (str) => {
      if(!str.length) { // no string length, if it is 0, return, else go on
        return str;
      } else {
        const newStr = str[0] 
        return reverseString(str.slice(1) + newStr ) //slice(1) starts at 1 and goes to end
      }
    }

    reverseString('ttocs')

    //iterative

    function reverse(str) {
      let reverseString = "";
    
      for (let character of str) {
          reverseString = character + reverseString;
      }
    
      return reverseString
    }
    
    console.log(reverse('ttocs'))
  //Constant O(n)-going throught each letter and doing the same for each letter


    ////4 nth Triangular Number

        //recursive

        const triangleFunction = (n) => {
          if (n === 0) {
            return n;
          }
          
          return n + triangleFunction(n-1);
        }
        
        let n = 15;
        console.log(triangleFunction(n)); 

        // iterative 

        const triangleNum = (n) => {
          let adder = 0
          let sum = 0
        
          for(let i=0; i <= n; i++) {
            sum += adder;
            adder++;
          }
          return sum;
        }
        console.log(triangleNum(6))

        // Linear O(n) - the operations are ran for every input 

//////// 5. String Splitter

        // recursive
        /*  
        Split a string based upon a separator (similar to String.prototype.split).
        Input: '1/21/2018'
        Output: 1212018 OR ["1", "21", "2018"]
        */
        function split(str, sep) {
            let idx = str.indexOf(sep);
            if (idx == -1) 
                return [str];
            //you don't have to return an array, you can return a string as an array of 
            //character 
            //return str;
            return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
            
            //****** all these are valid syntax as well
          //return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
          //return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
        }

        // iterative 
        
        function spliter2 (param, str) {
          let fullword = [];
          let counter = 0;

          while(true) {
            let idx = str.indexOf(param); //if it cant find the index, returns -1
            if (idx == -1) {
              break;
            }

            fullword.push(str.slice(0, idx));
            str = str.slice(idx + param.length);
            counter ++;
          }
          fullword.push(str);
          console.log(counter, 'counter');
          return fullword;
        }

// const s = '25/39/15';
// console.log(spliter2('/',s));
// Linear O(n) - the run time increases with linearly with the param input 




//////// 6. Fibonacci

        // recursive
          
          const fib = n => n <= 2 ? 1 : fib(n - 1 + fib(n - 2))
          //n is the length of the array [1, 1, 2, 3, 5, 6, 13, 21, 34]

        // iterative 

        const Fibonacci = (num) => {
          let result = [];
          for(let i = 1; i<=num; i++) {
            if(i === 1) {
              result.push(0);
            }
            else if(i == 2){
              result.push(1);
            }
            else {
              result.push(result[i - 2] + result[i - 3]);
            }
          }
        return result;
        }
        
        console.log(Fibonacci(17));
        //O(n)-linear beacuse you get back the same amount you inputted

//////// 7. Factorial

        // recursive
        function factorial(n) {  
          // Base Case - when n is equal to 0, we stop the recursion
          if (n === 0) {
            return 1;
          }
          // This is our Recursive Case
          // It will run for all other conditions except when n is equal to 0
          return n * factorial(n - 1);
        }  

        // iterative 

        function Factorial(num) {
          let result = num;
          for (let i = 1; i < num; i++) {
            if (num === 0) {
              return 0;
            }
            if (num < 0) {
              return;
            }
            result *= i;
          }
        
          return result;
        }

        console.log(Factorial(5));
        // Linear O(n) - the same operations are ran for every input 

