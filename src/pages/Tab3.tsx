import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
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
  IonMenuToggle,
  IonPage,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  add,
  addCircleOutline,
  arrowBack,
  atCircleOutline,
  backspaceOutline,
  callOutline,
  logOutOutline,
  pricetagsOutline,
  receipt,
  save,
  send,
  settingsOutline,
} from "ionicons/icons";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Tab3.css";
import cardData from "../components/cardData";

const Tab3: React.FC = () => {
  const cardOne = cardData.cardOne;
  const cardTwo = cardData.cardTwo;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wallet</IonTitle>
          <IonButtons slot="start">
            <IonButton routerLink="/register">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonGrid fixed>
        <IonContent className="ion-padding">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6"></IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <Swiper
                className="ion-padding-bottom "
                navigation={true}
                pagination={{
                  clickable: true,
                }}
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
              <div className="option_container">
                <div>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={add} />
                  </IonButton>
                  <IonText>Top-up</IonText>
                </div>

                <div>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={send} />
                  </IonButton>
                  <IonText>Transfer</IonText>
                </div>

                <div>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={receipt} />
                  </IonButton>
                  <IonText>Receipt</IonText>
                </div>

                <div>
                  <IonButton>
                    <IonIcon slot="icon-only" icon={save} />
                  </IonButton>
                  <IonText>Save</IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <div className="card_container">
                <div className="ion-card">
                  <IonText>
                    <h3>Shopping</h3>
                  </IonText>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>24</IonCardTitle>
                  </IonCardContent>
                </div>

                <div className="ion-card">
                  <IonText>
                    <h3>Savings</h3>
                  </IonText>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>24</IonCardTitle>
                  </IonCardContent>
                </div>

                <div className="ion-card">
                  <IonText>
                    <h3>Savings</h3>
                  </IonText>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>24</IonCardTitle>
                  </IonCardContent>
                </div>

                <div className="ion-card">
                  <IonText>
                    <h3>Withdrawals</h3>
                  </IonText>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>24</IonCardTitle>
                  </IonCardContent>
                </div>

                <div className="ion-card">
                  <IonText>
                    <h3>Transfers</h3>
                  </IonText>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>24</IonCardTitle>
                  </IonCardContent>
                </div>

                <div className="ion-card">
                  <IonText>
                    <h3>Savings</h3>
                  </IonText>
                  <IonCardContent className="ion-text-center">
                    <IonCardTitle>24</IonCardTitle>
                  </IonCardContent>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonGrid>
    </IonPage>
  );
};

export default Tab3;
