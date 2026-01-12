const data=fetch('https://api.github.com/users/Udayraj777')
// fetch is a global method starts the process of fetching a resource from the network ,returning a promise which is fullfiled once the response is available 
// fetch promise only rejects when a network error is encountered(when their's a permission issue )
// those 404 type errors only originate because fetch is done it get 404 error 

// browser web  api has fetch which has special queue for fetch only 
// named micro task queue which has priority over task queue in jsengine webapis



// wherever we give fetch something like url 
// they did work in two direction immediately

// one direction work is done in  reserve memory space 
// like data variable 
// onfulfilled[]  array
// onrejection[] array


// another direction works in web browser api handling where we decide send a network request through browser and node environment  
// then their come response if any response present it will be put in data variable 
//onfullfilled and onrejection array and data variable  are private field that are not in our range we cant manipulate them 

// if some data came it will put in onfullfilled[] that is for resolve if their is some network error it will be rejected once this done onfullfiled has some function 
// which will run and data variable is being filled then it will put in global variable where we write fetch 