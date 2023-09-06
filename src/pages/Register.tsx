import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import logo from '../assets/logo.svg';

const Signup: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>First Project</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className="ion-padding">
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
                        <div className='ion-text-center ion-padding'>
                <img src={logo} alt="Project Logo" width={'40%'} />
                </div>
                        </IonCol>
                    </IonRow>

                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
                        <IonCard>
                    <IonCardContent>
                        <form>
                            <IonInput mode="md" label="First name" type='email' placeholder='Seyi' labelPlacement='floating' fill='outline'></IonInput>

                            <IonInput mode="md" className='ion-margin-top' label="Last name" type='email' placeholder='Vibes' labelPlacement='floating' fill='outline'></IonInput>

                            <IonInput mode="md" className='ion-margin-top' label="Email" type='email' placeholder='test@gmail.com' labelPlacement='floating' fill='outline'></IonInput>

                            <IonInput mode="md" className='ion-margin-top' label="Password" type='password' placeholder='*****' labelPlacement='floating' fill='outline'>
                            </IonInput>

                            <IonInput mode="md" className='ion-margin-top' label="Re-enter Password" type='password' placeholder='*****' labelPlacement='floating' fill='outline'>
                            </IonInput>

                            <IonButton routerLink='/' className='ion-margin-top ion-margin-botom' type='submit'  expand="block">Register
                            <IonIcon icon={logInOutline} slot="end" ></IonIcon>
                            </IonButton>

                            <IonText className='ion-margin-top'>Already have an account?</IonText>
                            <IonButton routerLink='/' className='ion-margin-top' type='button'  expand="block" color={'secondary'}>Sign in
                            <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default Signup
;