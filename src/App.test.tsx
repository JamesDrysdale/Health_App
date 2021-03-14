import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { IonAlert } from '@ionic/react';

const sum = require('./App');

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  await findByText('BMI Calculator');
});

  // test('page should have a title of Ionic React Todos', async () => {
  //   const  app  = render(<App />);
  //   expect(app).findByText('IonApp');
  // });

  // test("compoonent exists", () => {
  //   const { App } = render(
  //   expect(component.contains(<ComponentName />)).toBe(false)
  //   );
    
  // });

  // test('page should have a title of BMI Calculator, async () => {
  //   const { findByText } = render(<App />);
  //   await findByText('BMI Calculator');
  // });