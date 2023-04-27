import React from 'react';
import { RouteComponentProps } from '@reach/router';


interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
      <main>
        <h1 className='main-title'>Home Page</h1>
      </main>
  );
};

export default HomePage;

