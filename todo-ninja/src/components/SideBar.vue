<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list>
            <v-list-item>
                <v-avatar>
                    <v-img src="../assets/profile.jpg" alt="Avatar"></v-img>
                </v-avatar>
                <v-list-item-title>Usman Danish</v-list-item-title>
                <v-list-item-subtitle>usmandanish@gmail.com</v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item 
            prepend-icon="mdi-image" 
            title="Color Gallery" 
            value="color"
            @click="selectOption(true)"/>
            <v-list-item 
            prepend-icon="mdi-dialpad" 
            title="Greyspace Gallery" 
            value="color"
            @click="selectOption(false)"/>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits('[selectOption]');
const selectOption = (isColor) =>{
    emits("selectOption" ,isColor)
}
</script>