<template>
    <div>
        <footer class="bg-regal-green text-white text-base  ">
        <div class="grid grid-cols-12">
          <div class="col-span-3 mt-5 mx-auto">Belum Bergabung? <br> <router-link to="login"><button class="bg-white text-black mt-5 px-12 py-1 rounded-lg">Login?</button></router-link> </div>
          <div class="col-span-3 mx-auto">
              <ul>
                <li class="mt-5"><a href="#">Beranda</a></li>
                <li class="mt-5"><a href="#">Mengapa Kami</a></li>
                <li class="mt-5"><a href="#">Fitur Kami</a></li>
                <li class="mt-5"><a href="#">Cara Penggunaan</a></li>
              </ul>
              
          </div>
          

        </div>

        <div class="mx-auto mt-12 pb-12">
          <div class="grid grid-cols-12">
              <div class="col-span-3 mx-auto flex">
                <p>Terms & Conditions</p> 
                <p class="ml-2">Privacy Policy</p>
              </div>
          </div>
         
        </div>
      </footer>
    </div>
</template>