<template>
  <div class="app" v-bind:class="{night:isNight}">
    <Header v-bind:router_links="router_links" @changeTheme="addClassInApp"/>
    <Main />
    <Footer v-bind:router_links="router_links"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'


export default {
  name: "App",
  data() {
    return {
      isNight: false,
      router_links: [
        {id: 1, title: 'О себе', href: '/', local: true},
        {id: 2, title: 'Телефон', href: '/phone', local: true},
        {id: 3, title: 'Контакты', href: '/contacts', local: true},
      ],
    }      
  },
  components: {
    Header,
    Main,
    Footer,
  },
  methods: {
    addClassInApp(value) {
      this.isNight = !value
    }
  }
}
</script>

<style>

.night {
  background-color: #313131;
}
.night .phone {
  color:#ffffff;
}

</style>
