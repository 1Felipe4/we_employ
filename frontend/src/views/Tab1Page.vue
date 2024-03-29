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
          <ion-col size-md="4" size="12">
            <ion-item>
              <ion-input label="Year" labelPlacement="stacked" type="number" @ionChange="search()" v-model="year"
                :disabled="!meta.loaded" :debounce="2000"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size-md="8" size="12">
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
            <ion-label>{{ item.name }}</ion-label>
          </ion-item>
          <ion-card slot="content">
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-label>Work ID</ion-label>
                  <ion-badge slot="end" >{{ item.work_id_number }}</ion-badge>
                </ion-item>
                <ion-item>
                  <ion-label>ID</ion-label>
                  <ion-badge slot="end">#{{ item.record_id }}</ion-badge>
                </ion-item>
                <ion-item>
                  <ion-label>Email</ion-label>
                  <ion-label slot="end" class="ion-text-end">{{ item.email_address }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Phone</ion-label>
                  <ion-label slot="end" class="ion-text-end">{{ item.phone_number }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Average Hours Per Week</ion-label>
                  <ion-label slot="end" class="ion-text-end">{{ item.average_hours_per_week }}</ion-label>
                </ion-item>
                <ion-label>Events</ion-label>
                <ion-list>
                  <ion-item v-for="event in item.events">
                    <ion-label>{{ event.event_name }}</ion-label>
                    <ion-label slot="end" class="ion-text-end">{{ event.event_date }}</ion-label>
                  </ion-item>
                </ion-list>
              </ion-list>
            </ion-card-content>
          </ion-card>
        </ion-accordion>
      </ion-accordion-group>
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
  IonProgressBar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonAccordionGroup,
  IonAccordion,
  IonCard,
  IonCardContent,
  IonList,
  IonChip,
  IonBadge,
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
  const fileNames = ['solutionData'].concat(selected_countries.value)
  const filename = `${fileNames.join('_')}.json`;
  downloadJsonFile(solutionData.value, filename);
};

const search = () => {
  getSolutionData(year.value, selected_countries.value)
}
</script>
