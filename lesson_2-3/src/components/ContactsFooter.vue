<template>
    <div class="container">
        <div class="footer-container clearfix">
            <LinksNav v-bind:links="links" class="footer-nav" />
            <address class="footer-contacts">
                <LinksUl v-bind:links="social_links" class="footer-social__ul"/>
                <LinksUl v-bind:links="contacts" class="footer-contacts__ul"/>
            </address>
        </div>
    </div>
</template>

<style >
.footer-container {
    margin-bottom: 50px;
}
.footer-nav {
    float: left;
    margin-right: 650px;
    margin-top: 0;
}

.footer-nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.footer-nav li { 
    margin-top: 20px;
    margin-right: 0;
}

.footer-nav li:first-child {
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
.footer-social__ul   li {
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

.footer-contacts__ul li {
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
import LinksNav from './LinksNav'
import LinksUl from './LinksUl'
export default {
    props: ['links'],
    data() {
        return {
            social_links: [
                {id: 1, href: 'https://vk.com/nyanfisher', class: 'vk empty-link', aria_name:'Я Вконтакте', social: true},
                {id: 2, href: 'https://www.facebook.com/NyanFIsher', class: 'facebook empty-link', aria_name:'Я в Фейсбукк', social: true},
                {id: 3, href: 'https://twitter.com/Nyan_Fisher', class: 'twitter empty-link', aria_name:'Я в Твиттере', social: true},
                {id: 4, href: 'https://www.instagram.com/nyanfisher/', class: 'instagram empty-link', aria_name:'Я в Инстаграме', social: true},
            ],
            contacts: [
                {id: 1, href: 'mailto:zaikinmaxv@gmail.com', title: 'zaikinmaxv@gmail.com', class: 'footer-email', contact: true},
                {id: 2, href: 'tel:89128034490', title: '+7 (912)-803-4490', class: 'footer-phone', contact: true}
            ]
        }
    },
    components: {
        LinksNav,
        LinksUl
    }
}
</script>