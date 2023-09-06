import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonButtons,
  IonModal,
} from "@ionic/react";
import { pricetags } from "ionicons/icons";
import React, { useState } from "react";

const TransactionPage: React.FC = () => {
  const transactions = [
    {
      id: 1,
      date: "2023-08-21",
      description: "Purchase at Store A",
      amount: -50.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 2,
      date: "2023-08-22",
      description: "Deposit",
      amount: 100.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 3,
      date: "2023-08-23",
      description: "Withdrawal",
      amount: -30.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 4,
      date: "2023-08-23",
      description: "Withdrawal",
      amount: -30.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 5,
      date: "2023-08-23",
      description: "Withdrawal",
      amount: -30.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 6,
      date: "2023-08-23",
      description: "Withdrawal",
      amount: -30.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 7,
      date: "2023-08-23",
      description: "Withdrawal",
      amount: -30.0,
      icon: pricetags, // URL to your image
    },
    {
      id: 8,
      date: "2023-08-23",
      description: "Withdrawal",
      amount: -30.0,
      icon: pricetags, // URL to your image
    },
  ];

  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const openTransactionDetails = (transaction: any) => {
    setSelectedTransaction(transaction);
  };

  const closeTransactionDetails = () => {
    setSelectedTransaction(null);
  };

  return (
    <div>
      <IonList>
        {transactions.map((transaction) => (
          <IonItem
            detail={true}
            key={transaction.id}
            onClick={() => openTransactionDetails(transaction)} // Handle click
          >
            <IonButton slot="start">
              <IonIcon color={"dark"} icon={transaction.icon} />
            </IonButton>
            <IonLabel>
              <h2>{transaction.description}</h2>
              <IonText>{transaction.date}</IonText>
            </IonLabel>
            <IonLabel
              slot="end"
              className={transaction.amount >= 0 ? "income" : "expense"}
            >
              {transaction.amount >= 0
                ? `+$${transaction.amount.toFixed(2)}`
                : `-$${Math.abs(transaction.amount).toFixed(2)}`}
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

      <IonModal
        isOpen={!!selectedTransaction}
        onDidDismiss={closeTransactionDetails}
      >
        <IonContent>
          {selectedTransaction && (
            <div>
              <h2>{selectedTransaction.description}</h2>
              <p>Date: {selectedTransaction.date}</p>
              <p>Amount: {selectedTransaction.amount}</p>

              <IonButton expand="full" onClick={closeTransactionDetails}>
                Close
              </IonButton>
            </div>
          )}
        </IonContent>
      </IonModal>
    </div>
  );
};

export default TransactionPage;
