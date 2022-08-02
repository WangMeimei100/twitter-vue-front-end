<template>
  <div>
    <h4>使用者列表</h4>
    <div class="user-list">
      <div class="card" v-for="user in users" :key="user.id">
        <div class="bg position-relative">
          <img
            :src="require('../assets/pictures/dummy-bg.png')"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="person-img">
          <img
            class="avatar-img rounded-circle position-absolute"
            :src="user.image | emptyImage"
          />
        </div>
        <div class="user-information">
          <h5 class="user-name">{{ user.name }}</h5>
          <span class="card-text">@ {{ user.account }}</span>

          <!-- 推文區、按讚區 -->
            <div class="icon-section me-3">
              <div class="footer-icon tweets-icon"></div>
              <span class="counter tweets-count">13</span>
            
              <div class="footer-icon like-icon"></div>
              <span class="counter like-count">76</span>
            </div>

          <!-- 追蹤者區 -->
          <span class="card-text me-4">
            <span class="num">{{ user.followingCounts }}個</span>跟隨中
          </span>
          <span class="card-text">
            <span class="num">{{ user.followerCounts }}位</span>追隨者
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  users: [
    {
      id: 2,
      account: "user1",
      name: "user1",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 2,
      account: "user1",
      name: "user1",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 2,
      account: "user1",
      name: "user1",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 2,
      account: "user1",
      name: "user1",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 2,
      account: "user1",
      name: "user1",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 2,
      account: "user1",
      name: "user1",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
    {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: null,
      role: "user",
      tweetCounts: 10,
      likeCounts: 0,
      followingCounts: 0,
      followerCounts: 0,
    },
  ],
};
export default {
  mixins: [emptyImageFilter],
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUserList();
  },
  methods: {
    fetchUserList() {
      this.users = dummyData.users;
    },
  },
};
</script>

<style scoped>
.icon-section {
  justify-content: center;
  margin-top: 1rem;
}
.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 75px;
  padding: 8px 0;
  width: 100%;
  height: calc(100vh - 75px);
  overflow-y: scroll;
  overflow-x: hidden;
}
.card {
  width: 235px;
  height: 314px;
  border-radius: 10px;
  background-color: #f6f7f8;
  position: relative;
  margin: 8px;
}
.bg {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.avatar-img {
  height: 100px;
  width: 100px;
  top: 20%;
  left: calc(50% - 50px);
  background-color: #ffffff;
  border: 4px solid #ffffff;
}
.user-information {
  position: absolute;
  text-align: center;
  top: calc(140px + 25px);
  flex-direction: column;
  border: 0;
  width: 100%;
  height: 174px;
  padding-top: 10px;
}
/* card footer: tweets & like icons  */
.tweets-icon {
  background-image: url("./../assets/pictures/tweets.png");
}

.like-icon {
  background-image: url("./../assets/pictures/like.png");
}
span.card-text {
  color: var(--secondary-color);
}
span.num {
  color: initial;
}
</style>

