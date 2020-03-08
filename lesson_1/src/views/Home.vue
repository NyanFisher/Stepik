<template>
  <section class="about">
    <h2 class="visually-hidden">Кратко обо мне</h2>
    <div class="container">
      <article class="article clearfix">
        <div class="article-about-me">
          <h3 class="article-about-me_title">{{about.title.toUpperCase()}}</h3>
          <p class="article-about-me_content">
            {{about.contents[0]}} 
            <a class="article-about-me_vk" :href="about.link">Максим</a>{{about.contents[1]}}
          </p>
        </div>
        <img class="article-about-me_img" src="@/assets/image/my_avatar.png" alt="Фотография Максима">
      </article>
    </div>
  </section>
</template>

<style scoped>
  .about {
    padding: 50px;
  }
  .article-about-me {
    width: 420px;
    padding: 30px 20px 20px;
    margin-right: 160px;
    margin-top: 0;
    float: left;
    border: 10px solid #313131;
    background-color: #f1f2f4;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }

  .article-about-me_title {
    margin: 0;

    color: #3a4a5a;
    text-align: center;
    font-size: 24px;
    font-family: 'Trebuchet MS', sans-serif;
  } 

  .article-about-me_content {
    margin-bottom: 0;

    font-size: 20px;
    line-height: 30px;
    text-align: justify;
    word-break: break-word;
  }

  .article-about-me_vk {
    color: black;
    font-weight: bold;
  }

  .article-about-me_img {
    float: left;
    width: 420px;
    border: 26px solid #313131;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }

  .article-about-me_img:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
</style>
<script>
document.title='О себе'
export default {
  data() {
    return {
      about: {
        link: 'https://vk.com/nyanfisher',
        title: 'О себе',
        contents: [`Всем привет! Меня зовут`,
        `! Я Web-разработчик. Живу в городе Челябинск. В 2019 году закончил Высшую школу электроники и компьютерных наук в ЮУрГУ. Преимущественно занимаюсь разработкой backend части веб-приложений на языке Python. Так же имею портфолио сверстанных страниц по макетам и написанный backend к ним. `]
      }
    }
  }
}
</script>