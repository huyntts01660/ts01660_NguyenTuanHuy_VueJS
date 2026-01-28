<template>
    <div>
        <input type="number" v-model="year" placeholder="nhập năm sinh">
        <div>
            <button @click="calcu">Tính tuổi</button>
        </div>
    </div>
    <p>tuổi : {{ age }}</p>
    <p>năm sinh của bạn : {{ year }}</p>
    <p v-if="age>15 && age <18">phân loại: Thiếu niên</p>
    <p v-else-if="age >= 18 && age < 50">phân loại: Thanh niên</p>
    <p v-else-if="age >51"> phân loại: Người lớn tuổi</p>
    <p v-else> Phân loại : chưa thành niên</p>
</template>
<script setup>
import {ref} from 'vue';
const year = ref (0);
const age = ref (0);
const calcu = () =>{
    const currentYear = new Date().getFullYear();
    age.value = currentYear - year.value;
}
</script>
<style>
    
</style>
