<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <p>{{$store.state.num}}</p>
    </div>
</template>
<script>
    import store from '@/store'
    export default{
        data(){
            return{
                msg:'足球比赛',
            }
        },
        store
    }
</script>