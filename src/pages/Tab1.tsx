import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import React, { useState } from "react";
import "./Tab1.css";
import cardData from "../components/cardData";
import {
  add,
  addCircleOutline,
  eyeOff,
  eyeOffSharp,
  eyeOutline,
  notifications,
  send,
} from "ionicons/icons";
import Transactions from "../components/Transactions";

const Tab1: React.FC = () => {
  const cardOne = cardData.cardOne;
  const cardTwo = cardData.cardTwo;
  const [showAmount, setShowAmount] = useState(true);
  const amount = showAmount ? "$25000.00" : "**********";

  
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar color={'primary'}>
        <IonButtons slot='end'>
          <IonButton>
            <IonIcon slot="icon-only" icon={notifications} />
          </IonButton>
        </IonButtons>
        <IonTitle>Flex</IonTitle>
      </IonToolbar>
    </IonHeader>
      <IonContent className="ion-justify-content-center ion-padding">
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <IonItem className="hello" color={'transparent'} lines="none">
                  <IonAvatar>
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <h4 className="ion-padding"> Hello Dorcas!👋</h4>
                  </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <h3 className="balanceTitle">Balance</h3>
              <IonItem lines="none" className="ion-text-center">
                <div slot="end" onClick={() => setShowAmount(!showAmount)}>
                  <IonIcon
                    icon={showAmount ? eyeOutline : eyeOff}
                    style={{ fontSize: "24px" }}
                  />
                </div>
                <h2 className="balance">
                  {showAmount ? amount : "**********"}
                </h2>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <Swiper
                navigation={true}
                pagination={{
                   clickable: true }}
                slidesPerView={1.2}
                spaceBetween={20}
              >
                <SwiperSlide>
                  <div className="card_one">
                    <h3 className="infoRight">{cardOne.cardType}</h3>
                    <h2>{cardOne.cardNumber}</h2>
                    <div className="cardInfo">
                      <div>
                        <p>Card Holder</p>
                        <h5>{cardOne.cardHolder}</h5>
                      </div>
                      <div>
                        <p>Exp</p>
                        <h5>{cardOne.Exp}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card_two">
                    <div className="image_container">
                      <IonImg className="image" src={cardTwo.cardType} alt="" />
                    </div>
                    <h2>{cardTwo.cardNumber}</h2>
                    <div className="cardInfo">
                      <div>
                        <p>Card Holder</p>
                        <h5>{cardTwo.cardHolder}</h5>
                      </div>
                      <div>
                        <p>Exp</p>
                        <h5>{cardTwo.Exp}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="addCard">
                    <IonButtons>
                      <IonButton>
                        Add Card
                        <IonIcon icon={addCircleOutline} />
                      </IonButton>
                    </IonButtons>
                  </div>
                </SwiperSlide>
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <Swiper
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={5}
                spaceBetween={20}
              >
               <SwiperSlide >
                  <div className="contact">
                  <IonButton routerLink="/send" className="img">
                    <IonIcon style={{ fontSize: '24px'}} icon={send}/>

                  </IonButton>
                  <p>New</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className="contact">
                  <IonAvatar className="img">
                    <IonImg src={cardTwo.img} />
                  </IonAvatar>
                  <p>Bella</p>
                  </div>
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
              <div className="transact">
                <h3>Transaction</h3>
                <p>See more</p>
              </div>
              <Transactions />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
