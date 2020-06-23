<template>
  <header class="header">
    <img src="../assets/img/logo.png" alt="Trillo Logo" class="header__logo" />
    <form action="#" class="header__search">
      <input type="text" class="header__search-input" placeholder="Search Hotels" />
      <button class="header__search-button">
        <svg class="header__search-icon">
          <use xlink:href="../assets/img/sprite.svg#icon-magnifying-glass" />
        </svg>
      </button>
    </form>
    <nav class="header__user-nav">
      <div class="header__user-nav-icon-box">
        <svg class="header__user-nav-icon">
          <use xlink:href="../assets/img/sprite.svg#icon-bookmark" />
        </svg>
        <span class="header__user-nav-notification">7</span>
      </div>
      <div class="header__user-nav-icon-box">
        <svg class="header__user-nav-icon">
          <use xlink:href="../assets/img/sprite.svg#icon-chat" />
        </svg>
        <span class="header__user-nav-notification">13</span>
      </div>
      <div class="header__user-nav-user">
        <img src="../assets/img/user-6.jpg" alt="User Photo" class="header__user-nav-user-photo" />
        <span class="header__user-nav-user-name">Sally</span>
      </div>
    </nav>
  </header>
</template>