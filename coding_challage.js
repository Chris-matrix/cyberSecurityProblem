let talentData = [];

let entryLevel = {
level: "Entry Level",
jobOpenings:0,
avaiableTalents:0
};

let midLevel = {
    level: "Mid Level",
    jobOpenings:0,
    avaiableTalents:0
};

let seniorLevel = {
    level: "Senior Level",
    jobOpenings:0,
    avaiableTalents:0
};

talentData.push(entryLevel,midLevel,seniorLevel);

talentData[0].jobOpenings = 50;
talentData[0].availableTalent = 200;

talentData[1].jobOpenings = 30;
talentData[1].availableTalent = 150;

talentData[2].jobOpenings = 20;
talentData[2].availableTalent = 100;

console.log(talentData);