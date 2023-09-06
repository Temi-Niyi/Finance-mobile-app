import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonSegment, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { triangle, ellipse, atCircleOutline, notifications, personCircleOutline, home, wallet, swapHorizontalOutline, swapHorizontalSharp, swapHorizontal } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <IonTabs>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/home/tab1" >
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="tab2" href="/home/tab2" >
                <IonIcon icon={swapHorizontalOutline} />
                <IonLabel>Transactions</IonLabel>
                </IonTabButton>

                <IonTabButton tab="tab3" href="/home/tab3" >
                <IonIcon icon={wallet} />
                <IonLabel>Wallet</IonLabel>
                </IonTabButton>

                <IonTabButton tab="tab4" href="/home/tab4" >
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Account</IonLabel>
                </IonTabButton>

            </IonTabBar>

            <IonRouterOutlet>
                <Route path="/home/tab1" component={Tab1} />
                <Route path="/home/tab2" component={Tab2} />
                <Route path="/home/tab3" component={Tab3} />
                <Route path="/home/tab4" component={Tab4} />

                <Route exact path="/home">
                <Redirect to="/home/tab1" />
                </Route>
            </IonRouterOutlet>
        </IonTabs>

      </IonContent>
        
    </IonPage>
  );
};

export default Home;
