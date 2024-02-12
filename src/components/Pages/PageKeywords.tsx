import { useForm } from "@mantine/form";
import KeyButton from "../KeyButton";

interface Props {
  nextFn: () => void;
  sweetOrSavory: string;
  setFn: ({}) => void;
}

export default function PageKeywords({ nextFn, setFn, sweetOrSavory }: Props) {
  let thisForm: any;
  if (sweetOrSavory === "savory") {
    thisForm = useForm({
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
  } else {
    thisForm = useForm({
      initialValues: {
        warm: false,
        fruity: false,
        chocolatey: false,
        baked: false,
        creamy: false,
        nutty: false,
      },
    });
  }
  return (
    <>
      <form
        onSubmit={thisForm.onSubmit((values: any) => {
          nextFn();
          console.log(values);
          setFn(values);
        })}
      >
        <div className="question-category">
          <h3>Keywords</h3>
          <i>Flavors? Textures? Feelings? Click 'em!</i>
        </div>
        <br></br>
        <div className="row">
          <div className="column">&nbsp;</div>
          <div className="column">
            {Object.keys(thisForm.values).map((kw) => {
              return (
                <KeyButton
                  name={kw}
                  key={kw}
                  label={kw}
                  form={thisForm}
                ></KeyButton>
              );
            })}
            {/* <KeyButton name="spicy" label="spicy" form={thisForm}></KeyButton>
            <KeyButton name="fried" label="fried" form={thisForm}></KeyButton>
            <KeyButton name="carbs" label="carbs" form={thisForm}></KeyButton>
            <KeyButton name="cheesy" label="cheesy" form={thisForm}></KeyButton>
            <KeyButton name="meaty" label="meaty" form={thisForm}></KeyButton>
            <KeyButton
              name="crunchy"
              label="crunchy"
              form={thisForm}
            ></KeyButton>
            <KeyButton
              name="comforting"
              label="comforting"
              form={thisForm}
            ></KeyButton>
            <KeyButton
              name="refreshing"
              label="refreshing"
              form={thisForm}
            ></KeyButton> */}
            <br></br>
            <br></br>
            {/* <button className="next">Back</button> */}
            <button className="next" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
