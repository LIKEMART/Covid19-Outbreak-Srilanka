<template>
  <section id="summery">
    <br />
    <div class="container mx-auto">
      <div class="row" id="title-summery">
        <div class="main_title text-center">
          වර්තමාන තත්වය
          <br />

          <span id="la">Last update : {{ data.update_date_time }}</span>
        </div>

        <div id="switch">
          <span id="toggle">Srilanka</span>
          <v-switch v-model="switch1" inset></v-switch>
Global
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-4 col-lg-4">
          <div id="card" class="infected">
            <div id="content">
              <img src="../assets/corona.svg" alt id="title" />
              <br />
              <span class="new">නව ආසාදිතයන්</span>
              <span class="new-number">{{ new_infections}}</span>
              <span class="all">මුලු ආසාදිතයන්</span>
              <span class="all-number">{{total_infections}}</span>
            </div>
          </div>
        </div>

        <div class="col-12 col-xs-12 col-sm-4 col-lg-4">
          <div id="card" class="death">
            <div id="content">
              <img src="../assets/coroner.svg" alt id="title" />
              <br />
              <span class="new">මිය ගිය ගණන</span>
              <span class="new-number">{{new_deaths}}</span>
              <span class="all">මිය ගිය මුලු ගණන</span>
              <span class="all-number">{{total_deaths}}</span>
            </div>
          </div>
        </div>

        <div class="col-12 col-xs-12 col-sm-4 col-lg-4">
          <div id="card" class="recovered">
            <div id="content">
              <img src="../assets/recovered.svg" alt id="title" />
              <br />
              <span class="new">සුවය ලැබූවන්</span>
              <span class="new-number">{{total_recovered}}</span>


              
              <span class="all">දැනට රෝහල් ගත කර ඇති මුලු සංඛ්‍යාව</span>
              <span class="all-number">{{total_admited}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      switch1: false,
      data: null,

      new_infections: "",
      total_infections: "",

      new_deaths: "",
      total_deaths: "",

      total_recovered: "",

      total_admited: ""
    };
  },

  methods: {
    getApires() {
      this.axios
        .get("https://hpb.health.gov.lk/api/get-current-statistical")
        .then(response => {
          // console.log(response.data);
          this.data = response.data.data;
          console.log(this.data);
          this.new_infections = this.data.local_new_cases;
      this.total_infections = this.data.local_total_cases;
      this.new_deaths = this.data.local_new_deaths;
      this.total_deaths = this.data.local_deaths;
      this.total_recovered = this.data.local_recovered;
      this.total_admited = this.data.local_total_number_of_individuals_in_hospitals;
        })
    },
 

    local() {

      this.new_infections = this.data.local_new_cases;
      this.total_infections = this.data.local_total_cases;
      this.new_deaths = this.data.local_new_deaths;
      this.total_deaths = this.data.local_deaths;
      this.total_recovered = this.data.local_recovered;
      this.total_admited = this.data.local_total_number_of_individuals_in_hospitals;
    },
    global() {
      
      this.new_infections = this.data.global_new_cases;
      this.total_infections = this.data.global_total_cases;
      this.new_deaths = this.data.global_new_deaths;
      this.total_deaths = this.data.global_deaths;
      this.total_recovered = this.data.global_recovered;
       this.total_admited = "data not available"
      
    },
  },

    

  mounted() {
    this.getApires();
     
  },
  watch: {
      switch1(type){
          if(type==true){
              this.global();
          }
          else{
              this.local();
          }
        
      }
    },
}

</script>

<style scoped>
* {
  color: #4e4d4d;
}

.number {
  margin-top: 70px;
  font-size: 60px;
}
#summery {
  /* height: 100vh; */
  background: #fafbfb;
  /* display: flex;
    justify-content: center; */
}
.main_title {
  text-align: center;
  font-size: 30px;
  color: #4e4d4d;
  width: 100%;
}

#title-summery {
  margin-top: 70px;
}


#switch {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
}
#card {
  width: 100%;

  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
}

.infected {
  background-color: #ffa502;
}

.death {
  background-color: #ff4757;
}

.recovered {
  background-color: #2ed573;
}

#content {
  /* display: block; */
  text-align: center;
}

#title {
  width: 50px;
  margin-top: 40px;
}
.new {
  text-align: center;
  margin-top: 20px;
  display: block;
  color: #fff;
  font-weight: 400;
  font-size: 30px;
}

.new-number {
  text-align: center;
  margin-top: 20px;
  display: block;
  color: #fff;
  font-weight: 600;
  font-size: 30px;
}

.all {
  text-align: center;
  margin-top: 20px;
  display: block;
  color: #fff;
  font-weight: 400;
  font-size: 22px;
}

#toggle {
  padding: 10px;
  margin-left: 10px;
}

.all-number {
  text-align: center;
  margin-top: 20px;
  display: block;
  color: #fff;
  font-weight: 600;
  font-size: 30px;
}
#la {
  font-size: 17px;
}
</style>