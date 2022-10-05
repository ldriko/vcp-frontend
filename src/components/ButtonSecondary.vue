<template>
    <button class="border w-32 py-2 border-solid border-regal-green text-sm text-regal-green text-sm rounded-md mx-4">{{title}}</button>
</template>

<script>
    import "../assets/tailwind.css";
    export default {
      props: ['title']
    }
</script>