<template>
    <div class="container clearfix">
        <nav class="header-nav">
            <ul class="header-nav__ul clearfix">
                <LinksHeaderLi 
                    v-for="link in router_links" 
                    v-bind:link="link"
                    :key="link.id"
                />
            </ul>
        </nav>
    </div>
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

