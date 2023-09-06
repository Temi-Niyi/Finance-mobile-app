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
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addCircleOutline,
  arrowBack,
  backspaceOutline,
  bagCheckOutline,
  logInOutline,
  personCircleOutline,
  send,
} from "ionicons/icons";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import cardData from "../components/cardData";

const Send: React.FC = () => {
  const cardOne = cardData.cardOne;
  const cardTwo = cardData.cardTwo;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transfer</IonTitle>
          <IonButtons slot="start">
            <IonButton slot="icon-only" routerLink="/home">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>Choose Card</IonLabel>

        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <Swiper
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
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeXl="4" sizeMd="8" sizeLg="6">
              <IonCardSubtitle className="ion-padding-top">
                Choose Recipient
              </IonCardSubtitle>
              <Swiper
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={5}
                spaceBetween={20}
              >
                <SwiperSlide>
                  <div className="contact">
                    <IonAvatar className="img">
                      <IonImg src={cardTwo.img} />
                    </IonAvatar>
                    <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="contact">
                    <IonAvatar className="img">
                      <IonImg src={cardTwo.img} />
                    </IonAvatar>
                    <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="contact">
                    <IonAvatar className="img">
                      <IonImg src={cardTwo.img} />
                    </IonAvatar>
                    <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="contact">
                    <IonAvatar className="img">
                      <IonImg src={cardTwo.img} />
                    </IonAvatar>
                    <p>Bella</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
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
              <IonCard>
                <IonCardContent>
                  <form className="ion-margin-bottom">
                    <IonInput
                      mode="md"
                      label="Account number"
                      type="number"
                      placeholder="0011334556"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>

                    <IonInput
                      mode="md"
                      className="ion-margin-top ion-margin-bottom"
                      label="Amout"
                      type="number"
                      placeholder="$50"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>

                    <IonInput
                      mode="md"
                      className="ion-margin-top ion-margin-bottom"
                      label="Password"
                      type="password"
                      placeholder="*******"
                      labelPlacement="floating"
                      fill="outline"
                    ></IonInput>

                    <IonButton
                      routerLink="/home"
                      className="ion-margin-top"
                      type="submit"
                      expand="block"
                    >
                      Send
                      <IonIcon icon={send} slot="end"></IonIcon>
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

export default Send;
