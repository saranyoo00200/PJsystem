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
          v-for="(itemImage,i) in itemsImage"
          :key="i"
          :src="itemImage.src"
        />
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
                v-for="data in items"
                :key="data.id"
                elevation="24"
                class="ma-2 mb-2"
                max-width="400"
                :to="{}"
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
                  {{ data.content[0] }}
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
      itemsImage: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      tab: null,
      items: [
        {
          id: 1,
          tab: 'อาหารใต้',
          content: [
            { title: 'ไก่', price: '10' },
            { title: 'ไข่', price: '20' },
            { title: 'หมู', price: '30' },
            { title: 'เป็ด ', price: '40' },
            { title: 'เห็ด', price: '50' },
            { title: 'กุ้ง', price: '60' },
            { title: 'ปู', price: '70' },
            { title: 'ของท่านเล่น', price: '80' }]
        },
        {
          id: 2,
          tab: 'อาหารเหนือ',
          content: [
            { title: 'งู', price: '11' },
            { title: 'ไข่', price: '21' },
            { title: 'หมู', price: '31' },
            { title: 'เป็ด ', price: '41' },
            { title: 'เห็ด', price: '51' },
            { title: 'กุ้ง', price: '61' },
            { title: 'ปู', price: '71' },
            { title: 'หมา', price: '81' }]
        },
        {
          id: 3,
          tab: 'อาหารทะเล',
          content: [
            { title: 'มด', price: '12' },
            { title: 'ไข่', price: '22' },
            { title: 'หมู', price: '32' },
            { title: 'เป็ด ', price: '42' },
            { title: 'เห็ด', price: '52' },
            { title: 'กุ้ง', price: '62' },
            { title: 'ปู', price: '72' },
            { title: 'ของท่านเล่น', price: '82' }]
        },
        {
          id: 4,
          tab: 'น้ำดื่ม',
          content: [
            { title: 'ไก่', price: '13' },
            { title: 'ไข่', price: '23' },
            { title: 'หมู', price: '33' },
            { title: 'เป็ด ', price: '43' },
            { title: 'เห็ด', price: '53' },
            { title: 'กุ้ง', price: '63' },
            { title: 'ปู', price: '73' },
            { title: 'ของท่านเล่น', price: '83' }]
        },
        {
          id: 5,
          tab: 'ของหวาน',
          content: [
            { title: 'ไก่', price: '14' },
            { title: 'ไข่', price: '24' },
            { title: 'หมู', price: '34' },
            { title: 'เป็ด ', price: '44' },
            { title: 'เห็ด', price: '54' },
            { title: 'กุ้ง', price: '64' },
            { title: 'ปู', price: '74' },
            { title: 'ของท่านเล่น', price: '84' }]
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
        }, {
          id: 8,
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
