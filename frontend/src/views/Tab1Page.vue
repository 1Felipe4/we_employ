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
      <ion-grid>
        <ion-row>
          <ion-col size-md="4">
            <ion-item>
              <ion-input label="Year" labelPlacement="stacked" type="number" @ionChange="search()" v-model="year"
                :disabled="!meta.loaded" :debounce="2000"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size-md="8">
            <ion-item>
              <ion-select @ionChange="search()" label="Country" labelPlacement="stacked" placeholder="Make a Selection"
                interface="popover" :multiple="true" v-model="selected_countries" :disabled="!meta.loaded">
                <ion-select-option v-for="(country, index) in countries" :key="index">{{ country }}</ion-select-option>
              </ion-select>
              <ion-chip slot="end" color="success" v-if="meta.loaded">
                {{ solutionData.length }}
              </ion-chip>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-accordion-group :multiple="true" :value="selected_employees">
        <ion-accordion v-for="(item, index) in solutionData" :value="item.record_id" :key="index">
          <ion-item slot="header">
            <ion-label>{{item.name}}</ion-label>
          </ion-item>
          <ion-card slot="content">
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-label>Email</ion-label>
                  <ion-label slot="end">{{ item.email_address }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Phone</ion-label>
                  <ion-label slot="end">{{ item.phone_number }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Work ID</ion-label>
                  <ion-badge slot="end">{{ item.work_id_number }}</ion-badge>
                </ion-item>
                <ion-item>
                  <ion-label>ID</ion-label>
                  <ion-badge slot="end">#{{ item.record_id }}</ion-badge>
                </ion-item>
                <ion-item>
                  <ion-label>Average Hours Per Week</ion-label>
                  <ion-label slot="end">{{ item.average_hours_per_week }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Events</ion-label>
                  <ion-label slot="end">
                    <ion-chip v-for="event in item.events">{{ event.event_name }}</ion-chip>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </ion-accordion>
      </ion-accordion-group>
      <!-- <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" v-for="(item, index) in solutionData" :key="index">
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ item.name }}</ion-card-title>
                <ion-card-subtitle>{{ item.email_address }} | {{ item.phone_number }}</ion-card-subtitle>
                <ion-label>{{ item.work_id_number }}</ion-label>

              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label>Country</ion-label>
                    <ion-label slot="end">{{ item.country }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>ID</ion-label>
                    <ion-badge slot="end">#{{ item.record_id }}</ion-badge>
                  </ion-item>
                  <ion-item>
                    <ion-label>Average Hours Per Week</ion-label>
                    <ion-label slot="end">{{ item.average_hours_per_week }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Events</ion-label>
                    <ion-label slot="end">
                      <ion-chip v-for="event in item.events">{{ event.event_name }}</ion-chip>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid> -->
      <ion-fab slot="fixed" vertical="top" horizontal="end" edge="true" v-if="meta.loaded">
        <ion-fab-button @click="downloadSolutionData()">
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
const selected_employees = ref([])
const downloadJsonFile = (data: any, filename: any) => {
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

const setOpen = (isOpen: boolean) => {
  isModalOpen.value = isOpen;
}
const countries = ref(['Trinidad and Tobago', 'Australia', 'USA', 'Canada', 'Germany'])
const selected_countries: any = ref([])
const year = ref(2023)

const downloadSolutionData = () => {
  const filename = `solutionData_${selected_countries.value.concat('_')}.json`;
  downloadJsonFile(solutionData.value, filename);
};

const search = () => {
  getSolutionData(year.value, selected_countries.value)
}
</script>
