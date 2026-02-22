const alljob = {
  jobs: [
    {
      id: "J1",
      companyName: "Mobile First Corp",
      position: "React Native Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$130,000 - $175,000",
      description:
        "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
      status: "none",
    },
    {
      id: "J2",
      companyName: "WebFlow Agency",
      position: "Web Designer & Developer",
      location: "Los Angeles, CA",
      type: "Part-time",
      salary: "$80,000 - $120,000",
      description:
        "Create modern websites for client projects. You will turn design concepts into responsive pages and optimize performance.",
      status: "none",
    },
    {
      id: "J3",
      companyName: "DataViz Solutions",
      position: "Data Visualization Specialist",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$125,000 - $165,000",
      description:
        "Build interactive dashboards and clear data stories. Strong skills in charts, analytics, and clean UI presentation are preferred.",
      status: "none",
    },
    {
      id: "J4",
      companyName: "CloudNine Systems",
      position: "Node.js Backend Engineer",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      description:
        "Develop REST APIs, handle database design, and improve reliability. Experience with authentication and caching is a plus.",
      status: "none",
    },
    {
      id: "J5",
      companyName: "PixelCraft Studio",
      position: "UI/UX Designer",
      location: "Seattle, WA",
      type: "Contract",
      salary: "$60 - $90 / hour",
      description:
        "Design clean dashboards and form experiences. You will create reusable components and maintain consistent design systems.",
      status: "none",
    },
    {
      id: "J6",
      companyName: "GreenPay Fintech",
      position: "QA Tester (Web Apps)",
      location: "Remote",
      type: "Full-time",
      salary: "$45,000 - $70,000",
      description:
        "Test billing and payment flows, report bugs with clear reproduction steps, and verify fixes across browsers and devices.",
      status: "none",
    },
    {
      id: "J7",
      companyName: "EduWave LMS",
      position: "Frontend Developer (Tailwind)",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$85,000 - $115,000",
      description:
        "Build responsive UI with Tailwind, create dashboards with filters and tables, and integrate frontend with REST APIs.",
      status: "none",
    },
    {
      id: "J8",
      companyName: "BrightCommerce",
      position: "WordPress Developer",
      location: "Remote",
      type: "Contract",
      salary: "$250 - $450 / week",
      description:
        "Customize themes, improve page speed, and enhance checkout UX. Experience with WooCommerce and SEO basics is required.",
      status: "none",
    },
  ],
};

const allData = {
  currentTab: "all",
  jobs: alljob.jobs,
};


const jobsList = document.getElementById("jobsList");
const totalJob = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const headerJobsCount = document.getElementById("headerJobsCount");
const tabButtons = document.querySelectorAll(".tab-btn");


function setActiveTabUI() {
  tabButtons.forEach((b) => b.classList.remove("tab-active"));
  const active = document.querySelector(`.tab-btn[data-tab="${allData.currentTab}"]`);
  active?.classList.add("tab-active");
}

function counts() {
  return {
    total: allData.jobs.length,
    interview: allData.jobs.filter((j) => j.status === "Interview").length,
    rejected: allData.jobs.filter((j) => j.status === "Rejected").length,
  };
}

function filteredJobs() {
  if (allData.currentTab === "interview") {
    return allData.jobs.filter((j) => j.status === "Interview");
  }
  if (allData.currentTab === "rejected") {
    return allData.jobs.filter((j) => j.status === "Rejected");
  }
  return allData.jobs; 
}

function emptyStateHTML() {
  return `
    <div class="min-h-[360px] flex items-center justify-center">
      <div class="text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-base-200">
          <img src="./images/jobs.png">
        </div>

        <h3 class="text-xl font-bold">No jobs available</h3>
        <p class="mt-1 text-sm text-base-content/60">
          Check back soon for new job opportunities
        </p>
      </div>
    </div>
  `;
}

function statusPill(status) {
  if (status === "Interview")
    return `<span class="badge badge-success badge-outline text-xs">INTERVIEW</span>`;
  if (status === "Rejected")
    return `<span class="badge badge-error badge-outline text-xs">REJECTED</span>`;
  return '';
}

// ------------------------------
// UI CARD
// ------------------------------
function card(job) {
  const isInterview = job.status === "Interview";
  const isRejected = job.status === "Rejected";

  const interviewBtn =
    "btn-interview btn btn-sm uppercase " +
    (isInterview ? "btn-success" : "btn-outline btn-success");

  const rejectedBtn =
    "btn-rejected btn btn-sm uppercase " +
    (isRejected ? "btn-error" : "btn-outline btn-error");

  return `
    <article class="card bg-base-100 shadow" data-id="${job.id}">
      <div class="card-body p-5 relative">
        <button class="btn-delete btn btn-ghost btn-sm btn-circle absolute right-3 top-3" title="Delete">
          <img src="./images/delete.png" width="18" height="18" alt="delete">
        </button>

        <h3 class="card-title text-base">${job.companyName}</h3>
        <p class="text-sm text-base-content/70 -mt-1">${job.position}</p>

        <p class="mt-3 text-sm text-base-content/60">
          ${job.location} &nbsp;•&nbsp; ${job.type} &nbsp;•&nbsp; ${job.salary}
        </p>

        <div class="mt-3">${statusPill(job.status)}</div>

        <p class="mt-3 text-sm text-base-content/70 leading-relaxed">${job.description}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <button class="${interviewBtn}">Interview</button>
          <button class="${rejectedBtn}">Rejected</button>
        </div>
      </div>
    </article>
  `;
}


function render() {
  // dashboard
  const c = counts();
  if (totalJob) totalJob.textContent = c.total;
  if (interviewCountEl) interviewCountEl.textContent = c.interview;
  if (rejectedCountEl) rejectedCountEl.textContent = c.rejected;

  // list (tab wise)
  const list = filteredJobs();

   headerJobsCount.textContent = `${list.length} of ${c.total}`;

  // empty state for ANY tab (including all)
  if (list.length === 0) {
    jobsList.innerHTML = emptyStateHTML();
    return;
  }

  jobsList.innerHTML = list.map(card).join("");
}

// ------------------------------
// TAB CLICK
// ------------------------------
tabButtons.forEach(btn => btn.addEventListener("click", () => {
  allData.currentTab = btn.dataset.tab;
  tabButtons.forEach(b => b.classList.toggle("tab-active", b === btn));
  render();
}));


jobsList.addEventListener("click", (e) => {
  // Delete
  const delBtn = e.target.closest(".btn-delete");
  if (delBtn) {
    const id = delBtn.closest("article[data-id]")?.dataset.id;
    if (!id) return;

    allData.jobs = allData.jobs.filter((j) => j.id !== id);
    render();
    return;
  }

  // Interview
  const interviewBtn = e.target.closest(".btn-interview");
  if (interviewBtn) {
    const id = interviewBtn.closest("article[data-id]")?.dataset.id;
    if (!id) return;

    const job = allData.jobs.find((j) => j.id === id);
    if (!job) return;

    job.status = "Interview";
    render();
    return;
  }

  // Rejected
  const rejectedBtn = e.target.closest(".btn-rejected");
  if (rejectedBtn) {
    const id = rejectedBtn.closest("article[data-id]")?.dataset.id;
    if (!id) return;

    const job = allData.jobs.find((j) => j.id === id);
    if (!job) return;

    job.status = "Rejected";
    render();
    return;
  }
});
render();