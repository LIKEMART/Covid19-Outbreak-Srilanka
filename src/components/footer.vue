<template>
    <div id="foot">
      <div class="container-fluid footer" id="footer">
          <div class="row" id="footer">
               
              <div class="col12 col-sm-12 col-md-12" id="footer">
              
                  <img src="https://hpb.health.gov.lk/assets/img/logo.png" id="footer" class="hpb" alt="">
              </div>
               <div class="col12 col-sm-12 col-md-12" id="footer">
                    Powered by API provided by HPB
                </div>
               <div class="col12 col-sm-12 col-md-12 sub" id="footer">
                   coded by Vihanga Nivarthana @ Likemart
               </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#foot{
    width:100%;
    height:40vh;
    margin-top:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.068);
}
#footer{
     display: flex;
    align-items: center;
    justify-content: center;
}

.footer{
    padding-top: 50px;
}
.sub{
    font-size:13px;
}

@media screen and (max-width: 720px){
.hpb{
    width:280px;
}
.footer{
    padding-top: 20px;
}
}
</style>