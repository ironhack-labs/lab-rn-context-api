import React from 'react';
import { Button } from '@ui-kitten/components';

const RenderItemAccessory = (onPress: () => {}, isSelected: boolean): React.ReactElement => {
    return (<Button size="tiny" onPress={onPress} status={isSelected ? 'danger' : 'primary'}>{isSelected ? "Remove" : "Add to cart"}</Button>)
};

export default RenderItemAccessory