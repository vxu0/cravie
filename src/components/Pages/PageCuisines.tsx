import CheckboxGroup from "../CheckboxGroup";

interface Props {
  backFn: () => void;
  nextFn: () => void;
  setFn: ({}) => void;
  form: any;
}

export default function PageCuisines({ backFn, nextFn, setFn, form }: Props) {
  return (
    <form
      onSubmit={form.onSubmit((values: any) => {
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
        form={form}
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
      <div>
        <button className="back" type="button" onClick={backFn}>
          back
        </button>
        <button className="next" type="submit">
          next
        </button>
      </div>
    </form>
  );
}
