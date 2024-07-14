import React from 'react';
import Pin from './Pin';
import Data from './Data';
const Home = () => {
return <div className="mainContainer">
{Data && Data.map((item) => (
  <Pin
    key={item.id}
    size={item.size}
    imgsrc={item.imgsrc}
    link={item.link}
    name={item.name}
  />
))}
</div>
}
export default Home;