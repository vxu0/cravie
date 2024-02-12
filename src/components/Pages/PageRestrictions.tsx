import { useForm } from "@mantine/form";
import { IconCookie } from "@tabler/icons-react";
import Toggle from "../Toggle";

interface Props {
  nextFn: () => void;
  resultsFn: () => void;
  setFn: ({}) => void;
}

export default function PageRestrictions({ nextFn, resultsFn, setFn }: Props) {
  const thisForm = useForm({
    initialValues: {
      veg: false,
      gf: false,
      df: false,
    },
  });
  return (
    <form
      onSubmit={thisForm.onSubmit((values) => {
        console.log(values);
        setFn(values);
        resultsFn();
        nextFn();
      })}
    >
      <div className="question-category">
        <h3>Dietary Restrictions</h3>
        <i>No moo, no worries!</i>
      </div>
      <br></br>
      <div className="row">
        <div className="column">&nbsp;</div>
        <div className="column-toggle">
          <Toggle name="veg" label="Vegetarian/Vegan" form={thisForm} />
          <Toggle name="gf" label="Gluten-free" form={thisForm} />
          <Toggle name="df" label="Dairy-free" form={thisForm} />
        </div>
      </div>
      {/* <br></br> */}

      {/* <button className="next">Back</button> */}
      <br></br>
      <br></br>
      <br></br>
      <button className="cookie" type="submit">
        <IconCookie
          size={96}
          color="orange"
          fill="orange"
          className="cookie"
          //   onClick={handleCookieClick}
          //   () => {
          //     setSection(-1);
          //     document.body.style.background = "#5fa3ac";
          //     getRankedFoods(
          //       {...otherFormValues,
          //       thisForm.values}
          //     )
          //       .then((res) => {
          //         setResults(res);
          //         setSection(4);
          //       })
          //       .catch((err) => console.log("results error:", err));
          //   }}
        ></IconCookie>
      </button>
      <br></br>
      <h3 className="clickme">I'm ready!</h3>
      <br></br>
      <br></br>
      <br></br>
    </form>
  );
}
