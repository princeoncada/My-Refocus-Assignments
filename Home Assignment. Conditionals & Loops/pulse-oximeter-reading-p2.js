function readPulseRate(pulseRate) {
    if(40 <= pulseRate && pulseRate <= 100) {
        return "Normal reading."
    }else if(101 <= pulseRate && pulseRate <= 109) {
        return "Acceptable to continue home monitoring."
    }else if(110 <= pulseRate && pulseRate <= 130) {
        return "Seek advice from health professionals."
    }else {
        return "Seek urgent medical advice."
    }
}

let startTest = 100
let endTest = 131

for(;startTest <= endTest; startTest++) {
    console.log("Pulse Rate: " + startTest + ", " + readPulseRate(startTest))
}