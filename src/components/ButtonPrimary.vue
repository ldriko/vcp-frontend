<template>
    <button class="bg-regal-green w-32 py-2 text-white text-sm rounded-md mr-4">{{title}}</button>
</template>

<script>
    import "../assets/tailwind.css";
    export default {
      props: ['title']
    }
</script>