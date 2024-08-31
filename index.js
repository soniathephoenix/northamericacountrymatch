function calculateResult() {
    const form = document.getElementById('questionnaire');
    const answers = new FormData(form);

    let score = {
        a: 0,
        b: 0,
        c: 0
    };

    for (let value of answers.values()) {
        score[value]++;
    }

    let highestScore = Math.max(score.a, score.b, score.c);
    let country;

    if (score.a === highestScore) {
        country = "Mexico";
    } else if (score.b === highestScore) {
        country = "United States";
    } else {
        country = "Canada";
    }

    document.getElementById('result').innerText = `Your ideal country in North America for a romantic relationship is: ${country}`;
}
