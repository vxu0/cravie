async function loadFoods(userSweetSavory: string) {
  const response = await fetch(`foods-${userSweetSavory}.json`);
  const foods = await response.json();
  return foods;
}

async function loadCategorizedFoods(userSweetSavory: string) {
  const response = await fetch(`${userSweetSavory}-categorized.json`);
  const foods = await response.json();
  return foods;
}

async function loadCategoryWeights() {
  const response = await fetch("category-weights.json");
  const weights = await response.json();
  return weights;
}

async function getRankedFoods(
  userBasics: any,
  userKeywords: any,
  userCuisines: any,
  userRestrictions: any
) {
  let scores = await calculateScores(
    userBasics,
    userKeywords,
    userCuisines,
    userRestrictions
  );
  // sort from highest to lowest score
  let results = Object.entries(scores).sort((x, y) => y[1] - x[1]);
  let rankedFoods = results.map(([food, _]) => food);
  console.log("ranked:", rankedFoods);

  let resultOne = document.createElement("a");
  let resultOneText = document.createTextNode(rankedFoods[0]);
  resultOne.appendChild(resultOneText);
  resultOne.href = `https://www.google.com/search?q=${rankedFoods[0]}`;
  resultOne.target = "_blank"; // open in new tab

  let resultTwo = document.createElement("a");
  let resultTwoText = document.createTextNode(rankedFoods[1]);
  resultTwo.appendChild(resultTwoText);
  resultTwo.href = `https://www.google.com/search?q=${rankedFoods[1]}`;
  resultTwo.target = "_blank";

  let resultThree = document.createElement("a");
  let resultThreeText = document.createTextNode(rankedFoods[2]);
  resultThree.appendChild(resultThreeText);
  resultThree.href = `https://www.google.com/search?q=${rankedFoods[2]}`;
  resultThree.target = "_blank";

  // document.getElementById("results")?.appendChild(resultOne);
  // document.getElementById("resultOne")?.appendChild(resultOne);
  // document.getElementById("resultTwo")?.appendChild(resultTwo);
  // document.getElementById("resultThree")?.appendChild(resultThree);

  // return rankedFoods;
  return { resultOne, resultTwo, resultThree };
}

async function calculateScores(
  userBasics: any,
  userKeywords: any,
  userCuisines: any,
  userRestrictions: any
) {
  console.log(
    "user choices: ",
    userBasics,
    userKeywords,
    userCuisines,
    userRestrictions
  );

  let keywords = [];
  let restrictions = [];
  let cuisines = [];

  for (var keyword in userKeywords) {
    if (userKeywords[keyword]) {
      keywords.push(keyword);
    }
  }
  console.log("keywords: ", keywords);

  for (var restriction in userRestrictions) {
    if (userRestrictions[restriction]) {
      restrictions.push(restriction);
    }
  }
  console.log("restrictions: ", restrictions);

  for (var cuisine in userCuisines) {
    if (userCuisines[cuisine]) {
      cuisines.push(cuisine);
    }
  }
  console.log("cuisines: ", cuisines);

  let userSweetSavory = userBasics["sweetSavory"];
  let options = await loadFoods(userSweetSavory);
  let optionsCategorized = await loadCategorizedFoods(userSweetSavory);

  console.log("options:", options);
  console.log("options categorized:", optionsCategorized);

  let scores = Object.fromEntries(options.map((food: any) => [food, 0]));
  console.log("scores:", scores);

  let userLightHeavy = userBasics["lightHeavy"];
  let userHealthyLevel = userBasics["healthyLevel"];
  let weights = await loadCategoryWeights();

  for (var food of optionsCategorized[userLightHeavy]) {
    try {
      scores[food] += weights["lightHeavy"];
    } catch (err) {
      console.log("food doc error");
    }
  }

  for (var food of optionsCategorized[userHealthyLevel]) {
    try {
      scores[food] += weights["healthyLevel"];
    } catch (err) {
      console.log("food doc error");
    }
  }

  for (var keyword of keywords) {
    for (var food of optionsCategorized[keyword]) {
      try {
        scores[food] += weights["keywords"];
      } catch (err) {
        console.log("food doc error");
      }
    }
  }

  for (var cuisine of cuisines) {
    for (var food of optionsCategorized[cuisine]) {
      try {
        scores[food] += weights["cuisines"];
      } catch (err) {
        console.log("food doc error");
      }
    }
  }

  for (var restriction of restrictions) {
    for (var food of optionsCategorized[restriction]) {
      try {
        scores[food] += weights["restrictions"];
      } catch (err) {
        console.log("food doc error");
      }
    }
  }

  console.log("scores: ", scores);
  return scores;
}

export { getRankedFoods };
