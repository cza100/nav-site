import React, { useRef } from 'react';
import { Row, Typography } from 'antd';

import Item from './item';

import { CategoryProps } from '../types';

const { Text } = Typography;

const Category: React.FC<CategoryProps> = ({ title, items }) => {
  const anchor = useRef();

  return (
    <div>
      <Text code strong type="secondary" id={title}>
        {title}
      </Text>
      <Row gutter={[10, 16]}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Row>
    </div>
  );
};

export default Category;
