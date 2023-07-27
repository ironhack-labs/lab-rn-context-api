import React from 'react';
import data from '../data.json';
import CoursesShopList from './CoursesShopList';
import {Course} from '../types';

const Catalog = () => {
  return <CoursesShopList data={data as Course[]} />;
};

export default Catalog;
