<template>
  <div class="home">
    <TheButton class="button" @click="setRandomCause"/>
      <router-link :to="currentLink">
          <CasusBibendi class="casus" :casus="current" />
      </router-link>
  </div>
</template>

<script>
import causes from '../../data.json';
import CasusBibendi from '../components/CasusBibendi';
import TheButton from '../components/TheButton';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default {
  name: 'home',
  components: {
    TheButton,
    CasusBibendi,
  },
  data() {
    return {
      currentId: 0,
    }
  },
  computed: {
    current() {
      return causes[this.currentId]
    },
    currentLink() {
      return `/ivas-ok/${this.currentId}`;
    }
  },
  methods: {
    getRandomCauseId() {
      return getRandom(0, causes.length - 1)
    },
    setRandomCause() {
      this.currentId = this.getRandomCauseId();
    }
  },
  mounted() {
    this.setRandomCause();
  }
}
</script>

<style scoped lang="scss">
.home {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.button {
    margin: 0 0 48px;
}

a {
    text-decoration: none;
}
</style>
