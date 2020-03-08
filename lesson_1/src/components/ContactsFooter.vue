<template>
    <div class="container clearfix footer-container">
        <nav class="footer-nav">
            <ul class="footer-nav__ul" >
                <li class="footer-nav__li" v-for="link in router_links" :key="link.id">
                    <router-link :to="link.href">{{link.title.toUpperCase()}}</router-link>
                </li>
            </ul>
        </nav>
        <address class="footer-contacts">
            <ul class="footer-social__ul" >
                <li class="footer-social_li" v-for="link in social_links" :key="link.id">
                    <a class="empty-link" :href="link.href" :aria-label="link.aria_name" :class="link.class"></a>
                </li>
            </ul>
            <ul class="footer-contacts__ul" >
                <li class="footer-contacts_li" v-for="contact in contacts" :key="contact.id">
                    <a :href="contact.href" :class='contact.class'>{{contact.title}}</a>
                </li>
            </ul>
        </address>
    </div>
</template>

<style scoped>
.footer-container {
    margin-bottom: 50px;
}
.footer-nav {
    float: left;
    margin-right: 650px;
    margin-top: 0;
}

.footer-nav__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.footer-nav__li { 
    margin-top: 20px;
    margin-right: 0;
}

.footer-nav__li:first-child {
    margin: 0;
}

.footer-contacts {
    float: left;
}

.footer-social__ul {
    list-style-type: none;
    margin: 0;
    padding: 23px 0;
}
.footer-social_li {
    display: inline-block;
    margin-right: 20px;
}

.vk {
    background-image: url('../assets/image/vk.png');
}

.facebook {
    background-image: url('../assets/image/fb.png');
}

.twitter {
    background-image: url('../assets/image/twitter.png');
}

.instagram {
    background-image: url('../assets/image/inst.png');
}
.empty-link {
	padding: 20px 20px 4px;
	background-size: 100%;
	background-repeat: no-repeat;
}

.footer-contacts__ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.footer-contacts_li {
    margin-top: 15px;
    margin-right: 0;
}

.footer-email {
    padding-left: 33px;

	background-image: url("../assets/image/mail.png");
	background-position: left 45%;
    background-repeat: no-repeat;
    background-size: 10%;
}

.footer-phone {
    padding-left: 33px;

	background-image: url("../assets/image/phone.png");
	background-position: left 45%;
    background-repeat: no-repeat;
    background-size: 10%;
}
</style>

<script>

export default {
    props: ['router_links'],
    data() {
        return {
            social_links: [
                {id: 1, href: 'https://vk.com/nyanfisher', class: 'vk', aria_name:'Я Вконтакте'},
                {id: 2, href: 'https://www.facebook.com/NyanFIsher', class: 'facebook', aria_name:'Я в Фейсбукк'},
                {id: 3, href: 'https://twitter.com/Nyan_Fisher', class: 'twitter', aria_name:'Я в Твиттере'},
                {id: 4, href: 'https://www.instagram.com/nyanfisher/', class: 'instagram', aria_name:'Я в Инстаграме'},
            ],
            contacts: [
                {id: 1, href: 'mailto:zaikinmaxv@gmail.com', title: 'zaikinmaxv@gmail.com', class: 'footer-email'},
                {id: 2, href: 'tel:89128034490', title: '+7 (912)-803-4490', class: 'footer-phone'}
            ]
        }
    }
}
</script>