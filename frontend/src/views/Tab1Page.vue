<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>We Employ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Solution Data</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-progress-bar type="indeterminate" v-if="!meta.loaded"></ion-progress-bar>
      <ion-grid >
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input label="Year" labelPlacement="stacked" type="number" @ionChange="search()" v-model="year" :disabled="!meta.loaded" :debounce="2000"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col>
            <ion-item>
              <ion-select @ionChange="search()" label="Country" labelPlacement="stacked" placeholder="Make a Selection" interface="popover" :multiple="true" v-model="selected_countries" :disabled="!meta.loaded">
                <ion-select-option v-for="(country, index) in countries" :key="index">{{ country }}</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
          <ion-col size="12" md="6" v-if="meta.loaded">
            <ion-item>
              <ion-label>
                Records
              </ion-label>
              <ion-chip slot="end" color="success">
                {{ solutionData.length }}
              </ion-chip>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="12" v-for="(item, index) in solutionData" :key="index">
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ item.name }}</ion-card-title>
                <ion-card-subtitle>{{ item.email_address }} | {{ item.phone_number }}</ion-card-subtitle>
                <ion-note>{{ item.work_id_number }}</ion-note>
                
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label>Country</ion-label>
                    <ion-note slot="end">{{ item.country }}</ion-note>
                  </ion-item>
                  <ion-item>
                    <ion-label>ID</ion-label>
                    <ion-badge slot="end">#{{ item.record_id }}</ion-badge>
                  </ion-item>
                  <ion-item>
                    <ion-label>Average Hours Per Week</ion-label>
                    <ion-note slot="end">{{ item.average_hours_per_week }}</ion-note>
                  </ion-item>
                  <ion-item>
                    <ion-label>Events</ion-label>
                    <ion-note slot="end">
                      <ion-chip v-for="event in item.events">{{ event.event_name }}</ion-chip>
                    </ion-note>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab slot="fixed" vertical="top" horizontal="end" edge="true" v-if="meta.loaded">
        <ion-fab-button>
          <ion-icon :icon="downloadOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonProgressBar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonBadge,
  IonNote,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/vue';
import { downloadOutline } from 'ionicons/icons';

import ExploreContainer from '@/components/ExploreContainer.vue';
import { useSolutionData } from '@/composables/useSolutionData'
import { ref } from 'vue';
const { solutionData, meta, getSolutionData } = useSolutionData()
const isModalOpen: any = ref(false);
const setOpen = (isOpen: boolean) => {
  isModalOpen.value = isOpen;
}
const countries = ref(['Trinidad and Tobago', 'Australia', 'USA', 'Canada', 'Germany'])
const selected_countries = ref([])
const year = ref(2023)

const search = () => {
  getSolutionData(year.value, selected_countries.value)
}
</script>
