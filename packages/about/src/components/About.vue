<template>
  <div class="container">
    <div class="profile-pic">
      <img src="https://via.placeholder.com/150" alt="Profile Picture">
    </div>
    <h1>{{ name }}</h1>
    <p class="title">{{ jobTitle }}</p>
    <p>{{ description }}</p>
    <p>{{ subDescription }}</p>
    <div class="social-links">
      <a href="https://lv.linkedin.com/in/nikita-hvoina-995959212">LinkedIn</a>
      <a href="https://github.com/Vei1x">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      name: 'Nikita Hvoina',
      jobTitle: ' Backend .Net Developer',
      description: 'This is my demo for my bachelor\'s thesis about MicroFrontend architecture.',
      subDescription: 'It was pain.',
    }
  },
  methods: {
    handleClick(platform) {
      alert(`${platform} clicked!`);
    }
  }
}
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: #f4f4f9;
  color: #333;
  line-height: 1.6;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.profile-pic img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #333;
}

h1 {
  margin: 20px 0 5px;
  color: #333;
}

.title {
  color: #555;
  font-style: italic;
  margin: 20px auto;
}

p {
  width: 80%;
  max-width: 600px;
  margin: 0;
}

.social-links {
  margin: 50px auto;

}

.social-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
}

.social-links a:hover {
  border-bottom: 2px solid #333;
}
</style>
