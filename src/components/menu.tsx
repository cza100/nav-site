import React, { useState } from 'react';
import { Affix, Button, Drawer } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

import { SourceProps } from '../types';

const Menu: React.FC<{ data: SourceProps | null }> = ({ data }) => {
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
        {data ? (
          Object.keys(data).map(key => (
            <div key={key} style={{ margin: 5 }}>
              <Button
                type="dashed"
                onClick={() => {
                  onClose();
                  let node = document.getElementById(key);
                  window.scrollTo({
                    behavior: 'smooth',
                    top: node?.offsetTop,
                  });
                }}
              >
                {key}
              </Button>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </Drawer>
    </div>
  );
};

export default Menu;
