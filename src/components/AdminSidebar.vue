<template>
  <nav class="nav">
    <div class="nav-top">
      <div class="nav-logo"></div>
      <ul class="nav-list">
        <li class="nav-item">
            <router-link to="/admin/tweets" :class="['nav-link', { active: inTweetList === 'admin-tweets' }]">
            <div class="nav-icon home-icon"></div>
            <span class="nav-title">推文清單</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/users" :class="['nav-link', { active: inUserList === 'admin-users' }]">
            <div class="nav-icon person-icon"></div>
            <span class="nav-title">使用者列表</span>
          </router-link>
        </li>    
      </ul>      
    </div>
    <div class="nav-bottom">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <div class="nav-icon quit-icon"></div>
            <span class="nav-title">登出</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminSidebar",
  data () {
    return {
      inTweetList: this.$route.name === "admin-tweets",
      inUserList: this.$route.name === "admin-users"
    }
  },
};
</script>

<style scoped>
.nav {
  display: fixed;
  left: 0;
  top: 0;
}
.nav-logo {
  margin: 0.8125rem 0 0 0.8125rem;
  width: 40px;
  height: 40px;
  background-image: url("./../assets/pictures/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.home-icon {
  background-image: url("./../assets/pictures/home.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.nav-link {
  color: var(--dark-90);
}

.nav-link:hover .home-icon,
.nav-link.active .home-icon {
  background-image: url("./../assets/pictures/home-dark.png");
}

.person-icon {
  background-image: url("./../assets/pictures/person.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.nav-link:hover .person-icon,
.nav-link.active .person-icon {
  background-image: url("./../assets/pictures/person-dark.png");
}

.setting-icon {
  background-image: url("./../assets/pictures/setting.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.nav-link:hover .setting-icon,
.nav-link.active .setting-icon {
  background-image: url("./../assets/pictures/setting-dark.png");
}

.nav-bottom .nav-item {
  margin-bottom: 0;
}

.add-tweet-btn {
  height: 2.875rem;
  padding: 0.5rem 1.5rem;
}

.quit-icon {
  background-image: url("./../assets/pictures/quit.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>