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
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent
} from '@ionic/react';

import { calculatorOutline, refreshOutline} from 'ionicons/icons';

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

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    
    setCalculatedBmi(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';

  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonGrid>

          {/* Input for User's height */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          
          {/* Input for User's weight */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Buttons: calculate BMI & reset inputs */}
          <IonRow>
            <IonCol className="ion-text-left">
              {/* Button to reset any values in input fields */}
              <IonButton onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              {/* Button to Calculate BMI based on given inputs */}
              <IonButton onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Calculate
              </IonButton>
            </IonCol>
          </IonRow>

          {/* Result Area - only shows if calculatedBmi has a value */}
          {calculatedBmi && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <h2>{calculatedBmi}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
