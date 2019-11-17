import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Nav from '../components/nav';
import style from './style.less';

const Child: React.SFC<{ title: string }> = React.memo(props => {
  // console.log('Child render');
  // console.log('props', props);
  return <div>{props.title}-222</div>;
});

const Home = () => {
  const [number, setNumber] = useState(0);
  const handleClick = useCallback(() => {
    setNumber(number => number + 1);
    // console.log('Click happened');
  }, []);
  // const handleClick = () => {
  //   setNumber(number => number + 1);
  //   console.log('Click happened');
  // };
  // console.log('render');
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className={style.hero}>
        <h1 className={style.title} onClick={handleClick}>
          Welcome to Next.js!{number}
        </h1>
        <p className={style.description}>
          <Button type="primary">测试</Button>
        </p>
        {/* <Child title={111} handleClick={handleClick}></Child> */}
        <Child title="111"></Child>
        {/* <Child handleClick={handleClick}></Child> */}
      </div>
    </div>
  );
};

export default Home;
