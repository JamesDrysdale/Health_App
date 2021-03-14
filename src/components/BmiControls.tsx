import React from 'react';
import { IonRow, IonCol, IonButton, IonIcon} from '@ionic/react';
import { refreshOutline, calculatorOutline } from 'ionicons/icons';

const BmiControls: React.FC<{
    onCalculate: () => void; 
    onReset: () => void;
}> = props => {
    return (
        //  Buttons: calculate BMI & reset inputs
        <IonRow>
        <IonCol className="ion-text-left">
        {/* Button to reset any values in input fields */}
        <IonButton onClick={props.onReset}>
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
        </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
        {/* Button to Calculate BMI based on given inputs */}
        <IonButton onClick={props.onCalculate}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
        </IonButton>
        </IonCol>
    </IonRow>
    );
};

export default BmiControls;