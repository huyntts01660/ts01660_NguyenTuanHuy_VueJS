<template>
    <h1>{{ greeting }}</h1>
    <button
        :title="buttonTitle"
        @click="changeGreeting">
        click de thay doi
    </button>
</template>

<script>
export default {
    data() {
        return {
            greeting: 'Xin chào bạn!',
            buttonTitle: 'Nhấn vào đây để thay đổi lời chào'
        }
    },
    methods: {
        changeGreeting() {
            this.greeting = 'hello, world!'
            this.buttonTitle = 'Lời chào mới đã được cập nhật'
        }
    }
}
</script>
