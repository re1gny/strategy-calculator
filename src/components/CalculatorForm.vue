<template>
  <form class="form">
    <label
      v-for="(param, type) in params"
      :key="type"
      :for="type"
      class="form-group"
    >
      <span class="label">{{param.definition}}</span>
      <input
        class="input"
        type="number"
        :id="type"
        :value="param.value"
        @input="$emit('change', type, $event.target.value)"
      >
    </label>
  </form>
</template>

<script>
  export default {
    name: 'CalculatorForm',
    props: {
      params: Object,
    }
  }
</script>

<style scoped lang="scss">
.form {
  width: 100%;
}

.form-group {
  display: block;

  & + & {
    margin-top: 20px;
  }
}

.label {
  display: inline-block;
  margin-bottom: 8px;
}

.input {
  display: block;
  width: 100%;
  height: 42px;
  padding: 6px 12px;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
