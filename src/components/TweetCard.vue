<template>
  <!-- Tweet cards list -->
  <div class="card-container">
    <div class="card-tweet">
      <div class="user-image-sm"></div>
      <div class="card-info">
        <div class="card-header">
          <div class="user-naming">
            <p class="user-name">Apple</p>
            <p class="user-handle">
              @applepen<span>・</span><span class="created-at">3 小時</span>
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="tweet-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum rutrum sodales. Nullam mattis fermentum
            libero, non volutpat.
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-section">
            <div class="footer-icon reply-icon"></div>
            <span class="counter reply-count">13</span>
          </div>
          <div class="icon-section">
            <div class="footer-icon like-icon"></div>
            <span class="counter like-count">76</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-tweet">
      <div class="user-image-sm"></div>
      <div class="card-info">
        <div class="card-header">
          <div class="user-naming">
            <p class="user-name">Apple</p>
            <p class="user-handle">
              @applepen<span>・</span><span class="created-at">3 小時</span>
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="tweet-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum rutrum sodales. Nullam mattis fermentum
            libero, non volutpat.
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-section">
            <div class="footer-icon reply-icon"></div>
            <span class="counter reply-count">13</span>
          </div>
          <div class="icon-section">
            <div class="footer-icon like-icon"></div>
            <span class="counter like-count">76</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-tweet">
      <div class="user-image-sm"></div>
      <div class="card-info">
        <div class="card-header">
          <div class="user-naming">
            <p class="user-name">Apple</p>
            <p class="user-handle">
              @applepen<span>・</span><span class="created-at">3 小時</span>
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="tweet-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum rutrum sodales. Nullam mattis fermentum
            libero, non volutpat.
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-section">
            <div class="footer-icon reply-icon"></div>
            <span class="counter reply-count">13</span>
          </div>
          <div class="icon-section">
            <div class="footer-icon like-icon"></div>
            <span class="counter like-count">76</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  data: {
    user: {
      id: 270,
      name: "user3",
      introduction: "hello,Nice to meet you",
      avatar: null,
      banner: null,
    },
    currentUser: {
      id: 272,
      account: "user5",
      name: "user5",
      email: "user5@example.com",
      avatar: null,
      introduction: null,
      banner: null,
      role: "user",
      createdAt: "2022-07-27T05:06:05.000Z",
      updatedAt: "2022-07-28T15:18:16.000Z",
      Followers: [],
      Followings: [],
    },
  },
};
export default {
  data() {
    return {
      currentUser: {},
      user: {
        id: 0,
        account: "",
        name: "",
        introduction: "",
        avatar: "",
        banner: "",
        tweetCount: 0,
        followingCount: 0,
        followerCount: 0,
        likeCount: 0,
        isFollowed: false,
      },
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.currentUser = dummyData.data.currentUser;
      this.user = dummyData.data.user;
    },
  },
};
</script>

<style scoped>
/* Tweet card */
.card-tweet {
  display: flex;
  border-bottom: 1px solid var(--page-divider);
  padding: 1rem;
}

.user-image-sm {
  padding: 1rem;
  margin-right: 0.5rem;
  background-image: url("./../assets/pictures/dummyUser.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.card-info {
  display: flex;
  flex-direction: column;
}

/* card header: user name, handle and creating tweet time */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
}

.user-naming {
  display: flex;
  column-gap: 0.5rem;
}

/* card footer: reply & like icons  */
.reply-icon {
  background-image: url("./../assets/pictures/reply.png");
}

.like-icon {
  background-image: url("./../assets/pictures/like.png");
}
</style>