import React, { useRef, useState } from 'react';
import { 
  IonApp, 
  IonHeader, 
  IonContent, 
  IonToolbar, 
  IonTitle, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonAlert,
} from '@ionic/react';

import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';
import InputControl from './components/InputControl';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [ calculatedBmi, setCalculatedBmi ] = useState<number>();
  const [ error, setError ] = useState<string>();

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (
      !enteredHeight || 
      !enteredWeight || 
      +enteredWeight <= 0 || 
      +enteredHeight <= 0
      ) {
      setError('Please enter a valid input value. Height and weight cannot be less than or equal to 0.');
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    
    setCalculatedBmi(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  };

  const clearError = () => {
    setError('');
  };

  return (
    <React.Fragment>
      
      <IonAlert 
        isOpen={!!error}  // !! converts error to boolean
        message={error} 
        buttons={[{text: 'Okay', handler: clearError }]}
      />  
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary" className="ion-text-center">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <IonGrid>
            {/* Segmented buttons to choose metrics */}
            <IonRow>
              <IonCol>
                <InputControl selectedValue="mkg" />
              </IonCol>
            </IonRow>

            {/* Input for User's height */}
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Height</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            
            {/* Input for User's weight */}
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Weight</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            {/* Buttons: calculate BMI & reset inputs */}
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />

            {/* Result Area - only shows if calculatedBmi has a value */}
            {calculatedBmi && (
              <BmiResult BmiResult={calculatedBmi}/>
            )}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
