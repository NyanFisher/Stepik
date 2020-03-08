<template>
    <li class="header-nav__li">
        <router-link :to="link.href">{{link.title.toUpperCase()}}</router-link>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .header-nav__li{
        display: inline-block;
        margin-left: 50px;
        position: relative;
    }

    .header-nav__li:hover {
        transform: scale(1.10);
        transition:  0.2s;
    }

    .header-nav__li::before{
        content: "/";
        position: absolute;
        left: -25px;
    }

    .header-nav__li:first-child:before {
        content: none;
    }
    
</style>