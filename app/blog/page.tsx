'use client';
import React, { useEffect } from 'react';
import ExternalLayout from '../(components)/External-Layout';
import imgHead from './(assets)/img.svg';
import imgFoot from '../auth/(assets)/image1.svg';
import blogImg from './(assets)/blogImg.svg';
import Aos from 'aos';
import Head from './(components)/Head';
import Nav from './(components)/Nav';
import BlogImg from './(components)/BlogImg';
import Cards from './(components)/Cards';
import Posts from './(components)/Posts';
import Foot from './(components)/Foot';
import { links, data } from './(components)/helpers';

const Blog = () => {
  const [active, setActive] = React.useState('blog');

  useEffect(() => {
    Aos.init({});
  }, [active]);

  return (
    <ExternalLayout>
      <Head img={imgHead} />
      <Nav links={links} active={active} setActive={setActive} />
      <BlogImg blogImg={blogImg} />
      <Posts>
        <Cards data={data} />
      </Posts>
      <Foot img={imgFoot} />
    </ExternalLayout>
  );
};

export default Blog;
