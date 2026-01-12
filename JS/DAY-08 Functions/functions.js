//! Example of Callback function : 
//? 1st way to create a callback function :
//~ we will create the seprate another functions ans pass it as reference to the main function.

function sir(studentName , callback) {
    console.log("✍️Sir, is checking papers!");

    setTimeout(() => {
        console.log("Papers Checked");
        console.log(`Result for ${studentName} : `);
        callback();
    }, 3000);
}
//~callback function
function result() {
    console.log("PASS✅");
    
}

//sir("John", result);

//? 2nd way : Directly mention the callback functions inside the main function.

function orderFood(callback) {
    console.log("food is ordered!");
    callback();
}

orderFood(() => {
    console.log("Madan is your Delivery boy!");
});

orderFood(function () {
    console.log("Suresh is your delivery boy!");
    
});
