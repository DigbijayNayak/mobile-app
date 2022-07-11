import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { logoUsd, pricetag } from "ionicons/icons";
import { ayush } from "../../data";

const Ayush = () => {
  return (
    <>
      <IonPage>
        <IonContent>
          <IonGrid>
            <IonRow className="ion-padding">
              <IonCol>
                <IonText>Ayush</IonText>
              </IonCol>
            </IonRow>

            <IonRow>
              {ayush.map((data) => {
                return (
                  <IonCol key={data.id} size="6" sizeSm="4" sizeMd="3">
                    <IonCard className="ion-padding ion-text-center" button>
                      <IonImg src={data.image}></IonImg>
                      {/* <IonText style={{ fontSize: "10px" }}>
                        {data.title}
                      </IonText> */}
                      <IonText style={{ fontWeight: "bold" }}>
                        <IonIcon icon={logoUsd}></IonIcon>
                        {data.price}
                      </IonText>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Ayush;
