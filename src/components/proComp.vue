<template>
<div id="projects" class="container h-100 overflow-auto">
<div class="row  justify-content-between">
<div v-for="card in projects" class="col-md-4 card d-flex gy-3">
<div>
  <div class="card-header">
  <h5 class="card-title">{{card.projectname}}</h5>
  </div>
  <div class="card-body">
  <img class="img-fluid" :src="card.img" alt="project image">
    <p class="card-text">{{card.title}}</p>
     <a :href="card. github" class="btn btn-primaryd-flex btn-success justify-content-between">Ghub</a>
     <a :href="card.live" class="btn btn-primaryd-flex btn-danger justify-content-between">live</a>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects;
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
background-color: #17141D;
border-radius: 10px;
transition: 0.4s ease-out;
width: 28%;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
.btn{
  justify-content: space-between;
  align-content: space-around;
}
</style>