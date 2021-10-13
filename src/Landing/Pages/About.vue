<template>
  <div class="container">
    <div class="top">
      <nav class="nav">
        <div class="nav-brand">
          IFEMAT
        </div>

        <div class="nav-links">
          <a href="#">About</a>
          <a href="#">Resources</a>
        </div>
      </nav>

      <div class="info">
        <div class="info-header">
          The Synthesis Project
        </div>

        <div class="info-subheader">
          Simplifying material synthesis visualisation
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.container {
}
.top {
  min-height: 100vh;
  background: url("../../assets/top-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 45px;
}
.nav-brand {
  /* margin-left: 200px; */
  width: 97px;
  height: 32px;
  font-weight: bold;
  font-family: Gilroy-Heavy;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.105em;

  /* White */
  color: #ffffff;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
}
.nav-links a {
  height: 21px;
  color: white;
  font-family: Gibson;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 105%;

  /* identical to box height, or 21px */
  letter-spacing: 0.085em;
  text-decoration: none;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 1007.63px; */
  height: 326px;
  margin-top: 90px;
  flex-direction: column;
}

.info-header {
  width: 1007.63px;
  height: 210px;
  margin-bottom: 40px;
  font-family: Gibson;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 105%;

  /* or 105px */
  text-align: center;
  letter-spacing: 0.085em;

  color: #ffffff;
}

.info-subheader {
  width: 469.04px;
  height: 76px;

  font-family: Gibson;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 126%;

  /* or 38px */
  text-align: center;
  letter-spacing: 0.1em;

  color: #ffffff;
}
</style>
