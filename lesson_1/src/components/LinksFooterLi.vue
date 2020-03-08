<template>
    <li class="footer-nav__li">
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

    
</style>