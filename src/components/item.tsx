import React from 'react';
import { Card, Avatar, Col } from 'antd';

const { Meta } = Card;

interface Props {
  title: string;
  url: string;
  desc: string;
}

const Item: React.FC<Props> = ({ title, url, desc }: Props) => {
  return (
    <Col>
      <a href={url} target="_blank">
        <Card
          hoverable={true}
          style={{ width: 300 }}
          bodyStyle={{ padding: 15 }}
          bordered={false}
        >
          <Meta
            avatar={
              <Avatar shape="circle" size="large" src={`${url}/favicon.ico`}>
                ICON
              </Avatar>
            }
            style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            title={title}
            description={desc || '简介'}
          />
        </Card>
      </a>
    </Col>
  );
};

export default Item;
