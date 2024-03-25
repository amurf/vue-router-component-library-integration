<template>
  <section>
    <header>
      <nav>
        <!-- This will break in the test suite -->
        <MpButton text="This will break in the tests"
          to="/about" />

        <!-- These are fine -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about"
          id="about">About</RouterLink>
      </nav>
    </header>
    <RouterView />
  </section>
</template>