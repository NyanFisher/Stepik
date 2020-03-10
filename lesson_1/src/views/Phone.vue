<template>
  <section class="phone">
    <h2 class="visually-hidden">Показ телефона</h2>
    <div class="container phone-section">
      <p v-show="Phone.visible_phone" class="phone js-phone">{{Phone.phone}}</p>
      <button v-show="Phone.visible_but" 
      v-on:click="
        Phone.visible_but = !Phone.visible_but;
        Phone.visible_phone = !Phone.visible_phone" class="phone_show js-phonebutton">
        {{Phone.name}}
      </button>
    </div>
  </section>
</template>

<style scoped>
.phone-section {
  padding: 50px 0;
  text-align: center;
}
.phone {
  margin: 0;
}
.phone_show {
  width: 100px;
  height: 50px;
}
</style>

<script>
document.title='Телефон'

export default {
  data() {
    return {
      Phone: {
        name: 'Телефон',
        phone: '+7 (912) 803 4490',
        visible_but: true,
        visible_phone: false,
      }
    }
  },
}
</script>