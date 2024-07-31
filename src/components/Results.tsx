// import { getRankedFoods } from "../script";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";

interface Props {
  // resultsFn: () => string[];
  results: string[];
  //   userBasics: any;
  //   userKeywords: any;
  //   userCuisines: any;
  //   userRestrictions: any;
}

// function getURL(resultName: string) {
//     return `https://www.google.com/search?q=${resultName}`;
// }

const Results = ({
  //   userBasics,
  //   userKeywords,
  //   userCuisines,
  //   userRestrictions,
  results,
}: Props) => {
  const largeProps: ConfettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 1600,
    colors: ["#041E43", "#1471BF", "#5BB4DC", "#FC027B", "#66D805"],
  };

  //   let resultOne = null;
  //   let resultTwo = null;
  //   let resultThree = null;

  return (
    <>
      <h1>
        <i>result:</i>
      </h1>
      <br />
      <h1>
        <a
          id="resultOne"
          href={`https://www.google.com/search?q=${results[0]}`}
          target="_blank"
        >
          {results[0]}
        </a>
      </h1>
      {results[0] != "loading..." && <ConfettiExplosion {...largeProps} />}
      <br />
      <h2>
        <i>
          alternatives:{" "}
          {
            <i>
              <a
                id="resultTwo"
                href={`https://www.google.com/search?q=${results[1]}`}
                target="_blank"
              >
                {results[1]}
              </a>
            </i>
          }
          {", "}
          {
            <i>
              <a
                id="resultThree"
                href={`https://www.google.com/search?q=${results[2]}`}
                target="_blank"
              >
                {results[2]}
              </a>
            </i>
          }
        </i>
      </h2>
    </>
  );

  //   getRankedFoods(userBasics, userKeywords, userCuisines, userRestrictions)
  //     .then((res) => {
  //       resultOne = res[0];
  //       resultTwo = res[1];
  //       resultThree = res[2];
  //       console.log("in .then:", resultOne, resultTwo, resultThree);
  //       return (
  //         <>
  //           <h1>
  //             <i>result:</i>
  //           </h1>
  //           <br />
  //           <h1>
  //             <a
  //               id="resultOne"
  //               href={`https://www.google.com/search?q=${resultOne}`}
  //               target="_blank"
  //             >
  //               {resultOne}
  //             </a>
  //           </h1>
  //           <ConfettiExplosion {...largeProps} />
  //           <br />
  //           <h2>
  //             <i>
  //               alternatives:{" "}
  //               {
  //                 <i>
  //                   <a
  //                     id="resultTwo"
  //                     href={`https://www.google.com/search?q=${resultTwo}`}
  //                     target="_blank"
  //                   >
  //                     {resultTwo}
  //                   </a>
  //                 </i>
  //               }{" "}
  //               {
  //                 <i>
  //                   <a
  //                     id="resultThree"
  //                     href={`https://www.google.com/search?q=${resultThree}`}
  //                     target="_blank"
  //                   >
  //                     {resultThree}
  //                   </a>
  //                 </i>
  //               }
  //             </i>
  //           </h2>
  //         </>
  //       );
  //     })
  //     .catch((err) => console.log("results error:", err));

  //   console.log("out .then:", resultOne, resultTwo, resultThree);
  //   return null;
};

// let resultOne = document.createElement("a");
//   let resultOneText = document.createTextNode(rankedFoods[0]);
//   resultOne.appendChild(resultOneText);
//   resultOne.href = `https://www.google.com/search?q=${rankedFoods[0]}`;
//   resultOne.target = "_blank"; // open in new tab

//   let resultTwo = document.createElement("a");
//   let resultTwoText = document.createTextNode(rankedFoods[1]);
//   resultTwo.appendChild(resultTwoText);
//   resultTwo.href = `https://www.google.com/search?q=${rankedFoods[1]}`;
//   resultTwo.target = "_blank";

//   let resultThree = document.createElement("a");
//   let resultThreeText = document.createTextNode(rankedFoods[2]);
//   resultThree.appendChild(resultThreeText);
//   resultThree.href = `https://www.google.com/search?q=${rankedFoods[2]}`;
//   resultThree.target = "_blank";

export default Results;
