import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import logo from '../assets/logo.svg';
import firstIntro from '../assets/firstIntro.svg';
import secondIntro from '../assets/secondIntro.svg';
import blob from '../assets/Blob.svg';
import './intro.css';
import { arrowForward, arrowForwardOutline } from 'ionicons/icons';

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButton = ({ children }: any) => {
    const swiper = useSwiper ();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {

    return (
    <IonPage>
        <IonContent>
     
        <Swiper className='introSwiper'>
        <IonGrid fixed>
               
            <IonRow className='ion-justify-content-center'>
            <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
            <SwiperSlide className='ion-text-center ion-padding introSwiperSlide addBlop'>
                <img src={firstIntro} alt="Project Logo" width={'100%'} />

            
            <IonText>
            <h3 className='ion-float-left'>Manage your Transactions and track your expenses</h3>
            </IonText>
            <SwiperButton> Next 
                    <IonIcon slot="end" color={'secondary'} icon={arrowForwardOutline} />
            </SwiperButton>
            </SwiperSlide>
            </IonCol>
            </IonRow>

            <IonRow className='ion-justify-content-center'>
            <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
            <SwiperSlide className='ion-text-center ion-padding addBlop'>
                <img src={secondIntro} alt="Project Logo" width={'100%'} />
            <IonText>
            <h3>Send and receive payments</h3>
            </IonText>
            <SwiperButton> Next 
                    <IonIcon slot="end" color={'secondary'} icon={arrowForwardOutline} />
            </SwiperButton>
            </SwiperSlide>
            </IonCol>
            </IonRow>

            <IonRow  className='ion-justify-content-center'>
            <IonCol size='12' sizeXl='4' sizeMd='8' sizeLg='6'>
            <SwiperSlide className='ion-text-center ion-padding addBlop'>
                <img src={logo} alt="Project Logo" width={'100%'} />
            <IonText><h3>Record your savings and income</h3>
            </IonText>
            <IonButton onClick={() => onFinish()} routerLink='/login'>Get started</IonButton>
            </SwiperSlide>
            </IonCol>
            </IonRow>

        </IonGrid>
        </Swiper>
        </IonContent>
        </IonPage>
    )
};

export default Intro;