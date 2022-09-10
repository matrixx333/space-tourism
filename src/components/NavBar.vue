<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import IconCompass from './icons/IconCompass.vue'
</script>

<template>
<nav>
      <IconCompass />
      <ul>
        <li>
          <RouterLink to="/"><span>00</span> HOME</RouterLink>
        </li>
        <li>
          <RouterLink to="/destination"><span>01</span> DESTINATION</RouterLink>
        </li>
        <li>
          <RouterLink to="/crew"><span>02</span> CREW</RouterLink>
        </li>
        <li>
          <RouterLink to="/tech"><span>03</span> TECHNOLOGY</RouterLink>
        </li>
      </ul>
    </nav>
</template>


<style scoped>
    nav,
    ul,
    li {
        display: flex;
    }

    nav {
        margin-top: 40px;
    }

    nav>* {
        align-self: center;
    }

    svg {
        margin-left: 57px;
    }

    a,
    a:hover,
    a:visited {
        color: white;
        text-decoration: none;
    }

    nav {
        grid-area: header;
        grid-column: 1 / 3;
        justify-content: space-between;
        height: 76px;
    }

    ul {
        backdrop-filter: blur(20px);
        background-color: hsla(0, 0%, 100%, 0.03);
        padding-left: 6vw;
        list-style-type: none;
        gap: 25px;
    }

    li {
        font-size: 1.125em;
        height: 96px;
        align-items: center;
        flex-shrink: 0;
        padding: 0 5px;
    }

    /*  */
    li:hover {
        border-bottom: 2px solid white;
    }

</style>