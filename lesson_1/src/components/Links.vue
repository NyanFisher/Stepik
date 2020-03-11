<template>
        <LinksNav v-bind:links="links" class="header-nav" />
</template> 

<script>
import LinksNav from './LinksNav'
export default {
    name: "Links",
    props: {
        links: Array,
    },
    components: {
        LinksNav
    }
}
</script>

<style>
    .header-nav {
        float: right;
    }
    .header-nav ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .header-nav li{
        display: inline-block;
        margin-left: 50px;
        position: relative;
    }

    .header-nav li:hover {
        transform: scale(1.10);
        transition:  0.2s;
    }

    .header-nav li::before{
        content: "/";
        position: absolute;
        left: -25px;
    }

    .header-nav li:first-child:before {
        content: none;
    }
</style>

