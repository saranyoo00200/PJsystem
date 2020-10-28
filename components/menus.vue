<template>
  <div>
    <div>
      <v-carousel
        class="mb-5"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                {{ slide }} Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div>
      <v-card>
        <v-tabs
          v-model="tab"
          dark
        >
          <v-tab
            v-for="item in items"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
        <v-divider class="mt-2 mb-2" />
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item.tab"
          >
            <div class="d-flex flex-wrap">
              <v-card
                v-for="menusid in items"
                :key="menusid.title"
                class="ma-2 mb-2"
                max-width="400"
                :to="{ name: 'pageInfo-id', params: { id: music } }"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  :style="{width:'274px'}"
                >
                  <v-card-title>Menu</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">
                  {{ item.content }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island</div>
                </v-card-text>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ],
      tab: null,
      tab1: null,
      items: [
        {
          id: 1,
          tab: 'อาหารใต้',
          content: [
            { title: 'ไก่', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        },
        {
          id: 2,
          tab: 'อาหารเหนือ',
          content: [
            { title: 'ไก่', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        },
        {
          id: 3,
          tab: 'อาหารทะเล',
          content: [
            { title: 'มด', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        },
        {
          id: 4,
          tab: 'น้ำดื่ม',
          content: [
            { title: 'ไก่', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        },
        {
          id: 5,
          tab: 'ของหวาน',
          content: [
            { title: 'ไก่', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        },
        {
          id: 6,
          tab: 'ผลไม้',
          content: [
            { title: 'ไก่', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        },
        {
          id: 7,
          tab: 'ของท่านเล่น',
          content: [
            { title: 'ไก่', price: '1' },
            { title: 'ไข่', price: '2' },
            { title: 'หมู', price: '3' },
            { title: 'เป็ด ', price: '4' },
            { title: 'เห็ด', price: '5' },
            { title: 'กุ้ง', price: '6' },
            { title: 'ปู', price: '7' },
            { title: 'ของท่านเล่น', price: '8' }]
        }
      ]
    }
  }
}
</script>
