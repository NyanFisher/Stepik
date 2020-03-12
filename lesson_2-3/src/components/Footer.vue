<template>
    <footer class="footer">
      <ContactsFooter v-bind:links="router_links" />
      <CopyRight v-bind:copyright="copyright" />
    </footer>
</template>

<script>
import ContactsFooter from '@/components/ContactsFooter'
import CopyRight from '@/components/CopyRight'

export default {
    name: "Footer",
    props: {
        router_links: Array,
    },
    components: {
        ContactsFooter,
        CopyRight,
    },
    data() {
        return {
            copyright: `@ ${new Date().getFullYear() || '2020'} NFCompany`,
        }
    }
}
</script>

<style scoped>
.footer {
  padding: 40px 0 0;
  background-color: #313131;
  color: #ffffff;
}
</style>