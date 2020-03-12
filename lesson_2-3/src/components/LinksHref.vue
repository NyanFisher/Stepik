<template>
        <router-link v-if="link.local" :to="link.href">{{link.title.toUpperCase()}}</router-link>
        <a v-else-if="link.social" :href="link.href" :class="link.class" :aria-label="link.aria_label"></a>
        <a v-else-if="link.contact" :href="link.href" :class="link.class">{{link.title}}</a>
</template>

<script>
export default {
    name: "LinksHref",
    props: {
        link: {
            type: Object,
            required: true,
        }
    },
    mounted(){
        console.log(this.link)
    }
}
</script>