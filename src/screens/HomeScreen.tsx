import React from 'react';
import {Divider} from '@ui-kitten/components';
import {Header} from '../components/Header';
import Content from '../components/Content';
import {Footer} from '../components/Footer';
import {HomeProps} from '../interfaces/interfaces';

export const HomeScreen = ({setShowCart}: HomeProps) => {
  return (
    <>
      <Header />
      <Divider />
      <Content />
      <Divider />
      <Footer showCart={() => setShowCart(true)} />
    </>
  );
};
