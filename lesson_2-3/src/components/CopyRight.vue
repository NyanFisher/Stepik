<template>
    <div class="copyright">
        <div class="container">
            <p class="footer-copyright">
                <small class="footer-copyright-small">
                    {{copyright}} 
                </small>
            </p>
        </div>
    </div>
</template>

<style scoped>
.copyright {
    border-top: 1px solid #ffffff;
    padding: 20px 0;
}

.footer-copyright {
    text-align: center;
    margin: 0;
}
</style>

<script>
export default {
    name: "CopyRight",
    props: {
        copyright: String,
    },
}
</script>