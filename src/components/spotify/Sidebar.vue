<template>
  <div class="home">
    <div class="container-fluid display-table">
      <div class="row display-table-row">
        <div
          id="navigation"
          class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
        >
          <div class="logo">
            <router-link
              style="font-size: 4rem;"
              :to="{ name: 'Home' }"
              class="fab fa-spotify"
            />
          </div>
          <div class="navi">
            <ul>
              <li class="active">
                <a href="#"><i
                  class="fa fa-home"
                  aria-hidden="true"
                /><span class="hidden-xs hidden-sm">Home</span></a>
              </li>
              <li>
                <a href="#"><i
                  class="fa fa-tasks"
                  aria-hidden="true"
                /><span class="hidden-xs hidden-sm">Workflow</span></a>
              </li>
              <li>
                <a href="#"><i
                  class="fa fa-bar-chart"
                  aria-hidden="true"
                /><span class="hidden-xs hidden-sm">Statistics</span></a>
              </li>
              <li>
                <a href="#"><i
                  class="fa fa-user"
                  aria-hidden="true"
                /><span class="hidden-xs hidden-sm">Calender</span></a>
              </li>
              <li>
                <a href="#"><i
                  class="fa fa-calendar"
                  aria-hidden="true"
                /><span class="hidden-xs hidden-sm">Users</span></a>
              </li>
              <li>
                <a href="#"><i
                  class="fa fa-cog"
                  aria-hidden="true"
                /><span class="hidden-xs hidden-sm">Setting</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpotifySidebar'
}
</script>
<style>
a:focus,a:hover,a{
    outline:none;
    text-decoration: none;
}
li,ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

#navigation {
    background: #0A0B0A;
}

#navigation {
    padding: 0;
}

.search input {
    border: none;
    font-size: 15px;
    padding: 15px 9px;
    width: 100%;
    color: #8492af;
}

.logo {
    text-align: center;
}

.navi a {
    border-bottom: 1px solid #0A0B0A;
    border-top: 1px solid #0A0B0A;
    color: #ffffff;
    display: block;
    font-size: 17px;
    font-weight: 500;
    padding: 28px 20px;
    text-decoration: none;
}

.navi i {
    margin-right: 15px;
    color: #39EF0B;
}

.navi .active a {
    background: #0A0B0A;
    border-left: 5px solid #39EF0B;
    padding-left: 15px;
}

.navi a:hover {
    background: #122143 none repeat scroll 0 0;
    border-left: 5px solid #39EF0B;
    display: block;
    padding-left: 15px;
}
</style>
