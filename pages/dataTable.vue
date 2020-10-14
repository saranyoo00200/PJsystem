<template>
  <div>
    <v-container>
      <h2>แสดงวัตถุดิบที่ขาด</h2>
      <v-data-table
        dense
        :headers="headers"
        :items="this.$store.state.data"
        item-key="dataId"
        class="elevation-1"
      />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'dataId'
      },
      {
        text: 'ชื่อวัตถุดิบ',
        value: 'name'
      },
      {
        text: 'จำนวน',
        value: 'num'
      },
      { text: 'ขนาด', value: 'size' },
      { text: 'ยี่ห่อ', value: 'yihol' },
      { text: 'ราคา', value: 'price' }
    ]
  })
}
</script>

<style>

</style>
