import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const InputControl: React.FC<{
    selectedValue: 'mkg' | 'ftlbs'; 
    onSelectMetrics: (value: 'mkg' | 'ftlbs') => void;
}> = props => {
    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectMetrics(event.detail.value);
    };

    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            {/* Metres and Kilograms option */}
            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>

            {/* Feet and pounds option */}
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;