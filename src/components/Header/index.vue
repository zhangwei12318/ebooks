<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>欢迎光临易书！</p>
          <p>
            <span>请</span>
            <router-link to="/login" class="login">登录</router-link>
            <router-link to="/register" class="register">注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">购物车</a>
          <a href="###">我的订单</a>
          <a href="###">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                我的账户<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                <el-dropdown-item command="a">我的收藏夹</el-dropdown-item>
                <el-dropdown-item command="b">我的书币</el-dropdown-item>
                <el-dropdown-item command="c">收货地址</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
          <a href="###">帮助中心</a>
          <a href="###">
             <el-dropdown>
              <span class="el-dropdown-link">
                关注易书<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <img src="./images/15726157957739.jpg" alt="" style="width:100px">
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <!-- <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="###" target="_blank">
           <img src="./images/logo.png" alt="" /> 
        </a>
      </h1> -->
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    //搜索按钮回调函数
    goSearch() {
      this.$router.push({
        name: "search",
        params: { keyword: this.keyword },
        query: { k: this.keyword.toUpperCase() },
      });
    },
    //我的账户回调
    handleCommand(command) {
      console.log(command);
    },
  },
};
</script>
 
<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 10px;
            margin-left: 10px;
            color: red;
          }
          .login {
            color: red;
            padding-left: 10px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 15px;
          span{
            font-size: 12px;
          }
        }
        
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>