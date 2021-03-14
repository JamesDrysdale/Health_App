import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const InputControl: React.FC<{selectedValue: 'mkg' | 'ftlbs'}> = props => {
    return (
        <IonSegment value={props.selectedValue}>
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