import { useForm } from "@mantine/form";
import CheckboxGroup from "../CheckboxGroup";

interface Props {
  nextFn: () => void;
  setFn: ({}) => void;
}

export default function PageCuisines({ nextFn, setFn }: Props) {
  const thisForm = useForm({
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
  return (
    <form
      onSubmit={thisForm.onSubmit((values) => {
        console.log(values);
        setFn(values);
        nextFn();
      })}
    >
      <div className="question-category">
        <h3>Cuisines</h3>
        <i>Select any cuisines you're down with</i>
      </div>

      <br></br>
      <CheckboxGroup
        form={thisForm}
        options={[
          { title: "American", name: "american", image: "🍔" },
          { title: "Italian", name: "italian", image: "🍝" },
          { title: "Mexican", name: "mexican", image: "🌮" },
          {
            title: "Latin American",
            name: "latinAmerican",
            image: "🫔",
          },
          { title: "Caribbean", name: "caribbean", image: "🍗" },
          { title: "East Asian", name: "eastAsian", image: "🍣" },
          {
            title: "Southeast Asian",
            name: "southeastAsian",
            image: "🍲",
          },
          { title: "Indian", name: "indian", image: "🍛" },
          {
            title: "Mediterranean",
            name: "mediterranean",
            image: "🥙",
          },
          { title: "African", name: "african", image: "🥘" },
        ]}
      />
      <br></br>
      <br></br>
      <br></br>
      {/* <button className="next">Back</button> */}
      <button className="next" type="submit">
        Next
      </button>
    </form>
  );
}
