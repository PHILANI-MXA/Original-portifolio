<template>
<div class="container h-100">
<div class="row">
<h2 class="bg-dark bg-black fw-bolder p-4">Certificates</h2>
<CertComp/>
</div>
</div>
</template>

<script>

import certCompVue from '@/components/certComp.vue'
import CertComp from '@/components/certComp.vue'

export default {
    // name: 'ProjectsView',
    components: { certCompVue, CertComp }
}

</script>

<style>

</style>