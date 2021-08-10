<template>
  <div>
    <section class="py-5 text-center container">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light" v-text="post.title"></h1>
      </div>
    </section>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p v-text="post.excerpt"></p>
          <div v-html="post.body"></div>
          <hr />
          <h1>Otros Articulos</h1>
          <posts></posts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		props: ['slug'],
        data() {
            return {
                post: {}
            }
        },
        created () {
        	let url = 'http://vuejslaravel.test/api/post/'+this.slug
        	axios.get(url)
        	.then(response => {
        		this.post = response.data
        	})
        }
    }
</script>