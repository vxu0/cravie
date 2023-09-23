import {
  Rating,
  useMantineTheme,
  Center,
  rem,
  Input,
  CheckIcon,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCarrot,
  IconSalad,
  IconPizza,
  IconSoup,
} from "@tabler/icons-react";

interface Props {
  name: string;
  form: any;
}

const OptionRating = ({ name, form }: Props) => {
  // let selectedVal = 0;
  const getEmptyIcon = (value: number) => {
    const defaultProps = { size: rem(24), color: "gray" };
    switch (value) {
      case 1:
        return (
          <>
            <label>&nbsp;</label>
            <IconCarrot {...defaultProps} name="carrot" size={40} />
            <label>&nbsp;</label>
          </>
        );
      case 2:
        return (
          <>
            <label>&nbsp;</label>
            <IconSalad {...defaultProps} name="salad" size={40} />
            <label>&nbsp;</label>
          </>
        );
      case 3:
        return (
          <>
            <label>&nbsp;</label>
            <IconSoup {...defaultProps} name="soup" size={40} />
            <label>&nbsp;</label>
          </>
        );
      default:
        return (
          <>
            <label>&nbsp;</label>
            <IconPizza {...defaultProps} name="pizza" size={40} />
            <label>&nbsp;</label>
          </>
        );
    }
  };

  const getFullIcon = (value: number) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();
    // selectedVal = value;

    switch (value) {
      case 1:
        return (
          <>
            <label>&nbsp;</label>
            <IconCarrot
              {...defaultProps}
              name="carrot"
              color={theme.colors.green[7]}
              size={40}
            />
            <label>1</label>
          </>
        );
      case 2:
        return (
          <>
            <label>&nbsp;</label>
            <IconSalad
              {...defaultProps}
              name="salad"
              color={theme.colors.lime[7]}
              size={40}
            />
            <label>2</label>
          </>
        );
      case 3:
        return (
          <>
            <label>&nbsp;</label>
            <IconSoup
              {...defaultProps}
              name="soup"
              color={theme.colors.yellow[7]}
              size={40}
            />
            <label>3</label>
          </>
        );
      default:
        return (
          <>
            <label>&nbsp;</label>
            <IconPizza
              {...defaultProps}
              name="pizza"
              color={theme.colors.orange[7]}
              size={40}
            />
            <label>4</label>
          </>
        );
    }
  };

  // console.log(selectedVal);
  return (
    <Center>
      <label>healthy&nbsp;</label>
      <Rating
        count={4}
        emptySymbol={getEmptyIcon}
        fullSymbol={getFullIcon}
        {...form.getInputProps(name)}
        highlightSelectedOnly
      />
      <label>&nbsp;indulgent</label>
    </Center>
  );
};

export default OptionRating;
