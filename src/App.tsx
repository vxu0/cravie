import { useState } from "react";
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
  const [keywords, setKeywords] = useState({});
  const [cuisines, setCuisines] = useState({});
  const [restrictions, setRestrictions] = useState({});

  const [results, setResults] = useState(["?", "?", "?"]);

  // const formOne = useForm({
  //   initialValues: {
  //     sweetSavory: "sweet",
  //     lightHeavy: "light",
  //     healthyLevel: 0,
  //   },
  //   validate: {
  //     healthyLevel: (value) =>
  //       value === 0 ? "Selection required: healthy level" : null,
  //   },
  // });

  // const formTwoSavory = useForm({
  //   initialValues: {
  //     spicy: false,
  //     fried: false,
  //     carbs: false,
  //     cheesy: false,
  //     meaty: false,
  //     crunchy: false,
  //     comforting: false,
  //     refreshing: false,
  //   },
  // });

  // const formTwoSweet = useForm({
  //   initialValues: {
  //     warm: false,
  //     fruity: false,
  //     chocolatey: false,
  //     baked: false,
  //     creamy: false,
  //     nutty: false,
  //   },
  // });

  // const formThree = useForm({
  //   initialValues: {
  //     american: false,
  //     italian: false,
  //     mexican: false,
  //     latinAmerican: false,
  //     caribbean: false,
  //     eastAsian: false,
  //     southeastAsian: false,
  //     indian: false,
  //     mediterranean: false,
  //     african: false,
  //   },
  // });

  // const formFour = useForm({
  //   initialValues: {
  //     veg: false,
  //     gf: false,
  //     df: false,
  //   },
  // });

  function nextPage() {
    setSection(section + 1);
  }

  function prevPage() {
    setSection(section - 1);
  }

  function getResults() {
    console.log("in results fn");
    setSection(-1);
    document.body.style.background = "#5fa3ac";
    getRankedFoods([basics, keywords, cuisines, restrictions])
      .then((res) => {
        console.log("res:", res);
        setResults(res);
      })
      .catch((err) => console.log("results error:", err));
  }

  function handleRestart() {
    window.location.reload();
  }

  // function displayForm(i: number) {
  //   let currForm;
  //   switch (i) {
  //     case 0: {
  //       currForm = (
  //         <form
  //           onSubmit={formOne.onSubmit((values) => {
  //             console.log(values);
  //             nextPage();
  //           })}
  //         >
  //           <div className="question-category">
  //             <h3>The Basics</h3>
  //             <i>What are you looking for?</i>
  //           </div>

  //           <br></br>

  //           <OptionGroup
  //             name="sweetSavory"
  //             options={["sweet", "savory"]}
  //             form={formOne}
  //           />
  //           <br />

  //           <OptionGroup
  //             name="lightHeavy"
  //             options={["light", "middle", "heavy"]}
  //             form={formOne}
  //           />

  //           <Rating name="healthyLevel" form={formOne} />
  //           <br></br>

  //           <button
  //             className="next"
  //             type="submit"
  //             disabled={!formOne.isValid()}
  //           >
  //             Next
  //           </button>
  //         </form>
  //       );
  //       break;
  //     }
  //     case 1: {

  //     }
  //     default: {
  //     }
  //   }
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       exit={{ opacity: 0 }}
  //     >
  //       {currForm}
  //     </motion.div>
  //   );
  // }

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PageBasics
              nextFn={nextPage}
              setFn={setBasics}
              sweetFn={setSweetOrSavory}
            />
          </motion.div>
        )}
        {section === 1 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <PageKeywords
              sweetOrSavory={sweetOrSavory}
              nextFn={nextPage}
              setFn={setKeywords}
            />
          </motion.div>
        )}
        {section === 2 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <PageCuisines nextFn={nextPage} setFn={setCuisines} />
          </motion.div>
        )}
        {section === 3 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <PageRestrictions
              nextFn={nextPage}
              resultsFn={getResults}
              setFn={setRestrictions}
            />
          </motion.div>
        )}

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

        {/* keywords savory */}
        {/* {section === 1 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            {sweetSavory === "sweet" ? FormKeywordsSweet : FormKeywordsSavory}
          </motion.div>
        )} */}

        {/* cuisines */}
        {/* {section === 2 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            {FormCuisines}
          </motion.div>
        )} */}

        {/* restrictions */}
        {/* {section === 3 && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            {FormRestrictions}
          </motion.div>
        )} */}

        {/* results */}
        {/* {section === 4 && (
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
        )} */}
      </div>
    </>
  );
}

export default App;
