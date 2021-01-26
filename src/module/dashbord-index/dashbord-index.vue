<template>
    <div> 成功
        <mavonEditor v-model="value"></mavonEditor>
    </div>

</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    export default {
        name: "dashbord-index",
        components: {
            mavonEditor
        },
        data(){
            return{
                value:{a:'asdasdasd'}
            }
        }

    }
</script>

<style scoped>

</style>