<template>
    <LogoutIcon />
    <CandidateForm />
</template>

<script>
import CandidateForm from '@/components/CandidateForm.vue';
import LogoutIcon from '@/components/LogoutIcon.vue';

export default {
    name: 'FormView',
    components: {
        CandidateForm,
        LogoutIcon
    }
    
}
</script>

<style scoped>

</style>