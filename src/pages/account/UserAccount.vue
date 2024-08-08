<template>
  <div>
    <base-card>
      <div class="account">
        <div><img :src="userImg" :alt="userName" /></div>
        <div class="user">
          <h3>Nazwa użytkownika: {{ userName }}</h3>
        </div>
      </div>
      <div class="manage">
        <!-- <ul>
          <li><router-link to="/edit_product">Edytuj produkty</router-link></li>
          <li><router-link to="/add_product">Dodaj produkty</router-link></li>
          <li class="last">
            <router-link to="/remove_product">Usuń produkty</router-link>
          </li>
        </ul> -->
      </div>
    </base-card>
  </div>
</template>

<script>
import user from "../../img/user.jpg";
export default {
  data() {
    return {
      userImg: user,
      userName: "user",
    };
  },
};
</script>

<style scoped>
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 16px;
  padding: 16px;
}

.account img {
  height: 80px;
  width: 80px;
  object-fit: contain;
}

.manage {
  padding: 0 45px 16px 16px;
}

.manage a {
  text-decoration: none;
  color: black;
}

.manage ul {
  list-style: none;
}

.manage li {
  border-top: 1px solid #474747;
  padding: 4px;
}

.last {
  border-bottom: 1px solid #474747;
}
</style>
