<template>
  <div>
    <hr style="visibility:hidden;" />
    <hr style="visibility:hidden;" />

    <hr style="visibility:hidden;" />


    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 imgsize"
             src="../assets/car1.jpg" alt="image slot" > <h1 class="textright">Waschen mit Kopf</h1>

      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 imgsize"
             src="../assets/car1.jpg" alt="image slot"> <h1 class="textright">Waschen mit Kopf</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 imgsize"
             src="../assets/car1.jpg" alt="image slot"> <h1 class="textright">Waschen mit Kopf</h1>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 imgsize"
             src="../assets/car1.jpg" alt="image slot"> <h1 class="textright">Waschen mit Kopf</h1>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100 imgsize"
             src="../assets/car1.jpg" alt="image slot"> <h1 class="textright">Waschen mit Kopf</h1>
      </b-carousel-slide>

    </b-carousel>

  <hr/>
  <hr/>
  <hr/>

  <h1 style="text-align: center;">Da machen wir das</h1>

  <hr />
  <hr />

  <div class="media box1">
      <div >
        <img src="../assets/car1.jpg" style="width:30em;"/>
      </div>

      <div class="box2">
        <p >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo<br />
          duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        </p>
      </div>
  </div>

  <hr />
  <hr />

  <h1 style="text-align: center;">Da machen wir das</h1>

  <hr />
  <hr />


  <div class="media box1">
      <div >
        <img src="../assets/car1.jpg" style="width:30em;"/>
      </div>

      <div class="box2">
        <p >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo<br />
          duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        </p>
      </div>
  </div>

  <hr />
  <hr />

  <h1 style="text-align: center;">Da machen wir das</h1>

  <hr />
  <hr />


  <div class="media box1">
      <div >
        <img src="../assets/car1.jpg" style="width:30em;"/>
      </div>

      <div class="box2">
        <p >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo<br />
          duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        </p>
      </div>
  </div>

  <hr />
  <hr />

  <h1 style="text-align: center;">Da machen wir das</h1>

  <hr />
  <hr />


  <div class="media box1">
      <div >
        <img src="../assets/car1.jpg" style="width:30em;"/>
      </div>

      <div class="box2">
        <p >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <br />
          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo<br />
          duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        </p>
      </div>
  </div>

  <hr />
  <hr />




  </div>

</template>

<script>

export default {
  name: 'router',

  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
  }

</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: #111;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: -1px; line-height: 1;
  text-align: center;
}

.imgsize{
  width: 50em !important;
}

.textright{
  margin-bottom: 3em;
  margin-left: 19em;
}

hr{
  visibility: hidden;
}

.media {
  float: left;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  margin-left: 200px;
  margin-right: 200px;
}

.box1{
  margin-left: 6em;
}

.box2{
  margin-left: 2em;
}



</style>
