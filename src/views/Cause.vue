<template>
  <Page>
    <CasusBibendi :casus="current" />
    <router-link class="back" to="/">← Vissza az összes okhoz</router-link>
  </Page>
</template>

<script>
import causes from '../../data.json';
import Page from '../components/Page';
import CasusBibendi from '../components/CasusBibendi';

export default {
  name: 'Cause',
  components: {
    CasusBibendi,
    Page,
  },
  computed: {
    current() {
      return causes[this.$route.params.id]
    }
  },
}
</script>

<style scoped lang="scss">
    .back {
        display: block;
        text-align: center;
        margin: 20px auto;
        font-size: 18px;
        color: #695d57;
        text-shadow: none;
    }
</style>
