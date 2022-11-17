<template>
  <div class="lds-dual-ring" />
</template>

<script>
  export default {
    name: 'Spinner'
  }
</script>

<style>
  .lds-dual-ring {
    display: inline-block;
    height: 40px;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 34px;
    height: 34px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    border: 6px solid #535050;
    border-color: #535050 transparent #535050 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
