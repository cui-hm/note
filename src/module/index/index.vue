<template>
    <div>
        <div class="title">
            <ul>
                <li v-for="(item,index) in moduleRoutes" :key="index" @click="jump(item)">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index.vue",
        props:{
            moduleRoutes:{
                type:Array,
                default:() =>{[]}
            }
        },
        data(){
            return{
                titleData:[
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    },
                    {
                        name:'测试'
                    }
                ]
            }
        },
        methods:{
            jump(item){
                this.$router.push({ path: item.jumpToPath })
            }
        }
    }
</script>

<style scoped lang="scss">
    ul{
        display: flex;
        width: 60%;
        li{
            flex: 1;
            text-align: center;
            color : rgba(255,255,255,0.8);
            transition: color 0.5s ease-out;
            &:hover{
                cursor: pointer;
                color : rgba(255,255,255,1);
                //animation: colors 0.5s alternate forwards ease-out;
            }
        }

    }

.title{
    width: 100%;
    height: 50px;
    background: rgb(0,0,0,0.8);
    color: aliceblue;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    /*z-index: 99;*/
}

    @keyframes colors {
        from{
           color : rgba(255,255,255,0.8);
        }
        to{
           color : rgba(255,255,255,1);
        }
    }
</style>