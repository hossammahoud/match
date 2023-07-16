<template>
  <div class="mainHeader">
    <div class="image">
      <div class="minHeaderOverlay">
        <div class="content">
          <h1>Feature Showcase</h1>
          <p class="title-description">
            Explore the features we provide in our SaaS product.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.mainHeader {
  .image {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    .minHeaderOverlay {
      //   background-color: #00000094 !important;
      height: 100%;
      color: #fff;
      position: relative;
      .container {
        position: relative;
        height: -webkit-fill-available;
      }
      .content {
        position: absolute;
        margin: 30px;
        width: -webkit-fill-available;
        font-size: 60px;
        font-family: Inter;
        font-weight: 700;
        line-height: 70px;
        color: #11369c;
        bottom: 3%;
        .title-description {
          font-size: 16px;
          color: #455a64;
        }
      }
    }
  }
}
</style>
