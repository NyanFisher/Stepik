<template>
  <body v-bind:class="{night:isNight}">
    <header class="header">
      <div class="container clearfix">
        <h1 class="visually-hidden">Сайт-визитка Заикина Максима</h1>
        <div class="checkbox-theme">
          <input type="checkbox" class="input_toogle" id="theme" name="theme" v-model="isNight">
          <label for="theme" class="toggle" :aria-label='isNight? "Тёмная тема" : "Светлая тема"'><span></span></label>
        </div>
        <Links v-bind:links="router_links" />
      </div>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <ContactsFooter v-bind:links="router_links" />
      <CopyRight v-bind:copyright="copyright" />
    </footer>
  </body>
</template>

<script>
import Links from '@/components/Links'
import ContactsFooter from '@/components/ContactsFooter'
import CopyRight from '@/components/CopyRight'

export default {
  data() {
    return {
      copyright: `@ ${new Date().getFullYear() || '2020'} NFCompany`,
      router_links: [
        {id: 1, title: 'О себе', href: '/', local: true},
        {id: 2, title: 'Телефон', href: '/phone', local: true},
        {id: 3, title: 'Контакты', href: '/contacts', local: true},
      ],
      isNight: false,
    }      
  },
  components: {
    Links,
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
  min-height: calc(100vh - 288px);
}

.footer {
  padding: 40px 0 0;
  background-color: #313131;
  color: #ffffff;
}
.night {
  background-color: #313131;
}
.night .phone {
  color:#ffffff;
}
.checkbox-theme {
  float: left;
}
.input_toogle{
  display: none;
}
.toggle {
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0,0,0);
}
.toggle:before {
  content: "";
  position: relative;
  top: 3px;
  left: 3px;
  width: 34px;
  height: 14px;
  display: block;
  background: #9A9999;
  border-radius: 8px;
  transition: background 0.2s ease;
}
.toggle span {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  display: block;
  background-color: #ffffff;
  background-image: url('./assets/image/moon-dark.png');
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
  transition: all 0.2s ease;
}
.toggle span:before {
  content: "";
  position: absolute;
  display: block;
  margin: -18px;
  width: 56px;
  height: 56px;
  background: rgba(229, 228, 233, 0.5);
  border-radius: 50%;
  transform: scale(0);
  opacity: 1;
  pointer-events: none;
}

.input_toogle:checked + .toggle:before {
  background: #9A9999;
}
.input_toogle:checked + .toggle span {
  background-color: #000000;
  background-image: url('./assets/image/moon.png');
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(20px);
  transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
  box-shadow: 0 3px 8px rgba(237, 236, 241, 0.2);
}
.input_toogle:checked + .toggle span:before {
  transform: scale(1);
  opacity: 0;
  transition: all 0.4s ease;
}
</style>
