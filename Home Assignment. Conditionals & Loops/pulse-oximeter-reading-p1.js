function readOxygenSaturation(oxygenSaturation) {
    if(oxygenSaturation >= 96) {
        return "Normal reading."
    }else if(oxygenSaturation == 95) {
        return "Acceptable to continue home monitoring."
    }else if(oxygenSaturation == 94 || oxygenSaturation == 93) {
        return "Seek advice from health professionals."
    }else {
        return "Seek urgent medical service."
    }
}

let startTest = 90
let endTest = 100

for(startTest; startTest<=endTest; startTest++) {
    console.log("Oxygen Saturation: " + startTest + "%, " + readOxygenSaturation(startTest))
}
