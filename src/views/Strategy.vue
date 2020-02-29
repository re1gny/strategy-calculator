<template>
  <div class="strategy container">
    <template v-if="strategy">
      <h1>{{strategy.title}}</h1>
      <div class="calculator">
        <CalculatorForm
          class="form"
          :params="strategy.params"
          @change="handleChange"
        />
        <h3 class="result">
          <span class="result__title">Объем средств:</span>
          {{strategy.result.toFixed(2)}}
        </h3>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CalculatorForm from '@/components/CalculatorForm.vue';

export default {
  name: 'SimpleStrategy',

  components: {
    CalculatorForm
  },

  computed: {
    ...mapState(['strategies']),
    strategy() {
      return this.strategies[this.$route.params.type];
    }
  },

  methods: {
    handleChange(type, value) {
      this.strategy.setParam(type, value);
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  display: flex;
  justify-content: space-between;

  @media all and (max-width : 768px) {
    flex-direction: column-reverse;
  }
}

.form {
  flex-shrink: 0;
  width: 50%;
  min-width: 260px;

  @media all and (max-width : 768px) {
    width: 100%;
  }
}

.result {
  max-width: 50%;
  margin: auto 0 0 40px;
  text-align: right;
  font-size: 28px;
  line-height: 1;

  &__title {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    opacity: 0.4;
  }

  @media all and (max-width : 768px) {
    margin: 0 0 40px 0;
    text-align: left;
  }
}
</style>