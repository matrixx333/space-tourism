<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="content">
    <div class="space-content">
      <h2>SO, YOU WANT TO TRAVEL TO</h2>
      <H1>SPACE</H1>
      <p>Lets face it. If you want to to go space, you might as well genuinely go to outer space and not hover kind of
        on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
    </div>
    <div class="explore-content">
      <button>EXPLORE</button>
    </div>
  </div>
</template>

<style scoped>
.content {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: auto;
	grid-template-areas:  "space explore";
}

.space-content {
	font-size: 1.2em;
	grid-area: space;
	width: 350px;
	justify-self: center;
	align-self: center;
}

.space-content>* {
	margin-bottom: 30px;
}

.explore-content {
	grid-area: explore;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>