module.exports = scoreThrows;

var scores = [1, 4, 4];

function scoreThrows (scores) {
  var totalScore = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > 10) {
      totalScore += 0;
    }
    if (scores[i] >= 5 && scores[i] <= 10) {
      totalScore += 5;
    }
    if (scores[i] < 5) {
      totalScore += 10;
    }
  }

  var bonusPoints = scores.every(function (points) {
    if (points < 5) {
      return true;
    } else {
      return false;
    }
  });

  if (bonusPoints) {
    totalScore += 100;
  }
  return totalScore;
}

console.log(scoreThrows(scores));