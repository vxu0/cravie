import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "@mantine/form";
import MotionWrapper from "./components/MotionWrapper.tsx";
import OptionGroup from "./components/OptionGroup";
import Rating from "./components/Rating";
import CheckboxGroup from "./components/CheckboxGroup";
import KeyButton from "./components/KeyButton";
// import OptionGroup from "./components/OptionGroup";
// import Toggle from "./components/Toggle";
// import CheckboxGroup from "./components/CheckboxGroup";
// import Rating from "./components/Rating";
// import { IconCookie } from "@tabler/icons-react";
import "./App.css";
// import KeyButton from "./components/KeyButton";
// import { useForm } from "@mantine/form";
import { getRankedFoods } from "./script.tsx";
import Results from "./components/Results.tsx";
import PageBasics from "./components/Pages/PageBasics.tsx";
import { motion } from "framer-motion";
import PageKeywords from "./components/Pages/PageKeywords.tsx";
// import PageKeywordsSavory from "./components/Pages/PageKeywordsSavory.tsx";
// import PageKeywordsSweet from "./components/Pages/PageKeywordsSweet.tsx";
import PageCuisines from "./components/Pages/PageCuisines.tsx";
import PageRestrictions from "./components/Pages/PageRestrictions.tsx";

// https://www.gcu.edu/blog/gcu-experience/most-popular-cuisines-us
// chat GPT
// Give me a list of popular authentic dishes belonging to each of the following cuisines: American, Italian, Mexican, Latin American, Caribbean, East Asian, Southeast Asian, Indian, Mediterranean, African. I would like around eight to ten dishes for each cuisine, except for the American category, which can have more than eight to ten dishes. The dishes should be mostly main dishes, diverse in flavor and texture, as well as a few desserts and snacks. Please specify whether each dish is a main, dessert, or snack.

function App() {
  const [section, setSection] = useState(0);
  // 0: basics
  // 1: keywords (sweet/savory)
  // 2: cuisines
  // 3: restrictions
  // 4: results
  const [sweetOrSavory, setSweetOrSavory] = useState("sweet");
  const [basics, setBasics] = useState({});
  const [sweetKeywords, setSweetKeywords] = useState({});
  const [savoryKeywords, setSavoryKeywords] = useState({});
  const [cuisines, setCuisines] = useState({});
  const [restrictions, setRestrictions] = useState({});

  const [results, setResults] = useState(["?", "?", "?"]);

  function nextPage() {
    setSection(section + 1);
  }

  function backPage() {
    setSection(section - 1);
  }

  function getResults(restr: string[]) {
    console.log("in results fn");
    setSection(-1);
    document.body.style.background = "#5fa3ac";
    if (sweetOrSavory === "sweet") {
      console.log("inputs:", [basics, sweetKeywords, cuisines, restr]);
      getRankedFoods([basics, sweetKeywords, cuisines, restr])
        .then((res) => {
          console.log("res:", res);
          // return res;
          setResults(res);
          return res;
          // nextPage();
        })
        .catch((err) => console.log("results error:", err));
    } else {
      console.log("inputs:", [basics, savoryKeywords, cuisines, restr]);
      getRankedFoods([basics, savoryKeywords, cuisines, restr])
        .then((res) => {
          console.log("res:", res);
          // return res;
          setResults(res);
          return res;
          // nextPage();
        })
        .catch((err) => console.log("results error:", err));
    }
    return [];
  }

  function handleRestart() {
    // window.location.reload();
    setSweetOrSavory("sweet");
    setBasics({});
    setSweetKeywords({});
    setSavoryKeywords({});
    setCuisines({});
    setRestrictions({});
    setResults(["?", "?", "?"]);

    formBasics.reset();
    formSavoryKeywords.reset();
    formSweetKeywords.reset();
    formCuisines.reset();
    formRestrictions.reset();

    document.body.style.background = "#32575c";
    setSection(0);
  }

  //
  const formBasics = useForm({
    initialValues: {
      sweetSavory: "sweet",
      lightHeavy: "light",
      healthyLevel: 0,
    },
    validate: {
      healthyLevel: (value) =>
        value === 0 ? "Selection required: healthy level" : null,
    },
  });

  const formCuisines = useForm({
    initialValues: {
      american: false,
      italian: false,
      mexican: false,
      latinAmerican: false,
      caribbean: false,
      eastAsian: false,
      southeastAsian: false,
      indian: false,
      mediterranean: false,
      african: false,
    },
  });

  const formSavoryKeywords = useForm({
    initialValues: {
      spicy: false,
      fried: false,
      carbs: false,
      cheesy: false,
      meaty: false,
      crunchy: false,
      comforting: false,
      refreshing: false,
    },
  });

  const formSweetKeywords = useForm({
    initialValues: {
      warm: false,
      fruity: false,
      chocolatey: false,
      baked: false,
      creamy: false,
      nutty: false,
    },
  });

  const formRestrictions = useForm({
    initialValues: {
      veg: false,
      gf: false,
      df: false,
    },
  });

  return (
    <>
      <h1 hidden={section === 4}>cravie</h1>
      <p hidden={section !== 0}>
        Need help deciding what to eat? Select your preferences below and hit
        the cookie to generate suggestions!
      </p>
      <br hidden={section === 0} />

      <div className="card">
        {/* basics */}
        {section === 0 && (
          <MotionWrapper
            body={
              <PageBasics
                nextFn={nextPage}
                setFn={setBasics}
                sweetFn={setSweetOrSavory}
                form={formBasics}
              />
            }
          />
        )}

        {/* keywords */}
        {section === 1 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            {sweetOrSavory === "sweet" ? (
              <PageKeywords
                backFn={backPage}
                setFn={setSweetKeywords}
                nextFn={nextPage}
                form={formSweetKeywords}
              />
            ) : (
              <PageKeywords
                backFn={backPage}
                setFn={setSavoryKeywords}
                nextFn={nextPage}
                form={formSavoryKeywords}
              />
            )}
          </motion.div>
        )}

        {/* cuisines */}
        {section === 2 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <PageCuisines
              backFn={backPage}
              nextFn={nextPage}
              setFn={setCuisines}
              form={formCuisines}
            />
          </motion.div>
        )}

        {/* restrictions */}
        {section === 3 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <PageRestrictions
              backFn={backPage}
              nextFn={nextPage}
              resultsFn={getResults}
              setFn={setRestrictions}
              form={formRestrictions}
            />
          </motion.div>
        )}

        {/* {section === 4 && (
          <button
            onClick={() => {
              getResults();
              nextPage();
            }}
          >
            get results
          </button>
        )} */}

        {/* results */}
        {section === 4 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Results results={results} />
            <br></br>
            <br></br>
            <br></br>
            <button className="next" onClick={handleRestart}>
              Start Over
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
