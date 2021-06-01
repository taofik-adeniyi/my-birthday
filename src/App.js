import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button 
          onClick={
          // people.length > 0 
          // ? () => setPeople(
          //   people.append(
          //     {
          //       id: 6, 
          //       name: 'taofik', 
          //       age: 26, 
          //       image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
          //     }
          //   )) 
          // : 
          () => setPeople([])
          }>
          {people.length > 0 ? 'clear' : 'add'}
        </button>
      </section>
    </main>;
}

export default App;

