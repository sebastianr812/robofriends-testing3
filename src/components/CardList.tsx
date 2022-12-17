import React from 'react';
import Card from './Card';


type Robot = {
  name: string;
  email: string;
  id: number;
}

type Robots = {
  robots: Robot[]
}

const CardList = ({ robots }: Robots) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;