<template>
  <section>
      
      <div class="container"> 

         <span id="hd">ශ්‍රී ලංකාවේ රෝහල්වල තොරතුරු</span> 
           <div class="row" id="hosd">
           <div class="col-12 col-xs-12 col-sm-6 col-md-4" v-for="hospital in data" :key="hospital.id">
               
                 <div id="card" class="infected">
            <div id="content">
             <span class="h_title">
                  {{hospital.hospital.name_si}}
                 </span> 
<br>
                 <span id="admited">

               ‍රෝහල් ගතවූ මුලු ශ්‍රී ලාංකිකයින් ගණන <br> 
               <span id="number">{{hospital.cumulative_local}}</span>
               </span>

                <span id="admited">

              රෝහල් ගතවූ මුලු විදේශිකයින් ගණන<br> 
               <span id="number">{{hospital.cumulative_foreign}}</span>
               </span>

               <span id="admited">

               ‍‍ප්‍රතිකාර ලබන මුලු ශ්‍රී ලාංකිකයින් ගණන <br> 
               <span id="number">{{hospital.treatment_local}}</span>
               </span>

               <span id="admited">

              ප්‍රතිකාර ලබන මුලු විදේශිකයින් ගණන<br> 
               <span id="number">{{hospital.treatment_foreign}}</span>
               </span>
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
      data:null
    };
  },

  methods: {
    getApires() {
      this.axios
        .get("https://hpb.health.gov.lk/api/get-current-statistical")
        .then(response => {
         this.data = response.data.data.hospital_data;
         console.log(this.data);
        })
    },
 

    local() {

      
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

 section{
     
  
     margin-top:30px;
 }

#hosd{
    margin-top:70px;
}
 #card {
  width: 100%;

  height: 520px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
}

.infected {
  background-color: #0984e3;
}
#hd{
  text-align: center;
    font-size: 30px;
    color: #4e4d4d;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top:40px ;
    margin-bottom: 30px;

}

.h_title{
    color:#ffffff;
    font-size:20px;
    padding-top: 30px;
    font-weight: 600;
    display: block;
    text-align: center;
}

#admited{
    text-align: center;
    display: block;
    font-size:17px;
    color:#fff;
    margin-top:30px;
}

#number{
    margin-top:10px;
    text-align:center;
    background:#fff;
    color: #4e4d4d;
    border-radius: 40px;
    width: 100px;
    padding:5px;
    display: inline-block;
}


</style>