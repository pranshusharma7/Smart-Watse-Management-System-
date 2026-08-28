// ===================== SAFE UTILITY =====================
function safe(fn) {
  try { fn(); } catch(e) { console.error("Script error:", e); }
}

// ===================== BIN MONITORING =====================
function updateBinStatus(binId, fill) {
  safe(() => {
    const bin = document.getElementById(binId);
    if (!bin) return;

    const statusEl = bin.querySelector(".status");
    const fillEl = bin.querySelector(".fill-level");
    const progressEl = bin.querySelector(".progress-fill");
    const timeEl = bin.querySelector(".last-updated");

    if (fillEl) fillEl.textContent = fill + "%";
    if (progressEl) progressEl.style.width = fill + "%";

    if (statusEl) {
      statusEl.className = "status";
      if (fill < 40) { statusEl.textContent = "Empty / Low"; statusEl.classList.add("green"); }
      else if (fill < 70) { statusEl.textContent = "Half-filled"; statusEl.classList.add("yellow"); }
      else { statusEl.textContent = "Full / Critical"; statusEl.classList.add("red"); }
    }

    if (timeEl) timeEl.textContent = "Last updated: " + new Date().toLocaleTimeString();
  });
}

// Simulate live bin updates
setInterval(() => {
  updateBinStatus("bin1", Math.floor(Math.random() * 100));
  updateBinStatus("bin2", Math.floor(Math.random() * 100));
  updateBinStatus("bin3", Math.floor(Math.random() * 100));
}, 4000);



// ===================== NOTIFICATIONS =====================
safe(() => {
  const clearAlertsBtn = document.getElementById("clearAlerts");
  const alertsList = document.getElementById("alertsList");
  const notificationCount = document.getElementById("notificationCount");

  if (clearAlertsBtn) {
    clearAlertsBtn.addEventListener("click", () => {
      if (alertsList) alertsList.innerHTML = "<p>No recent alerts 🎉</p>";
      if (notificationCount) notificationCount.textContent = "0";
    });
  }
});

// ===================== ANALYTICS CHART =====================
let analyticsChart = null;
safe(() => {
  const ctx = document.getElementById("analyticsChart");
  if (!ctx) return;
  analyticsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      datasets:[{
        label:"Waste Collected (kg)",
        data:[120,150,180,90,200,250,300],
        borderColor:"#4cafef",
        backgroundColor:"rgba(76,175,239,0.3)",
        fill:true,
        tension:0.3
      }]
    },
    options:{ responsive:true, plugins:{ legend:{display:true} } }
  });
});

function updateAnalytics(period){
  safe(() => {
    if(!analyticsChart) return;
    let newLabels, newData;
    if(period==="week"){ newLabels=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]; newData=[120,150,180,90,200,250,300]; }
    else if(period==="month"){ newLabels=Array.from({length:30},(_,i)=>i+1); newData=Array.from({length:30},()=>Math.floor(Math.random()*300+50)); }
    else { newLabels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; newData=[1500,1800,3000,2100,2500,2700,2000,3000,3200,2800,3500,2900]; }

    analyticsChart.data.labels = newLabels;
    analyticsChart.data.datasets[0].data = newData;
    analyticsChart.update();
  });
}

safe(() => {
  const weekBtn = document.getElementById("weekBtn");
  const monthBtn = document.getElementById("monthBtn");
  const yearBtn = document.getElementById("yearBtn");
  if(weekBtn) weekBtn.addEventListener("click",()=>updateAnalytics("week"));
  if(monthBtn) monthBtn.addEventListener("click",()=>updateAnalytics("month"));
  if(yearBtn) yearBtn.addEventListener("click",()=>updateAnalytics("year"));
});

// ===================== AI WASTE PREDICTOR =====================
let wasteRadar = null, wasteClass = null;
safe(() => {
  // Charts
  const radarCtx = document.getElementById("wasteChart");
  if(radarCtx) wasteRadar=new Chart(radarCtx,{type:"radar",data:{labels:["Weight","Smell","Color","Bin Type"],datasets:[{label:"Waste Metrics",data:[0,0,0,0],backgroundColor:"rgba(76,175,239,0.3)",borderColor:"#4cafef",pointBackgroundColor:"#4cafef"}]}});
  
  const classCtx = document.getElementById("wasteClassChart");
  if(classCtx) wasteClass=new Chart(classCtx,{type:"bar",data:{labels:["Dry","Wet","Recycle"],datasets:[{label:"Bin Counts",data:[5,8,3],backgroundColor:["#ffc107","#4caf50","#2196f3"]}]}});

  // Predictor
  const predictBtn = document.getElementById("predictBtn");
  const predictionResult = document.getElementById("predictionResult");
  const statusBadge = document.getElementById("statusBadge");

  if(predictBtn){
    predictBtn.addEventListener("click",()=>{
      const weight=parseFloat(document.getElementById("weight")?.value)||0;
      const smell=parseFloat(document.getElementById("smell")?.value)||0;
      const color=parseFloat(document.getElementById("color")?.value)||0;
      const binType=parseFloat(document.getElementById("binType")?.value)||0;

      const score=weight*0.4+smell*0.3+color*0.2+binType*5;
      let status="", badgeColor="";
      if(score>80){ status="Critical 🚨 - Immediate Action"; badgeColor="red"; }
      else if(score>50){ status="Warning ⚠️ - Monitor Closely"; badgeColor="orange"; }
      else { status="Normal ✅ - No Action Required"; badgeColor="green"; }

      if(predictionResult) predictionResult.textContent=`Prediction: ${status}`;
      if(statusBadge) statusBadge.innerHTML=`<span style="padding:6px 12px; background:${badgeColor}; color:white; border-radius:8px;">${status}</span>`;

      updateWasteCharts(weight,smell,color,binType);
    });
  }
});

