const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ])
}


const App = () => {
    return  React.createElement(
     'div',
      {}, 
      [
          React.createElement ('h1', {}, 'Adopt Me!'),
          React.createElement(Pet, { 
              name: 'Jasmine', 
              animal: 'Dog', 
              breed: 'Healer'
            }),
          React.createElement(Pet, { 
               name: 'Blue',
               animal: 'Dog', 
               breed: 'Mixed Healer'
            }),
          React.createElement(Pet, { 
              name: 'Eevee', 
              animal: 'Cat', 
              breed: 'Seimese'
            })
      ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);