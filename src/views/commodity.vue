<template lang="html">
  <div class="commodity">

    <div class="commodity-model" v-for='n in commoditys'>
        <div
        class="commodity-phote"
        :background="{ 'background-image': `url(${img})`}"
        alt=""
        />
        <div class="commodity-info">
          <span>珊瑚</span>
          <p>
            来着大海的珊瑚一定是你的最爱
          </p>
          <div class="commodity-foot">
            <span
            class="fa fa-close commodity-remove"
            @click='removeCommdity'>
            </span>
            <router-link to='/commodity-edit'>
              <span class="fa fa-gear commodity-setting"></span>
            </router-link>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
/*eslint-disable*/
import img from '../assets/logo.png'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      img: img,
      commoditys: [1, 2]
    }
  },

  mounted() {
    console.log(this.count)
  },

  computed: {
    ...mapGetters({
      count: 'counter/GET_COUNT'
    })
  },

  methods: {
    removeCommdity() {
      this.commoditys.shift()
    }
  }
}
</script>

<style lang="scss">
  .commodity {
    box-sizing: padding-box;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    .commodity-model {
       margin: 20px;
       display: flex;
       background: #fff;
       border-radius: 6px;

      .commodity-phote {
        flex: 2;
        border-radius: 6px 0px 0px 6px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('../assets/logo.png');
      }

      .commodity-info {
        flex: 9;
        padding: 20px 20px 10px 20px;
        display: flex;
        flex-direction: column;

        span {
          font-size: 1.6rem;
        }

        .commodity-foot {
          display: flex;
          align-self: flex-end;

          span {
            color: #a4a4a4;
            cursor: pointer;
          }

          .commodity-remove {

          }
          .commodity-setting {
            margin-left: 10px;
          }
          .commodity-date {
          }
        }
      }
    }
  }
</style>
