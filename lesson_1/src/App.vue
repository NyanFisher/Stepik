<template>
  <body>
    <header class="header">
      <h1 class="visually-hidden">Сайт-визитка Заикина Максима</h1>
          <LinksHeaderUl
          v-bind:router_links="router_links"
          />
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <ContactsFooter
      v-bind:router_links="router_links"
      />
      <CopyRight v-bind:copyright="copyright" />
    </footer>
  </body>
</template>

<script>
import LinksHeaderUl from '@/components/LinksHeaderUl'
import ContactsFooter from '@/components/ContactsFooter'
import CopyRight from '@/components/CopyRight'
const year = new Date();
export default {
  data() {
    return {
      copyright: `@ ${year.getFullYear() || '2020'} NFCompany`,
      router_links: [
        {id: 1, title: 'О себе', href: '/'},
        {id: 2, title: 'Телефон', href: '/phone'},
        {id: 3, title: 'Контакты', href: '/contacts'},
      ],

    }      
  },
  components: {
    LinksHeaderUl,
    ContactsFooter,
    CopyRight
  }
}
</script>

<style>
.header {
  padding: 15px;
  background-color: #313131;
  color: #ffffff;
}

.main { 
  margin: 50px 0 150px;
  min-height: 540px;
}

.footer {
  padding: 40px 0 0;
  background-color: #313131;
  color: #ffffff;
}
</style>
