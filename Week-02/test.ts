function division (a:number, b:number) {

    if (b===0){
        throw new Error(`cant divide by 0`);
        
    }
return a/b;
}
try {
    console.log ( division (3,0));

}
catch (error) {
console.log (error);
}
finally {
    console.log ('this is a finally block');
}