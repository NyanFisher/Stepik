<template>
    <main class="main">
        <router-view/>  
    </main>
</template>

<script>
export default {
    name: "Main",
}
</script>

<style scoped>
    .main { 
    margin: 50px 0 150px;
    min-height: calc(100vh - 288px);
    }
</style>