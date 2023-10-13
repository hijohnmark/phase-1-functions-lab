// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup < 42){
        return 42 - pickup;
    }
    else if (pickup > 42){
        return pickup - 42;
    }
    else {
        return 0;
    }
}
 
function distanceFromHqInFeet(pickup) {
    let distanceInBlocks = distanceFromHqInBlocks(pickup);
    let distanceInFeet = distanceInBlocks * 264;

    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination)*264;
    } else {
        return (destination - start)*264;
    }
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination); 
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500){ 
        return 25;
    } else if (distanceTravelled > 2500) {
        return 'cannot travel that far';
    }
}