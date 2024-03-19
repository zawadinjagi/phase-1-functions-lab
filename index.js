
function distanceFromHqInBlocks(location) {
    const headquarters = 42;
    return Math.abs(location - headquarters);
}

function distanceFromHqInFeet(location) {
    const block = 264; 
    return distanceFromHqInBlocks(location) * block;
}


function distanceTravelledInFeet(start, end) {
    const block = 264; 
    return Math.abs(start - end) * block;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}

