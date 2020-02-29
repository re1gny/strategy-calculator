<template>
  <div class="home container">
    <h1>
      Калькулятор средств, необходимых роботу для торговли по стратегии
    </h1>

    <h3>Стратегии</h3>

    <div class="strategies">
      <router-link
        v-for="(strategy, type) in strategies"
        :key="type"
        :to="`/strategies/${type}`"
        class="strategy"
      >
        {{strategy.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState(['strategies']),
  },
}
</script>

<style lang="scss" scoped>
.strategies {
  display: flex;

  @media all and (max-width : 768px) {
    flex-direction: column;
  }
}

.strategy {
  flex: 1 1 100%;
  padding: 32px 40px;
  border-radius: 12px;
  background-color: #5940eb;
  color: #ffffff;
  text-decoration: none;

  & + & {
    margin-left: 20px;
  }

  @media all and (max-width : 768px) {
    & + & {
      margin-left: 0;
      margin-top: 20px;
    }
  }
}
</style>
