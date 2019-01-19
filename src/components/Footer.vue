<template>
    <footer class="footer">
        <div class="copyright">
            © Copyright 2014 - {{ currentYear }} - Viola Anikó, Viola Péter. Minden jog fenntartva. Inkább igyatok.
        </div>
        <nav class="navigation">
            <router-link class="link" to="/gyik">GY.I.K.</router-link>
            <router-link class="link" to="/impresszum">Impresszum</router-link>
            <router-link class="link" to="/kapcsolat">Kapcsolat</router-link>
        </nav>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  };
</script>

<style scoped lang=scss>
.footer {
    align-items: center;
    display: flex;
    padding: 10px;
    font-size: 12px;
    color: #bff21c;

    @media screen and (max-width: 360px) {
        flex-direction: column-reverse;
        text-align: center;
    }
}

.copyright {
    margin: 0 auto 0 0;
    padding: 0 20px 0 0;
}

.navigation {
    @media screen and (max-width: 360px) {
        padding: 0 0 16px;
    }
}

.link, .link:visited {
    color: #bff21c;
    margin: 0 8px;
}
</style>
