<template>
  <div>
    <app-toolbar></app-toolbar>
    <jumbotron></jumbotron>
    <goal></goal>
    <challange></challange>
    <goal></goal>
    <cards></cards>
  </div>
</template>

<script>
import appToolbar from './appToolbar'
import jumbotron from './jumbotron'
import goal from './goal'
import challange from './challange'
import cards from './cards'

export default{
  components: {appToolbar, jumbotron, goal, challange, cards}
}
</script>
