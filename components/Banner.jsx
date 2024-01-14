import React from 'react'

const Banner = () => {
    return (
        
<section class="relative">
 
  <div class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
  
    <div class="mx-auto w-full max-w-3xl text-center">
      <p class="uppercase text-[#1353fe]">3 easy steps</p>
      <h2 class="text-3xl font-semibold md:text-5xl">How it <span class="bg-cover bg-center px-4 text-white" style="background-image: url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg');">works</span>
      </h2>
      <p class="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
    </div>
   
    <div class="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
     
      <div class="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div class="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p class="text-xl font-bold md:text-2xl">1</p>
        </div>
        <p class="text-xl font-semibold">Find Component</p>
        <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
      </div>
      
      <div class="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div class="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p class="text-xl font-bold md:text-2xl">2</p>
        </div>
        <p class="text-xl font-semibold">Copy and Paste</p>
        <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
      </div>
    
      <div class="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div class="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p class="text-xl font-bold md:text-2xl">3</p>
        </div>
        <p class="text-xl font-semibold">Done</p>
        <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
      </div>
    </div>
  </div>
  
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639832e3e7aba393eeeba215_plain6.svg" alt="" class="absolute bottom-auto left-0 right-auto top-0 inline-block sm:bottom-auto sm:left-4 sm:right-auto sm:top-8 md:left-20 md:top-16" />
</section>
    )
}

export default Banner
