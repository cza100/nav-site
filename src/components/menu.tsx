import React, { useState } from 'react';
import { Affix, Button, Drawer } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const Menu: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = (): void => {
    setVisible(true);
  };
  const onClose = (): void => {
    setVisible(false);
  };

  return (
    <div>
      <Affix offsetTop={0}>
        <Button
          type="primary"
          size="large"
          icon={<UnorderedListOutlined />}
          onClick={showDrawer}
        ></Button>
      </Affix>
      <Drawer
        title="Favorite Sites"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Menu;
