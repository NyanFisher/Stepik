<template>
        <nav class="footer-nav">
            <ul class="header-nav__ul clearfix">
                
            </ul>
        </nav>
</template> 

<script>
import LinksHeaderLi from '@/components/LinksHeaderLi'
export default {
    props: ['router_links'],
    components: {
        LinksHeaderLi
    }
}
</script>

<style scoped>
    .header-nav {
        float: right;
    }
    .header-nav__ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>

