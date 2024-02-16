//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    // method with newScore as parameter
    addScore(newScore) {
        // add value to this.scores with .push method
        this.scores.push(newScore)
    }
    averageScores() {
        let average = 0;
        let adder = 0;
        for (let i = 0; i < this.scores.length; i ++) {
            adder += this.scores[i];
        }
        average = Math.round ( (adder / this.scores.length) * 10 ) / 10
        return average;
    }
    status() {
        let appStat = '';
        let aveScore = this.averageScores();
        let appStatement = ``;
        if (aveScore >= 90) {
            appStat = 'Accepted'
        } else if (aveScore >= 80 && aveScore < 90) {
            appStat = 'Reserve'
        } else if (aveScore >= 70 && aveScore < 80) {
            appStat = 'Probationary'
        } else if (aveScore >= 60 && aveScore < 70) {
            appStat = 'Rejected'
        } else {
            appStat = 'Error'
            // could instead use try/catch
        }


    appStatement = `'${this.name} earned an average test score of ${aveScore}% and has a status of ${appStat}.'`
    return appStatement
    }
}

// initialize the animals
let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let lapDog = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let dino = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// B for Bubba
bear.addScore(83)

while (dino.averageScores() < 90) {
    dino.addScore(100)
}

console.log(dino.status());
