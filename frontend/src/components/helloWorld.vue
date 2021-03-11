<template>
  <div class="hello">
    <h1 class="msg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "helloWorld",
  props: {
    msg: String,
  },
};
</script>

