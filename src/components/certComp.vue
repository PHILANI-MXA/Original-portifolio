<template>
<div id="certificates" class="container h-100 overflow-auto">
<div class="row d-flex gy-2 gx-4 justify-content-between">
<div v-for="card in certificates" class="col-md-4 card d-flex ">
<div>
  <div class="card-header">
  </div>
  <div class="card-body">
  <h5 class="card-title"></h5>
  <img class="img-fluid" :src="card.img" alt="project image">
    <p class="card-text text-black">{{card.language}}</p>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        certificates() {
            return this.$store.state.certificates;
       }
    }
}

</script>

<style scoped>
.card{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color:white;
font-family: San-Francisco;
height: 440px;
background-color: #ffefff;
border-radius: 10px;
box-shadow: -1rem 0 3rem grey;
transition: 0.4s ease-out;
position: relative;
left: 0px;
width: 30%;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
</style>