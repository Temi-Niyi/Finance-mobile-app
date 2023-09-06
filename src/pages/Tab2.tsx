import { IonAvatar, IonButton, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import TransactionPage from '../components/Transactions';
import { add, arrowBack } from 'ionicons/icons';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import cardData from "../components/cardData";

const Tab2: React.FC = () => {
    const cardOne = cardData.cardOne;
    const cardTwo = cardData.cardTwo;
    const [searchQuery, setSearchQuery] = React.useState("");
const [filteredTransactions, setFilteredTransactions] = React.useState([]);

    return (
        <IonPage>
         <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink='/register'>
                            <IonIcon icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Transactions</IonTitle>
                    </IonToolbar>
                    <IonToolbar>
                    <IonSearchbar />
                    </IonToolbar>
            </IonHeader>
            <IonGrid fixed>
            <IonContent className="ion-justify-content-center ion-padding">
        <IonLabel>Recent Transactions</IonLabel>
            <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <Swiper className='ion-padding-bottom'
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={5}
                spaceBetween={20}
              >
               <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonIcon style={{ fontSize: '24px'}} icon={add} />

                  </IonAvatar>
                  <p>New</p></div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p></div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p></div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p></div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p></div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p></div>
                </SwiperSlide>

                <SwiperSlide className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p>
                </SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>
          
              <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
            <IonLabel>Today</IonLabel>
            <TransactionPage/>
              </IonCol>
              </IonRow>
            </IonContent>
              </IonGrid>
        </IonPage>
    );
};

export default Tab2;