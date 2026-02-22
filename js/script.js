

const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const totalCountEl = document.getElementById("total");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const tabJobCountEl = document.getElementById("tabJobCount");

const jobContainer = document.getElementById("jobContainer");
let currentTab = "all";

let jobs = Array.from(jobContainer.children);

function updateDashboard() {
  const total = jobs.length;
  const interviewCount = jobs.filter(job => job.dataset.status === "interview").length;
  const rejectedCount = jobs.filter(job => job.dataset.status === "rejected").length;

  totalCountEl.innerText = total;
  interviewCountEl.innerText = interviewCount;
  rejectedCountEl.innerText = rejectedCount;

  let tabCount = currentTab === "all"
    ? total
    : jobs.filter(job => job.dataset.status === currentTab).length;

  tabJobCountEl.innerText = `Jobs: ${tabCount}`;
}

function showTab(tab) {
  currentTab = tab;

  jobs.forEach(job => {
    job.style.display =
      (tab === "all" || job.dataset.status === tab)
        ? "block"
        : "none";
  });

  const tabCount = jobs.filter(job =>
    tab === "all" || job.dataset.status === tab
  ).length;

  const existingMsg = document.getElementById("noJobsMessage");

  if (tabCount === 0) {
    if (!existingMsg) {
      const msg = document.createElement("p");
      msg.id = "noJobsMessage";
      msg.className = "text-center text-gray-400 mt-6";
      msg.innerHTML =
        `<i class="fa-regular fa-folder-open text-3xl mb-2"></i><br>No jobs available`;
      jobContainer.appendChild(msg);
    }
  } else {
    if (existingMsg) existingMsg.remove();
  }

  updateDashboard();
}

function setActiveTab(tab) {
  // Remove active style
  [allTab, interviewTab, rejectedTab].forEach(btn => {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });

  if (tab === "all") {
    allTab.classList.add("bg-blue-500", "text-white");
    allTab.classList.remove("bg-gray-200", "text-gray-700");
  } else if (tab === "interview") {
    interviewTab.classList.add("bg-blue-500", "text-white");
    interviewTab.classList.remove("bg-gray-200", "text-gray-700");
  } else {
    rejectedTab.classList.add("bg-blue-500", "text-white");
    rejectedTab.classList.remove("bg-gray-200", "text-gray-700");
  }
}


allTab.addEventListener("click", () => {
  showTab("all");
  setActiveTab("all");
});

interviewTab.addEventListener("click", () => {
  showTab("interview");
  setActiveTab("interview");
});

rejectedTab.addEventListener("click", () => {
  showTab("rejected");
  setActiveTab("rejected");
});

jobs.forEach(job => {
  const infoP = job.querySelector("p.text-xs");
  let statusLabel = job.querySelector(".statusLabel");

  const interviewBtn = job.querySelector(".interviewBtn");
  const rejectedBtn = job.querySelector(".rejectedBtn");
  const deleteBtn = job.querySelector(".deleteBtn");

  function createLabel(text, bgColor, textColor) {
    if (statusLabel) statusLabel.remove();

    const label = document.createElement("span");
    label.classList.add(
      "statusLabel","ml-2","px-2","py-1","rounded-full","text-xs","font-semibold",bgColor,textColor
    );

    label.innerText = text;
    infoP.after(label);
    statusLabel = label;
  }

  interviewBtn.addEventListener("click", () => {
    job.dataset.status = "interview";
    createLabel("Interview", "bg-green-100", "text-green-700");
    showTab(currentTab);
  });

     rejectedBtn.addEventListener("click", () => {
    job.dataset.status = "rejected";
    createLabel("Rejected", "bg-red-100", "text-red-700");
    showTab(currentTab);
  });

  deleteBtn.addEventListener("click", () => {
    const index = jobs.indexOf(job);
    if (index > -1) jobs.splice(index, 1);
    job.remove();
    showTab(currentTab);
  });
});
setActiveTab("all");
showTab("all");
updateDashboard();