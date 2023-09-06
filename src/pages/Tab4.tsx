import { IonAvatar, IonButton, IonButtons, IonCard, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonMenuToggle, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBack, callOutline, card, helpCircleOutline, logOutOutline, personCircleOutline, pricetagsOutline, settingsOutline } from 'ionicons/icons';
import './Tab4.css';
import img1 from '../assets/albert-dera-ILip77SbmOE-unsplash.jpg'
import React from 'react';
import cardData from "../components/cardData";

const Tab4: React.FC = () => {
    const cardOne = cardData.cardOne;
    const cardTwo = cardData.cardTwo;

    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonButton  routerLink='/home'>
                <IonIcon icon={arrowBack} />
              </IonButton>
            </IonButtons>
            {/* <IonTitle>Account</IonTitle> */}
          </IonToolbar>
        </IonHeader>
            <IonContent className="ion-padding">
        
            <div className="centered-image">
              <IonImg src={img1}  className="card-image" />

            <IonText>My Name</IonText>
        </div>

            {/* <IonMenuToggle> */}
            <IonItem detail={true} lines='none' className='profileOptions'>
                        <IonIcon  color={'secondary'} slot='start' icon={personCircleOutline}/>
                        {/* {item.name} */}
                        Profile
                    </IonItem>
                    <IonItem detail={true} lines='none' className='profileOptions'>
                        <IonIcon  color={'secondary'} slot='start' icon={card}/>
                        Card
                    </IonItem>
                    <IonItem detail={true} lines='none' className='profileOptions'>
                        <IonIcon  color={'secondary'} slot='start' icon={pricetagsOutline}/>
                        Refer
                    </IonItem>
                    <IonItem detail={true} lines='none' className='profileOptions'>
                        <IonIcon  color={'secondary'} slot='start' icon={settingsOutline}/>
                        Setting
                    </IonItem>
                    
                    <IonItem detail={true} lines='none' className='profileOptions'>
                        <IonIcon  color={'secondary'} slot='start' icon={callOutline}/>
                        Contact us 
                        </IonItem>

                        <IonItem detail={true} lines='none' className='profileOptions'>
                        <IonIcon  color={'secondary'} slot='start' icon={helpCircleOutline}/>
                        Help
                        </IonItem>

                    {/* <IonMenuToggle autoHide={false}> */}
                    <IonButton color={'false'} className='center-button'  routerLink="/login"  routerDirection="root">
                        <IonIcon slot='start' icon={logOutOutline}/>
                        Logout
                    </IonButton>
                    {/* </IonMenuToggle> */}
            </IonContent>
        </IonPage>
    );
};

export default Tab4;