function updateWasteCharts(weight,smell,color,binType){
  safe(()=>{
    if(wasteRadar){ wasteRadar.data.datasets[0].data=[weight,smell,color,binType]; wasteRadar.update(); }
    if(wasteClass){ wasteClass.data.datasets[0].data=[Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)]; wasteClass.update(); }
  });
}

// ===================== FLEET LOCATION POPUP =====================
let fleetMapContainer=null,fleetMap=null,fleetMarker=null;
function createFleetMap(coords,truckId){
  safe(()=>{
    if(fleetMapContainer){ fleetMapContainer.remove(); fleetMapContainer=null; fleetMap=null; fleetMarker=null; }

    fleetMapContainer=document.createElement("div");
    fleetMapContainer.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;z-index:1000;border:3px solid #333;border-radius:10px;background:#fff;overflow:hidden;";
    document.body.appendChild(fleetMapContainer);

    const closeBtn=document.createElement("button");
    closeBtn.textContent="✖";
    closeBtn.style.cssText="position:absolute;top:5px;right:10px;z-index:1001;background:#f44336;color:#fff;border:none;padding:5px 10px;cursor:pointer;border-radius:5px;";
    closeBtn.addEventListener("click",()=>{ fleetMapContainer.remove(); fleetMapContainer=null; fleetMap=null; fleetMarker=null; });
    fleetMapContainer.appendChild(closeBtn);

    const innerMap=document.createElement("div");
    innerMap.id="fleetLeafletMap";
    innerMap.style.cssText="width:100%;height:100%;";
    fleetMapContainer.appendChild(innerMap);

    fleetMap=L.map("fleetLeafletMap").setView(coords,13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(fleetMap);
    fleetMarker=L.marker(coords).addTo(fleetMap).bindPopup(`Truck #${truckId} Location`).openPopup();
  });
}

safe(()=>{
  const truckLocations={103:[28.7041,77.1025],205:[28.4595,77.0266],118:[28.5355,77.3910]};
  document.querySelectorAll(".fleet-icon").forEach(icon=>{
    icon.style.cursor="pointer";
    icon.addEventListener("click",()=>{ 
      const truckId=icon.getAttribute("data-truck-id");
      const coords=truckLocations[truckId]||[28.6139,77.2090];
      createFleetMap(coords,truckId);
    });
  });
});

let points = 10; // starting points

function addPoints(value) {
  points += value;
  document.getElementById("points").innerText = points;
}

// Example: Add points when quiz is completed
// addPoints(20);
// Example: Deduct points for incorrect actions
// addPoints(-10);

// ===================== LEAFLET HEATMAP =====================
// -----------------------------
// HEATMAP INITIALIZATION
// -----------------------------
let heatmapMap = L.map('heatmap').setView([30.3165, 78.0322], 13); // Example: Dehradun center
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(heatmapMap);

// Heat layer placeholder
let heat;

// Example bin coordinates (aap real GPS ke sath replace kar sakte ho)
let binLocations = {
  "bin1": [30.3165, 78.0322], // Market Street
  "bin2": [30.3180, 78.0400], // University Road
  "bin3": [30.3140, 78.0280]  // Railway Station
};

// Function: Update Heatmap using bin fill levels
function updateHeatmap() {
  let data = [];

  Object.keys(binLocations).forEach(binId => {
    let binEl = document.getElementById(binId);
    if (binEl) {
      let fillEl = binEl.querySelector(".fill-level");
      if (fillEl) {
        let fillPercent = parseInt(fillEl.textContent.replace("%", ""));
        let intensity = fillPercent / 100; // Convert 0-100 → 0-1
        data.push([...binLocations[binId], intensity]);
      }
    }
  });

  if (heat) {
    heat.setLatLngs(data); // Update existing heatmap
  } else {
    heat = L.heatLayer(data, {
      radius: 25,
      blur: 15,
      maxZoom: 17
    }).addTo(heatmapMap);
  }
}

// Call once on page load
updateHeatmap();

// Example: Auto-refresh every 10s
setInterval(updateHeatmap, 10000);
// Call updateHeatmap() whenever bin fill levels change

// DARK MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  // Optionally save preference
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// On page load, set theme from localStorage
window.addEventListener('DOMContentLoaded', function() {
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// LOGOUT BUTTON
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', function() {
  if(confirm('Are you sure you want to logout?')) {
    // Clear session or localStorage if needed
    // localStorage.clear();
    window.location.href = 'index.html';
  }
});