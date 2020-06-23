<template>
  <nav class="sidebar">
    <ul class="sidebar-side-nav">
      <li class="sidebar-side-nav__item sidebar-side-nav__item--active">
        <router-link to="/" class="sidebar-side-nav__link">
          <svg class="sidebar-side-nav__icon">
            <use xlink:href="../assets/img/sprite.svg#icon-home" />
          </svg>
          <span>Hotel</span>
        </router-link>
      </li>
      <li class="sidebar-side-nav__item">
        <router-link to="/" class="sidebar-side-nav__link">
          <svg class="sidebar-side-nav__icon">
            <use xlink:href="../assets/img/sprite.svg#icon-aircraft-take-off" />
          </svg>
          <span>Flight</span>
        </router-link>
      </li>
      <li class="sidebar-side-nav__item">
        <router-link to="/" class="sidebar-side-nav__link">
          <svg class="sidebar-side-nav__icon">
            <use xlink:href="../assets/img/sprite.svg#icon-key" />
          </svg>
          <span>Car Rental</span>
        </router-link>
      </li>
      <li class="sidebar-side-nav__item">
        <router-link to="/" class="sidebar-side-nav__link">
          <svg class="sidebar-side-nav__icon">
            <use xlink:href="../assets/img/sprite.svg#icon-map" />
          </svg>
          <span>Tours</span>
        </router-link>
      </li>
    </ul>
    <div class="sidebar-legal">&copy; 2020 by trillo. All rights reserved</div>
  </nav>
</template>