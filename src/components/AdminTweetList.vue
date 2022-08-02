<template>
  <div>
    <div class="card-container">
      <h4>推文清單</h4>
      <div v-for="tweet in tweets" :key="tweet.id" class="card-tweet">
        <div class="user-image-sm"></div>
        <div class="card-info">
          <div class="card-header">
            <div class="user-naming">
              <p class="user-name">{{ tweet.User.name }}</p>
              <p class="user-handle">
                @{{ tweet.User.account }}<span>・</span
                ><span class="created-at">{{ tweet.createdAt | fromNow }}</span>
              </p>
            </div>
          </div>
          <div class="card-body">
            <p class="tweet-content">
              {{ tweet.description }}
            </p>
          </div>
        </div>
        <button 
        @click="deleteTweet(tweet.id)"
        class="delete-tweet">
          <img class="card-delete" src="../assets/pictures/cancel.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  data: {
    tweets: [
      {
        id: 11,
        description: "Assumenda asperiores et blanditiis. Laborum recusa",
        createdAt: "2022-07-30T07:27:36.000Z",
        updatedAt: "2022-07-30T07:27:36.000Z",
        UserId: 2,
        User: {
          name: "user1",
          account: "user1",
          avatar: null,
        },
      },
      {
        id: 12,
        description: "Aut architecto numquam aspernatur officia aspernat",
        createdAt: "2022-07-30T07:27:36.000Z",
        updatedAt: "2022-07-30T07:27:36.000Z",
        UserId: 2,
        User: {
          name: "user2",
          account: "user2",
          avatar: null,
        },
      },
      {
        id: 13,
        description: "Sed ut perspiciatis unde omnis iste natus error si",
        createdAt: "2022-07-30T07:27:36.000Z",
        updatedAt: "2022-07-30T07:27:36.000Z",
        UserId: 2,
        User: {
          name: "user3",
          account: "user3",
          avatar: null,
        },
      },
    ],
  },
};
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  name: "AdminTweetList",
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData.data.tweets;
    },
    deleteTweet(tweetId) {
      this.tweets = this.tweets.filter(tweet => tweet.id !== tweetId );
    }
  },
};
</script>

<style scoped>
h4 {
  padding: 1.5rem 0 1.5rem 1.25rem;
  font-weight: 700;
  line-height: 26px;
  border-bottom: 1px solid var(--page-divider);
}

.tweet-content {
  line-height: 1.625rem;
  color: var(--dark-100);
}

/* Tweet card */
.card-tweet {
  display: flex;
  position: relative;
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
  padding-bottom: 0.625rem;
}

.card-delete {
  position: absolute;
  top: 21px;
  right: 4.6px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.user-naming {
  display: flex;
  column-gap: 0.5rem;
}

.user-name {
  color: var(--dark-100);
}

.user-handle {
  line-height: 1.375rem;
  font-weight: 400;
  color: var(--secondary-color);
}

.counter {
  color: var(--secondary-color);
  font-size: 0.875rem;
  font-weight: 600;
}
/* 清除 button 預設樣式 */
button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
</style>