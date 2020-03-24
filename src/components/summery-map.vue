<template>
    <section>
      
           <div class="container">
               <div class="row">
                   <div class="col-12 col-md-6">
<iframe src="https://www.google.com/maps/d/embed?mid=1UPMGC3gKiJTlSPusbfnW3XcECxyLv8f1">
        </iframe>
    
                   </div>
                   <div class="col-12 col-md-6" id="tweet">

    <twitter style="height:100vh">
    <div slot="loading">loading .....</div>
   <a class="twitter-timeline" data-lang="en" data-width="100%" data-height="100vh" data-dnt="true" data-theme="dark" href="https://twitter.com/OPENMIC24x7?ref_src=twsrc%5Etfw">Tweets by OPENMIC24x7</a>
  </twitter>

                   </div>


                  
               </div>
           </div>

          
        
       <footerbar></footerbar>
    </section>
</template>

<script>
import footerbar from '../components/footer'
export default {

     components: {
   
    footerbar,

   
  },
    
}
</script>

<style scoped>
section{
    height:100vh;
    margin-top:100px;
}
iframe{
    width:100%;
    height:100vh;
  border:none;
}
#tweet{
    /* overflow-y:scroll; overflow-x:hidden; */
}

</style>