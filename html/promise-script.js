/* Task 1 */
localStorage.setItem('element', "This is a comment");

let smallText = document.createElement('p');
smallText.innerHTML = localStorage.getItem('element');
document.body.appendChild(smallText);

/* Task 2 */
let timePromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Time promise succeeded!"), 5000);
});
timePromise.then(alert);

/* Task 3 */
function getRandom() {
    return Math.floor(Math.random() * 10) + 1;
};
let randPromise = new Promise(function(resolve, reject) {
    var waitTime = getRandom();
    setTimeout(() => {
        if (waitTime <= 5) {
            resolve("Rand promise succeeded!");
        } else {
            reject("Rand promise failed!");
        } 
    }, waitTime * 1000);
});
randPromise.then(
    result => alert(result), 
    error => alert(error) 
);

/* Task 4 */
let errorPromise = new Promise(function(resolve, reject) {
    reject("Error promise failed");
});
errorPromise.catch(alert);


