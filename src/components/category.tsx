import React, { useState } from 'react';
import { Card, Avatar, Row, Col } from 'antd';

import Item from './item';

import { CategoryProps } from '../types';

const Category: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <Row gutter={[10, 16]}>
      <Item title="知乎" url="https://www.zhihu.com" desc="有问题，上知乎。" />
    </Row>
  );
};

export default Category;
