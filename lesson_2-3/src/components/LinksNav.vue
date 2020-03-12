<template>
    <nav>
        <LinksUl v-bind:links="links" />
    </nav>
</template>

<script>
import LinksUl from "./LinksUl"
export default {
    name: "LinksNav",
    props: {
        links: Array,
    },
    components: {
        LinksUl
    }
}
</script>