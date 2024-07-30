import { useForm } from "@mantine/form";
import { motion } from "framer-motion";
import OptionGroup from "../OptionGroup";
import Rating from "../Rating";

interface Props {
  nextFn: () => void;
  setFn: ({}) => void;
  sweetFn: (s: string) => void;
  form: any;
}

export default function PageBasics({ setFn, sweetFn, nextFn, form }: Props) {
  // const thisForm = useForm({
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

  return (
    <form
      onSubmit={form.onSubmit((values: any) => {
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
        form={form}
      />
      <br />

      <OptionGroup
        name="lightHeavy"
        options={["light", "middle", "heavy"]}
        form={form}
      />

      <Rating name="healthyLevel" form={form} />
      <br></br>

      <button className="next" type="submit" disabled={!form.isValid()}>
        next
      </button>
    </form>
  );
}
