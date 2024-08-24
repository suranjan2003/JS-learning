// Immedietly Invoked Function Expression (IIFE)

(function chai(){  // named IIFE
    console.log(`Database connected`)
})();   // we wanted this function should be executed immedietly after code run
       // that's why we have done this  (...)();  <-- semi collon added to exnd the function
                                         //   ^--- func executuion
        //                        func definition

//also we can do it with arrow functions too
(()=>{  // unnamed IIFE
    console.log(`database 2 connected`)
})();

// if an parameter is required inside the function
((name)=>{
    console.log(`database 2 connected to ${name}`)
})('super computer');