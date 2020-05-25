import React, { useEffect } from 'react';
import { useLocalStorageState } from '@umijs/hooks';

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import Menu from '../components/menu';
import Category from '../components/category';

import { SourceProps } from '../types';

import styles from './index.less';

const { Dragger } = Upload;

const App: React.FC = () => {
  const [data, setData] = useLocalStorageState<SourceProps | null>(
    'data',
    null,
  );

  const props = {
    name: 'file',
    multiple: false,
    beforeUpload: (file: File) => {
      if (file.type !== 'application/json') {
        message.error('请上传Json文件');
      } else {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = evt => {
          try {
            if (evt.target !== null) {
              const jsonObj = JSON.parse(evt.target.result as string);
              setData(jsonObj);
            } else {
              throw 'target null err';
            }
          } catch (e) {
            message.error('Json解析失败');
          }
        };
      }
      return false;
    },
  };

  return (
    <div style={{ backgroundColor: '#f2f5f6' }}>
      <Menu data={data} />
      <div className={styles.container}>
        {data ? (
          Object.keys(data).map(key => {
            return <Category key={key} title={key} items={data[key]} />;
          })
        ) : (
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖动站点Json文件至此处</p>
            <p className="ant-upload-hint">
              上传的Json文件会自动缓存到浏览器中，实现数据持久化。
            </p>
          </Dragger>
        )}
      </div>
    </div>
  );
};

export default App;
