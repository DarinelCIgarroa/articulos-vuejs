<template>
  <div>
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">SPA Y COMPONENTES</h4>
              <p class="text-muted">
                Curso básico para entender la tecnología VUEJS
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Navegación</h4>
              <ul class="list-unstyled">
                <!-- menu -->
                <li>
                  <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'blog' }">Blog</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">

          <router-link :to="{name: 'home'}" class="navbar-brand d-flex align-items-center">
            <strong>Darinel Cigarroa</strong>
          </router-link> 
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>

    <transition name="slide-fade" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>