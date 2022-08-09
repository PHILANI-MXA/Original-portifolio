<template>
    <NavComp/>
    <HomeView/>
    <AboutView/>
    <EducationView/>
    <SkillsView/>
    <CertView/>
    <ProView/>
    <FooterComp/>

</template>

<script>
import NavComp from './components/navComp.vue';
import FooterComp from './components/footerComp.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import EducationView from './views/EducationView.vue';
import SkillsView from './views/SkillsView.vue';
import CertView from './views/certView.vue';
import ProView from './views/proView.vue';


export default {
    name: "",
    components: { NavComp, FooterComp, HomeView, AboutView, EducationView, SkillsView, CertView, ProView }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>