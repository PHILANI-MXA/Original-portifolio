<template>
        <nav class="container-fluid navbar-expand-lg navbar-dark bg-black text-white navbar navbar-fixed-top" id="topNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"> <img src="#" alt=""></a>
            <span class="d-block d-lg-none"></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse text-white" id="navbarResponsive">
                <ul class="navbar-nav m-auto text-white fw-bold">
                    <li class="nav-item"><a class="nav-link text-white" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#testimonials">Testimonials</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'NavComponent',


};
</script>

<style scoped>
nav {
position:fixed;
width: 100%;
top: 0;

}
.navbar {
    display: flex;
    justify-content: center;
    padding: 1.2%;
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #ffefff;
}

i{
  color: white;
}

.nav-item {
  text-decoration: none;
}




</style>