<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|-->
      <router-link to="/decks">Home</router-link>|
      <router-link to="/flashcards">Flashcards</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, “Roboto”, “Oxygen”,
    “Ubuntu”, “Cantarell”, “Fira Sans”, “Droid Sans”, “Helvetica Neue”,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #333f48; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #333f48 0%,
    #2989d8 100%,
    #7db9e8 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #333f48 0%,
    #2989d8 100%,
    #7db9e8 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #333f48 0%,
    #2989d8 100%,
    #7db9e8 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333f48', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
  background-repeat: no-repeat;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (max-width: 500px) {
  body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
