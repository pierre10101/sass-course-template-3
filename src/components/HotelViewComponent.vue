<template>
  <main class="hotel-view">
    <div class="gallery">
      <figure class="gallery__item">
        <img src="../assets/img/hotel-1.jpg" alt="Hotel Photo" class="gallery__photo" />
      </figure>
      <figure class="gallery__item">
        <img src="../assets/img/hotel-2.jpg" alt="Hotel Photo" class="gallery__photo" />
      </figure>
      <figure class="gallery__item">
        <img src="../assets/img/hotel-3.jpg" alt="Hotel Photo" class="gallery__photo" />
      </figure>
    </div>

    <div class="overview">
      <h1 class="overview__heading">Hotel Law Palmas</h1>
      <div class="overview__stars">
        <svg class="overview__icon-star">
          <use xlink:href="../assets/img/sprite.svg#icon-star" />
        </svg>
        <svg class="overview__icon-star">
          <use xlink:href="../assets/img/sprite.svg#icon-star" />
        </svg>
        <svg class="overview__icon-star">
          <use xlink:href="../assets/img/sprite.svg#icon-star" />
        </svg>
        <svg class="overview__icon-star">
          <use xlink:href="../assets/img/sprite.svg#icon-star" />
        </svg>
        <svg class="overview__icon-star">
          <use xlink:href="../assets/img/sprite.svg#icon-star" />
        </svg>
      </div>
      <div class="overview__location"></div>
      <svg class="overview__icon-location">
        <use xlink:href="../assets/img/sprite.svg#icon-location-pin" />
      </svg>
      <button class="btn-inline">Albufeira, Portugal</button>
      <div class="overview__rating">
        <div class="overview__rating-average">8.6</div>
        <div class="overview__rating-count">429 votes</div>
      </div>
    </div>

    <div class="detail">
      <div class="detail__description">
        <p
          class="detail__paragraph"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quas culpa, sed laudantium iure blanditiis eaque quos corporis quam. Nostrum perferendis quod nam ea, laborum rem tenetur obcaecati perspiciatis vel.</p>
        <p
          class="detail__paragraph"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nesciunt magnam placeat dolorum laborum cupiditate quibusdam, fuga suscipit aut molestias delectus ex quam. Corrupti iste vero sed, magni repellat expedita.</p>
        <ul class="detail__list">
          <li class="detail__list__item">Close to the beach</li>
          <li class="detail__list__item">Breakfast included</li>
          <li class="detail__list__item">Free airport shuttle</li>
          <li class="detail__list__item">Free wifi in all rooms</li>
          <li class="detail__list__item">Air conditioning and heating</li>
          <li class="detail__list__item">Pets allowed</li>
          <li class="detail__list__item">We speak all languages</li>
          <li class="detail__list__item">Perfect for families</li>
        </ul>
        <div class="detail__recommend">
          <p class="detail__recommend__count">Lucy and 3 other friends recommend this hotel.</p>
          <div class="detail__recommend__friends">
            <img
              src="../assets/img/user-3.jpg"
              alt="User Recommended hotel"
              class="detail__recommend__photo"
            />
            <img
              src="../assets/img/user-4.jpg"
              alt="User Recommended hotel"
              class="detail__recommend__photo"
            />
            <img
              src="../assets/img/user-5.jpg"
              alt="User Recommended hotel"
              class="detail__recommend__photo"
            />
            <img
              src="../assets/img/user-6.jpg"
              alt="User Recommended hotel"
              class="detail__recommend__photo"
            />
          </div>
        </div>
      </div>
      <div class="detail__user-reviews">
        <figure class="review">
          <blockquote
            class="review__text"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quo enim nostrum culpa officia reprehenderit ratione ad eos hic neque dolore provident, aperiam iste quod, commodi et magni iusto voluptas?</blockquote>
          <figcaption class="review__user">
            <img src="../assets/img/user-1.jpg" alt=" Review User" class="review__photo" />
            <div class="review__user__box">
              <p class="review__user__box__name">Nick Smith</p>
              <p class="review__user__box__date">Feb 23rd, 2017</p>
            </div>
            <div class="review__user__rating">7.8</div>
          </figcaption>
        </figure>
        <figure class="review">
          <blockquote
            class="review__text"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quo enim nostrum culpa officia reprehenderit ratione ad eos hic neque dolore provident, aperiam iste quod, commodi et magni iusto voluptas?</blockquote>
          <figcaption class="review__user">
            <img src="../assets/img/user-2.jpg" alt=" Review User" class="review__photo" />
            <div class="review__user__box">
              <p class="review__user__box__name">Mary Thomas</p>
              <p class="review__user__box__date">March 23rd, 2020</p>
            </div>
            <div class="review__user__rating">6.8</div>
          </figcaption>
        </figure>

        <button class="btn-inline">
          Show All
          <span>&rarr;</span>
        </button>
      </div>
    </div>
    <div class="cta">
      <h2 class="cta__book-now">Good news! We have 4 free rooms for your selected dates!</h2>
      <button class="btn">
        <span class="btn__visible">Book now!</span>
        <span class="btn__invisible">Only 4 rooms left!</span>
      </button>
    </div>
  </main>
</template>