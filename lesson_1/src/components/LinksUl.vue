<template>
    <ul>
        <li v-for="link in links" v-bind:key="link.id">
            <LinksHref v-bind:link="link" />
        </li>
    </ul>
</template>

<script>
import LinksHref from "./LinksHref"
export default {
    name: "LinksUl",
    props: {
        links: Array
    },
    components: {
        LinksHref
    }
}
</script>