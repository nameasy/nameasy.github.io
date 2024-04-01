import"./projects-BZa-CiKp.js";import"./related-DxiG54xw.js";const w=(e,t)=>{let s;return(...r)=>{clearTimeout(s),s=setTimeout(()=>{e.apply(void 0,r)},t)}},y={WATCHLIST:"watchlist",STATS:"stats"},d="view",g=250;let o=document.querySelector("body"),c,h,m,l=new URLSearchParams(window.location.search);const f=(e,t)=>{for(const s of t){const r=s.id===e;s.hidden=!r;const n=c.querySelector(`[value="${s.id}"]`);n&&(n.checked=r)}},p=e=>{l.set(d,e);const t=`${window.location.pathname}?${l.toString()}${window.location.hash}`;history.replaceState(null,null,t)},S=()=>{const e=window.location.hash;if(e){const t=document.querySelector(e);t&&t.scrollIntoView()}},b=e=>{const t=e.target.value;t&&(f(t,h),p(t))},v=()=>{o&&(c=o.querySelector(".section__filter"),h=o.querySelectorAll(".section__item"),m=l.get(d)||y.WATCHLIST,f(m,h),S(),c.addEventListener("change",w(b,g)))},E=Vue.createApp({data(){return{anime:[],histogram:{},columns:[],uniqueYears:[],max:0,earlyAnimes:[],earlyCount:0,earlyPercentage:0}},async mounted(){try{const e=await fetch("./data/anime.json");if(!e.ok)throw new Error("Не удалось получить данные");const t=await e.json();this.anime=t,this.initializeData(),this.calculateHistogram(),this.earlyAnimes=this.anime.filter(s=>!s.date),this.earlyCount=this.earlyAnimes.length,this.earlyPercentage=this.earlyCount/this.max*100,this.createChart(),this.observeStatsWidth()}catch(e){console.error(e)}},beforeUnmount(){window.removeEventListener("resize",this.updateWidth)},methods:{initializeData(){const e=this.anime.map(t=>t.date?t.date.substring(0,4):"early");this.uniqueYears=[...new Set(e)],this.uniqueYears.sort().reverse()},calculateHistogram(){this.anime.forEach(e=>{var s;const t=(s=e.date)==null?void 0:s.substring(0,7);this.histogram[t]=(this.histogram[t]||0)+1}),this.max=Math.max(...Object.values(this.histogram))},createChart(){for(const e of this.uniqueYears)for(let t=1;t<=12;t++){const s=`${e}-${t.toString().padStart(2,"0")}`,r=this.histogram[s]||0;if(r!==0){const n=r/this.max*100,a=this.getMonthName(t);this.columns.push({year:e,month:t,value:r,percentage:n,date:a})}}},getMonthName(e){return["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][e-1]},filterTitlesByYearMonth(e,t){return this.anime.filter(s=>{var a,i;const r=parseInt((a=s.date)==null?void 0:a.substring(0,4)),n=parseInt((i=s.date)==null?void 0:i.substring(5,7));return r===parseInt(e)&&n===t})},hasTitles(e,t){return this.filterTitlesByYearMonth(e,t).length>0},filterColumnsByYear(e){return this.columns.filter(t=>t.year===e)},observeStatsWidth(){const e=()=>{const r=this.$refs.stats.querySelectorAll(".chart__month");let n=0;r.forEach(i=>{const u=i.offsetWidth;u>n&&(n=u)}),this.$refs.stats.style.setProperty("--width",`${n}px`)},t=new MutationObserver(r=>{for(let n of r)if(n.attributeName==="hidden"){e();break}}),s=this.$refs.stats;t.observe(s,{attributes:!0}),this.$nextTick(()=>{e(),window.addEventListener("resize",e)})}}});E.mount(".page");v();