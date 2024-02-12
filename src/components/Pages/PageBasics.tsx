import { useForm } from "@mantine/form";
import { motion } from "framer-motion";
import OptionGroup from "../OptionGroup";
import Rating from "../Rating";

interface Props {
  nextFn: () => void;
  setFn: ({}) => void;
  sweetFn: (s: string) => void;
}

export default function PageBasics({ setFn, sweetFn, nextFn }: Props) {
  const thisForm = useForm({
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
  return (
    <form
      onSubmit={thisForm.onSubmit((values) => {
        console.log(values);
        setFn(values);
        sweetFn(values.sweetSavory);
        nextFn();
      })}
    >
      <div className="question-category">
        <h3>The Basics</h3>
        <i>What are you looking for?</i>
      </div>

      <br></br>

      <OptionGroup
        name="sweetSavory"
        options={["sweet", "savory"]}
        form={thisForm}
      />
      <br />

      <OptionGroup
        name="lightHeavy"
        options={["light", "middle", "heavy"]}
        form={thisForm}
      />

      <Rating name="healthyLevel" form={thisForm} />
      <br></br>

      <button className="next" type="submit" disabled={!thisForm.isValid()}>
        Next
      </button>
    </form>
  );
}
