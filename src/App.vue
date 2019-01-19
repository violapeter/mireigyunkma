<template>
    <div id="app">
        <Header />

        <div class="content">
            <router-view/>
        </div>

        <Footer />
    </div>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';
  export default {
    components: {Header, Footer},
  };
</script>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #C6F71D, #59AF0C) no-repeat;
  margin: 0;
  width: 100%;
  color: #c0f31c;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 0 32px;
}

h1 {
    font-size: 32px;
    margin: 0 0 24px;
    border-bottom: 2px dashed #59AF0C;
}

h3 {
    margin: 32px 0 8px;
}

p {
    margin: 8px 0;
}

a {
    color: #ffe5cb;
}
</style>
