import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemGroup, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import logo from '../assets/logo.svg' ;
import firstIntro from '../assets/firstIntro.svg';
// import { Preferences } from '@capacitor/preferences';

// const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    }

    return (
        <IonPage>
            <IonContent scrollY={false} className="ion-padding">
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
                        <div className='ion-text-center ion-padding'>
                <img src={firstIntro} alt="Project Logo" width={'70%'} />
                </div>
                        </IonCol>
                    </IonRow>

                    <IonRow  className='ion-justify-content-center'>
                        <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
                    <IonText className="ion-padding">Sign in securely into your account</IonText>
                    </IonCol>
                    </IonRow>


                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>

                        <IonCard>
                    <IonCardContent>

                        <form onSubmit={doLogin} className='ion-margin-bottom'>
                            <IonInput mode="md" label="Email" type='email' placeholder='test@gmail.com' labelPlacement='floating' fill='outline'></IonInput>

                            <IonInput mode="md" className='ion-margin-top ion-margin-bottom' label="Password" type='password' placeholder='*****' labelPlacement='floating' fill='outline'>
                            </IonInput>

                            <IonText color={'primary'}>Forgot password?</IonText>

                            <IonButton routerLink='/home/tab1' className='ion-margin-top' type='submit'  expand="block">Sign in
                            <IonIcon icon={logInOutline} slot="end" ></IonIcon>
                            </IonButton>

                            <IonButton routerLink='/register' className='ion-margin-top' type='button'  expand="block" color={'secondary'}>Sign up
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
        // )}
        // </>
    );
};


export default Login;