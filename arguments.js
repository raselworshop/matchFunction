function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);//this one always need to use inside function, we can't use this out of the  function
}
// add(12, 13)
add(12, 13, 23, 45, 56, 58)