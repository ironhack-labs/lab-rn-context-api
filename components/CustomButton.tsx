/* eslint-disable react/react-in-jsx-scope */
import {Button} from '@ui-kitten/components';

interface ButtonProps {
  onPress: () => void;
  text: string;
}

export const CustomButton = ({onPress, text}: ButtonProps) => {
  return (
    <Button onPress={() => onPress()} size="tiny">
      {text}
    </Button>
  );
};
