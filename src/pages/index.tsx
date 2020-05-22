import React, { useState } from 'react';
import { Card, Avatar, Row, Col, Button, Affix } from 'antd';

import Menu from '../components/menu';
import Category from '../components/category';

import styles from './index.less';

const { Meta } = Card;
export default () => {
  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <Category />
      </div>
    </div>
  );
};
