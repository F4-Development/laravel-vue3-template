<script>
import Button from "primevue/button"
export default {
    name: "Welcome",
    components: {
        Button
    },
    methods: {
        selectTheme() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
    }
}
</script>

<template>
    <Button @click="selectTheme">{{ $t('theme.action') }}</Button>
</template>

<style scoped>

</style>
