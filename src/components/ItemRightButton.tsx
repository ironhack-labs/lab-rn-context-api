import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';

type ItemRightButtonProps = {
  title: string;
  action: () => void;
};

const ItemRightButton = ({title, action}: ItemRightButtonProps) => {
  return (
    <Button size='tiny' onPress={action} style={styles.button}>
      {title}
    </Button>
  );
};

export default ItemRightButton;

const styles = StyleSheet.create({
  button: {
    width: 90,
  },
});
